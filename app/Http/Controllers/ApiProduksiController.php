<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\DB;
use App\ProduksiModel;
use App\SubproduksiModel;
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

        // ,DB::raw("SELECT MAX(id)
        //     FROM volumes
        //     GROUP BY journal_id)")

        // , DB::raw('MAX(subproduksi.id) as subproduksi_id')
        // $produksi = ProduksiModel::with('subproduksi')->find(1);
        // return  NEW ProduksiResources($produksi);
    }
    
    public function create(Request $request)
    {
        try{DB::beginTransaction();

        $produksi = ProduksiModel::create([
            'user_id' => $request->input('user_id'),
            'nama_ikan' => $request->input('nama_ikan'),
            'panjang_ikan' => $request->input('panjang_ikan'),
            'berat_ikan' => $request->input('berat_ikan'),
            'jumlah_ikan' => $request->input('jumlah_ikan'),
            'tanggal_tebar' => $request->input('tanggal_tebar'),
            'keramba_id' => $request->input('keramba_id'),
            'kelompok_id' => $request->input('kelompok_id')
        ]);

        // Now you have a Family object so we can use that for the contact model

        $subproduksi = SubproduksiModel::create([
            'user_id' => $request->input('user_id'),
            'nama_ikan' => $request->input('nama_ikan'),
            'panjang_ikan' => $request->input('panjang_ikan'),
            'berat_ikan' => $request->input('berat_ikan'),
            'jumlah_ikan' => $request->input('jumlah_ikan'),
            'produksi_id' => $produksi->id,
            'keramba_sesudah' => $request->input('keramba_id'),

        ]);
        DB::commit();
        return new ProduksiResources($produksi);
        return new SubproduksiResources($subproduksi);
        }
        catch(\Exception $e) {
            DB::rollback();
            return response()->json([
                'message'=> $e->getMessage()
            ], 500);
        }
    }
    
   
    public function store(Request $request)
    {
        $produksi = $request ->isMethod('put') ? ProduksiModel::findOrFail($request->id) : new ProduksiModel;
        $produksi->id = $request->input('id');
        $produksi->user_id = $request->input('user_id');
    	$produksi->nama_ikan = $request->input('nama_ikan');
        $produksi->panjang_ikan = $request->input('panjang_ikan');
        $produksi->berat_ikan = $request->input('berat_ikan');
        $produksi->jumlah_ikan = $request->input('jumlah_ikan');
        // $produksi->tanggal_tebar = Carbon::createFromFormat('Y-m-d',$request->input('tanggal_tebar'))->format('d-m-Y');
        // $produksi->tanggal_panen = Carbon::createFromFormat('Y-m-d',$request->input('tanggal_panen'))->format('d-m-Y');
        $produksi->tanggal_tebar = $request->input('tanggal_tebar');
        // $produksi->tanggal_panen = $request->input('tanggal_panen');
        // $produksi->status_panen = 'Pembesaran';
        $produksi->keramba_id = $request->input('keramba_id');
        $produksi->kelompok_id = $request->input('kelompok_id');


        if($produksi->save()){
            return new ProduksiResources($produksi);
        }

    }
    

    // public function panen(Request $request,$id)
    // {
    //     $berat_ikan_akhir = $request->berat_ikan_akhir;
    //     $jumlah_ikan_akhir = $request->jumlah_ikan_akhir;
    //     $panjang_ikan_akhir = $request->panjang_ikan_akhir; 
    //     $tanggal_panen = $request->tanggal_panen;
    //     $status_panen = $request->status_panen;


    //     $panen = ProduksiModel::find($id);
        
    //     $panen->berat_ikan_akhir = $berat_ikan_akhir;
    //     $panen->jumlah_ikan_akhir = $jumlah_ikan_akhir;
    //     $panen->panjang_ikan_akhir = $panjang_ikan_akhir;
    // 	$panen->tanggal_panen = $tanggal_panen;
    //     $panen->status_panen = 'Panen';
    // 	$panen->save();

    // 	return new ProduksiResources($panen);
    // }

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
