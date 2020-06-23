<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\DB;
use App\ProduksiModel;
use App\PakanModel;
use App\KerambaModel;
use App\SubproduksiModel;
use App\SubproduksiLogModel;
use App\Http\Resources\ProduksiResources;
use App\PencucianModel;
use App\Http\Resources\PencucianResources;
use App\PemindahanModel;
use App\Http\Resources\PemindahanResources;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ApiProduksiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(auth('api')->user()->status == 'admin'){
            $produksi = ProduksiModel::paginate(5);
        }
        else{
            // $kelompok = auth('api')->user()->kelompok_id;
            // $produksi = ProduksiModel::where('kelompok_id', $kelompok)->paginate(5);
            $user = auth('api')->user()->id;
            $produksi = ProduksiModel::where('user_id', $user)->paginate(5);
        }

        // $produksi = ProduksiModel::find(1)->pencucian()->get();

        // $produksi = ProduksiModel::with(array('pencucian' => function($query){
        //     $query->select('id','tanggal_cuci','berat_ikan','user_id','jumlah_ikan','panjang_ikan','produksi_id');
        // }))->get();
        // $data = ProduksiModel::with('pencucian:id,berat_ikan,tanggal_cuci,produksi_id')->get();
        return  ProduksiResources::collection($produksi);
        // $produksi = ProduksiModel::paginate(5);
    }

    public function wheretotalproduksi(Request $request)
    {
        $user_id = $request->query('user');
        $produksibulanini = ProduksiModel::where('user_id',$user_id)->whereMonth('created_at', Carbon::now()->month)
        ->whereYear('created_at', Carbon::now()->year)->count();
        $produksitahunini = ProduksiModel::where('user_id',$user_id)->whereYear('created_at', Carbon::now()->year)->count();
        return response()->json(compact('produksibulanini','produksitahunini'),201);
    }

     public function whereproduksipembesaran(Request $request)
        {
        $user_id = $request->query('user');
    
        $produksi = ProduksiModel::leftjoin('subproduksi', 'subproduksi.produksi_id', '=', 'produksi.id')
        ->leftjoin('keramba', 'keramba.id', '=','produksi.keramba_id')
        ->leftjoin('pakan', 'pakan.subproduksi_id', '=','subproduksi.id')
        ->select('produksi.*','keramba.nama_keramba', DB::raw('sum(subproduksi.jumlah_ikan) as jumlah_terkini'),DB::raw('sum(pakan.jumlah_pakan) as total_pakan'))
        ->groupBy('produksi.id')
        ->where('produksi.user_id',$user_id)->where('produksi.jumlah_subproduksi', '!=' , 0)
        ->where('subproduksi.status_panen','Pembesaran')
        ->paginate(5);
        return  ProduksiResources::collection($produksi);
        }

     public function whereproduksipanen(Request $request)
        {
        $user_id = $request->query('user');
    
        $produksi = ProduksiModel::leftjoin('subproduksi', 'subproduksi.produksi_id', '=', 'produksi.id')
        ->leftjoin('keramba', 'keramba.id', '=','produksi.keramba_id')
        ->select('produksi.*','keramba.nama_keramba',DB::raw('MAX(subproduksi.tanggal_panen) as tanggal_panen') , DB::raw('sum(subproduksi.jumlah_ikan) as jumlah_terkini'))
        ->groupBy('produksi.id')
        ->where('produksi.user_id',$user_id)->where('produksi.jumlah_subproduksi', '=' , 0)
        ->where('subproduksi.status_panen','Panen')
        ->paginate(5);
        return  ProduksiResources::collection($produksi);
        }
 
    public function getallproduksi()
    {
        $produksi = DB::table('produksi')
            ->leftjoin('subproduksi', 'produksi_id', '=', 'produksi.id')
            ->select('produksi.*', 'subproduksi.jumlah_ikan','subproduksi.panjang_ikan','subproduksi.berat_ikan','subproduksi.tanggal_cuci',
            'subproduksi.tanggal_pindah','subproduksi.keramba_sebelum','subproduksi.keramba_sesudah')
            ->groupBy('produksi.id')
            ->whereRaw('subproduksi.id IN (select MAX(subproduksi.id) FROM subproduksi GROUP BY subproduksi.produksi_id)')
            ->orWhereNull('produksi_id')
            ->get();

        return  ProduksiResources::collection($produksi);

    }
    
    public function create(Request $request)
    {
        try{DB::beginTransaction();
        $user = $request->user(); 
        $produksi = ProduksiModel::create([
            // 'user_id' => $request->input('user_id'),
            'nama_ikan' => $request->input('nama_ikan'),
            'panjang_ikan' => $request->input('panjang_ikan'),
            'berat_ikan' => $request->input('berat_ikan'),
            'jumlah_ikan' => $request->input('jumlah_ikan'),
            'tanggal_tebar' => $request->input('tanggal_tebar'),
            'keramba_id' => $request->input('keramba_id'),
            // 'kelompok_id' => $request->input('kelompok_id'),
            'kelompok_id' => $user->kelompok_id,
            'user_id' => $user->id,
            'jumlah_subproduksi' => '1'
        ]);

        $subproduksi = SubproduksiModel::create([
            // 'user_id' => $request->input('user_id'),
            'nama_ikan' => $request->input('nama_ikan'),
            // 'panjang_ikan' => $request->input('panjang_ikan'),
            // 'berat_ikan' => $request->input('berat_ikan'),
            'jumlah_ikan' => $request->input('jumlah_ikan'),
            'produksi_id' => $produksi->id,
            // 'keramba_sesudah' => $request->input('keramba_id'),
        ]);

        $subproduksilog = SubproduksiLogModel::create([
            // 'user_id' => $request->input('user_id'),
            'nama_ikan' => $request->input('nama_ikan'),
            'panjang_ikan' => $request->input('panjang_ikan'),
            'berat_ikan' => $request->input('berat_ikan'),
            'jumlah_ikan' => $request->input('jumlah_ikan'),
            'keramba_sesudah' => $request->input('keramba_id'),
            'kegiatan' => 'Penebaran',
            'subproduksi_id' => $subproduksi->id,
            ]);
        DB::commit();
        return new ProduksiResources($produksi);
        }
        catch(\Exception $e) {
            DB::rollback();
            return response()->json([
                'message'=> $e->getMessage()
            ], 500);
        }
    }
    

    public function showproduksibyidkelompok($kelompok_id)
    {
        $produksi = ProduksiModel::where(compact('kelompok_id'))->get();
        if(is_null($produksi))
        {
            return response()->json("not found");
        }
        return ProduksiResources::collection($produksi);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $produksi = ProduksiModel::findOrFail($id);
        return new ProduksiResources($produksi);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $produksi = ProduksiModel::findOrFail($id);
        if($produksi->delete()){
        return new ProduksiResources($produksi);
    }
}


public function where(Request $request)
    {
        $keramba_id = $request->query('keramba');
        $kelompok_id = $request->query('kelompok');
        $user_id = $request->query('user');
        if(is_null($keramba_id)&&is_null($kelompok_id)){
            $user = ProduksiModel::where('user_id',$user_id)->paginate(2);
            return ProduksiResources::collection($user);
       }
       if(is_null($kelompok_id)&&is_null($user_id)){
        $keramba = ProduksiModel::where('keramba_id',$keramba_id)->paginate(2);
        return ProduksiResources::collection($keramba);
       }
       if(is_null($keramba_id)&&is_null($user_id)){
        $kelompok = ProduksiModel::where('kelompok_id',$kelompok_id)->paginate(2);
        return ProduksiResources::collection($kelompok);
        }
        if(is_null($kelompok_id)){
        $kelompok = ProduksiModel::where('keramba_id',$keramba_id)->Where('user_id', $user_id)->paginate(2);
        return ProduksiResources::collection($kelompok);
        }
        if(is_null($keramba_id)){
            $keramba = ProduksiModel::where('kelompok_id',$kelompok_id)->Where('user_id', $user_id)->paginate(2);
            return ProduksiResources::collection($keramba);
            }
            if(is_null($user_id)){
                $user = ProduksiModel::where('kelompok_id',$kelompok_id)->Where('keramba_id', $keramba_id)->paginate(2);
                return ProduksiResources::collection($user);
                }
                else{
                    $all = ProduksiModel::where('kelompok_id',$kelompok_id)->Where('keramba_id', $keramba_id)->Where('user_id', $user_id)->paginate(2);
                return ProduksiResources::collection($all);
                }

   }

}
