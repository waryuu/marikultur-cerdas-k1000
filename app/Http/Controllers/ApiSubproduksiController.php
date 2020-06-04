<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\SubproduksiModel;
use Response;
use Illuminate\Support\Facades\Validator;
use App\ProduksiModel;
use App\KerambaModel;
use App\SensorDoModel;
use App\SensorSuhuModel;
use App\SubproduksiLogModel;
use App\Http\Requests;
use App\Http\Resources\SubproduksiResources;
use App\Http\Resources\SubproduksiLogResources;

class ApiSubproduksiController extends Controller
{
    public function get()
    {
        $subproduksi = SubproduksiModel::paginate(15);
        return SubproduksiResources::collection($subproduksi);
    }
    public function where(Request $request)
    {
        $produksi_id = $request->query('produksi');
        
        // $produksi = SubproduksiModel::where('produksi_id',$produksi_id)->paginate(5);
        // return SubproduksiResources::collection($produksi);
        
        $produksi = SubproduksiModel::leftjoin('sensor_do', 'sensor_do.keramba_id', '=', 'subproduksi.keramba_sesudah')
            ->leftjoin('sensor_suhu', 'sensor_suhu.keramba_id', '=', 'subproduksi.keramba_sesudah')
            ->select('subproduksi.*', 'sensor_suhu.suhu_air', 'sensor_do.do_air')
            ->groupBy('subproduksi.id')
            ->where('produksi_id',$produksi_id)
            ->paginate(5);
            return SubproduksiResources::collection($produksi);
        }
    public function wherepembesaran(Request $request)
    {
        $produksi_id = $request->query('produksi');
        $status_panen = $request->query('status');
        
        $produksi = SubproduksiModel::leftjoin('keramba', 'keramba.id', '=','subproduksi.keramba_sesudah')
        ->select('subproduksi.*','keramba.nama_keramba')
        ->groupBy('subproduksi.id')
        ->where('produksi_id',$produksi_id)->where('status_panen','Pembesaran')
        ->paginate(5);
        return SubproduksiResources::collection($produksi);
        
        }
        // $produksi = subproduksiModel::where('produksi_id',$produksi_id)->paginate(2);
        // return subproduksiResources::collection($produksi);
    public function wherepanen(Request $request)
        {
        $produksi_id = $request->query('produksi');
        $status_panen = $request->query('status');
            
        $produksi = SubproduksiModel::where('produksi_id',$produksi_id)->where('status_panen','Panen')->paginate(5);
        return SubproduksiResources::collection($produksi);
            
        }
    
    public function wheretotalikan(Request $request)
    {
    $user_id = $request->query('user');
    $user = SubproduksiModel::groupBy('nama_ikan')->where('user_id',$user_id)->where('status_panen','Pembesaran')
    ->select('nama_ikan', DB::raw('sum(jumlah_ikan) as total_ikan'))->get();
    $total = SubproduksiModel::where('user_id',$user_id)->where('status_panen','Pembesaran')->sum('jumlah_ikan');
    return response()->json(compact('user','total'),201);

    // $user = SubproduksiModel::where('user_id',$user_id)->sum('jumlah_ikan');
    // return Response::json($user);

    // $user = SubproduksiModel::groupBy('nama_ikan')->where('user_id',$user_id)
    // ->select('count(jumlah_ikan) as total, group_id')
    // ->get();
    }

    public function updatesubproduksi(Request $request)
    {
        $validator = Validator::make($request->all(), [
                    'nama_ikan' => 'required|string',
                    'panjang_ikan' => 'required|integer',
                    'jumlah_ikan' => 'required|integer',
                    'berat_ikan' => 'required|string',
                    'tanggal_pindah' => 'required|string',
                    'tanggal_cuci' => 'required|string',
                    'keramba_sebelum' => 'nullable|integer',
                    'keramba_sesudah' => 'required|integer',
                    'produksi_id'=> 'required|integer',
                    'user_id'=> 'required|integer',
                ]);
    
                if($validator->fails()){
                    return response()->json($validator->errors()->toJson(), 400);
            }
        try{DB::beginTransaction();

            $nama_ikan = $request->nama_ikan;
            $id = $request->id;
            $panjang_ikan = $request->panjang_ikan;
                $jumlah_ikan = $request->jumlah_ikan;
                $berat_ikan = $request->berat_ikan; 
                $tanggal_pindah = $request->tanggal_pindah;
                $tanggal_cuci = $request->tanggal_cuci;
                $keramba_sebelum = $request->keramba_sebelum;
                $keramba_sesudah = $request->keramba_sesudah;
                $user_id = $request->user_id;
            $produksi_id = $request->produksi_id;
        
                $subproduksi = SubproduksiModel::find($id);
                
                $subproduksi->nama_ikan = $nama_ikan;
                $subproduksi->panjang_ikan = $panjang_ikan;
                $subproduksi->jumlah_ikan = $jumlah_ikan;
                $subproduksi->berat_ikan = $berat_ikan;
            	$subproduksi->tanggal_pindah = $tanggal_pindah;
                $subproduksi->tanggal_cuci = $tanggal_cuci;
                $subproduksi->keramba_sebelum = $keramba_sebelum;
                $subproduksi->keramba_sesudah = $keramba_sesudah;
                $subproduksi->user_id = $user_id;
                $subproduksi->save();

        $subproduksilog = SubproduksiLogModel::create([
            // 'user_id' => $request->input('user_id'),
            'nama_ikan' => $request->input('nama_ikan'),
            'panjang_ikan' => $request->input('panjang_ikan'),
            'berat_ikan' => $request->input('berat_ikan'),
            'jumlah_ikan' => $request->input('jumlah_ikan'),
            'tanggal_pindah' => $request->input('tanggal_pindah'),
            'tanggal_cuci' => $request->input('tanggal_cuci'),
            'keramba_sebelum' => $request->input('keramba_sebelum'),
            'keramba_sesudah' => $request->input('keramba_sesudah'),
            'subproduksi_id' => $subproduksi->id,
            'kegiatan' => 'Pengubahan'
        ]);
            DB::commit();
           
            return new SubproduksiResources($subproduksi);
            
        }
            catch(\Exception $e) {
                DB::rollback();
                return response()->json([
                    'message'=> $e->getMessage()
                ], 500);
            }
            // $subproduksi = $request ->isMethod('put') ? SubproduksiModel::findOrFail($request->id) : new SubproduksiModel;
            // $subproduksi->id = $request->input('id');
            // // $subproduksi->user_id = $request->input('user_id');
            // $subproduksi->nama_ikan = $request->input('nama_ikan');
            // $subproduksi->panjang_ikan = $request->input('panjang_ikan');
            // $subproduksi->jumlah_ikan = $request->input('jumlah_ikan');
            // $subproduksi->berat_ikan = $request->input('berat_ikan');
            // $subproduksi->tanggal_pindah = $request->input('tanggal_pindah');
            // $subproduksi->keramba_sebelum = $request->input('keramba_sebelum');
            // $subproduksi->keramba_sesudah = $request->input('keramba_sesudah');
            // $subproduksi->tanggal_cuci = $request->input('tanggal_cuci');
            // // $subproduksi->tanggal_cuci = Carbon::createFromFormat('Y-m-d',$request->input('tanggal_cuci'))->format('d-m-Y');
            // $subproduksi->produksi_id = $request->input('produksi_id');
            // $subproduksi->status_panen = 'Pembesaran';

    }
    public function pindahsubproduksi(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama_ikan' => 'required|string',
            'panjang_ikan' => 'required|integer',
            'jumlah_ikan' => 'required|integer',
            'berat_ikan' => 'required|string',
            'tanggal_pindah' => 'required|string',
            'tanggal_cuci' => 'required|string',
            'keramba_sebelum' => 'required|integer',
            'keramba_sesudah' => 'required|integer',
            'produksi_id'=> 'required|integer',
            'user_id'=> 'required|integer',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
         }
        try{DB::beginTransaction();

        $id = $request->produksi_id;
        $produksi = ProduksiModel::find($id)->increment('jumlah_subproduksi');

        $subproduksi = SubproduksiModel::create([
            'user_id' => $request->input('user_id'),
            'nama_ikan' => $request->input('nama_ikan'),
            'panjang_ikan' => $request->input('panjang_ikan'),
            'berat_ikan' => $request->input('berat_ikan'),
            'jumlah_ikan' => $request->input('jumlah_ikan'),
            'tanggal_pindah' => $request->input('tanggal_pindah'),
            'tanggal_cuci' => $request->input('tanggal_cuci'),
            'keramba_sebelum' => $request->input('keramba_sebelum'),
            'keramba_sesudah' => $request->input('keramba_sesudah'),
            'produksi_id' => $request->input('produksi_id'),
            'status_panen' => "Pembesaran",
        ]);

        // Now you have a Family object so we can use that for the contact model

        $subproduksilog = SubproduksiLogModel::create([
            // 'user_id' => $request->input('user_id'),
            'nama_ikan' => $request->input('nama_ikan'),
            'panjang_ikan' => $request->input('panjang_ikan'),
            'berat_ikan' => $request->input('berat_ikan'),
            'jumlah_ikan' => $request->input('jumlah_ikan'),
            'tanggal_pindah' => $request->input('tanggal_pindah'),
            'tanggal_cuci' => $request->input('tanggal_cuci'),
            'keramba_sebelum' => $request->input('keramba_sebelum'),
            'keramba_sesudah' => $request->input('keramba_sesudah'),
            'subproduksi_id' => $subproduksi->id,
            'kegiatan' => 'Pemindahan'
        ]);

        $id_pindah = $request->subproduksi_yang_dipindah;
        $subproduksi_decent = SubproduksiModel::find($id_pindah)->decrement('jumlah_ikan', $subproduksi->jumlah_ikan);

        DB::commit();
        return new SubproduksiResources($subproduksi);
        return new SubproduksiLogResources($subproduksilog);
        }
        catch(\Exception $e) {
            DB::rollback();
            return response()->json([
                'message'=> $e->getMessage()
            ], 500);
        }
    }

  
    
    //  public function subproduksiupdate(Request $request)
    // {
    //     $panjang_ikan = $request->panjang_ikan;
    //     $jumlah_ikan = $request->jumlah_ikan;
    //     $berat_ikan = $request->berat_ikan; 
    //     $tanggal_pindah = $request->tanggal_pindah;
    //     $tanggal_cuci = $request->tanggal_cuci;
    //     $keramba_sebelum = $request->keramba_sebelum;
    //     $keramba_sesudah = $request->keramba_sesudah;

    //     $subproduksi = SubproduksiModel::find($id);
        
    //     $subproduksi->panjang_ikan = $panjang_ikan;
    //     $subproduksi->jumlah_ikan = $jumlah_ikan;
    //     $subproduksi->berat_ikan = $berat_ikan;
    // 	$subproduksi->tanggal_pindah = $tanggal_pindah;
    //     $subproduksi->tanggal_cuci = $tanggal_cuci;
    //     $subproduksi->keramba_sebelum = $keramba_sebelum;
    //     $subproduksi->keramba_sesudah = $keramba_sesudah;
    //     $subproduksi->save();
        
    //     $subproduksilog = SubproduksiLog::create([
    //         'user_id' => $request->input('user_id'),
    //         'panjang_ikan' => $request->input('panjang_ikan'),
    //         'berat_ikan' => $request->input('berat_ikan'),
    //         'jumlah_ikan' => $request->input('jumlah_ikan'),
    //         'tanggal_pindah' => $request->input('tanggal_pindah'),
    //         'tanggal_cuci' => $request->input('tanggal_cuci'),
    //         'keramba_sebelum' => $request->input('keramba_sebelum'),
    //         'keramba_sesudah' => $request->input('keramba_sesudah'),
    //         'subproduksi_id' => $subproduksi->id,
    //     ]);

    // 	return new SubproduksiResources($subproduksi);
    // }

    public function panen(Request $request)
    {
        $id = $request->id;
        $berat_ikan_akhir = $request->berat_ikan_akhir;
        $jumlah_ikan_akhir = $request->jumlah_ikan_akhir;
        $panjang_ikan_akhir = $request->panjang_ikan_akhir; 
        $tanggal_panen = $request->tanggal_panen;
        $status_panen = $request->status_panen;
        $produksi_id = $request->produksi_id;


        $panen = SubproduksiModel::find($id);
        
        $panen->berat_ikan_akhir = $berat_ikan_akhir;
        $panen->jumlah_ikan_akhir = $jumlah_ikan_akhir;
        $panen->panjang_ikan_akhir = $panjang_ikan_akhir;
    	$panen->tanggal_panen = $tanggal_panen;
        $panen->status_panen = 'Panen';
        $panen->save();
        $id = $request->produksi_id;
        $produksi = ProduksiModel::find($id)->decrement('jumlah_subproduksi');

    	return new SubproduksiResources($panen);
    }

    public function showsubproduksi($id)
    {
        $subproduksi = SubproduksiModel::findOrFail($id);
        return new SubproduksiResources($subproduksi);
    }
    // public function where(Request $request)
    // {
    //     $produksi_id = $request->query('produksi');
    //     $user_id = $request->query('user');
        
    //     if(is_null($produksi_id)){
    //     $produksi = SubproduksiModel::Where('user_id', $user_id)->paginate(5);
    //     return SubproduksiResources::collection($produksi);
    //     }
    //     if(is_null($user_id)){
    //     $user = SubproduksiModel::where('produksi_id',$produksi_id)->paginate(5);
    //     return SubproduksiResources::collection($user);
    //     }
    //     else{
    //     $all = SubproduksiModel::where('produksi_id',$produksi_id)->Where('user_id', $user_id)->paginate(5);
    //     return SubproduksiResources::collection($all);
    //     }
    //     // $produksi = subproduksiModel::where('produksi_id',$produksi_id)->paginate(2);
    //     // return subproduksiResources::collection($produksi);
         
    // }
    public function destroy($id)
{
    $subproduksi = SubproduksiModel::findOrFail($id);
    if($subproduksi->delete()){
    return new SubproduksiResources($subproduksi);
}
}
}