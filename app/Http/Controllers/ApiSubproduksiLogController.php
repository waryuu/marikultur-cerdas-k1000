<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\SubproduksiModel;
use App\SubproduksiLogModel;
use Illuminate\Support\Facades\DB;
use App\Http\Requests;
use App\Http\Resources\SubproduksiResources;
use App\Http\Resources\SubproduksiLogResources;

class ApiSubproduksiLogController extends Controller
{
    public function subproduksilogget()
    {
        $subproduksilog = SubproduksiLogModel::paginate(15);
        return SubproduksiLogResources::collection($subproduksilog);
    }
    
    public function getsubproduksilogbyuser(Request $request)
    {

        $user_id = $request->query('user');
        $subproduksilog = SubproduksiModel::join('subproduksilog', 'subproduksi_id', '=', 'subproduksi.id')
            ->select('subproduksilog.*', 'subproduksi.user_id')
            ->groupBy('subproduksilog.id')
            ->where('user_id',$user_id)
            ->paginate(5);

        return  SubproduksiLogResources::collection($subproduksilog);

        // ,DB::raw("SELECT MAX(id)
        //     FROM volumes
        //     GROUP BY journal_id)")

        // , DB::raw('MAX(subproduksi.id) as subproduksi_id')
        // $produksi = ProduksiModel::with('subproduksi')->find(1);
        // return  NEW ProduksiResources($produksi);
    }

    public function subproduksilogstore(Request $request)
    {

       

        if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
        }

        $subproduksilog = $request ->isMethod('put') ? SubproduksiLogModel::findOrFail($request->id) : new SubproduksiLogModel;
        $subproduksilog->id = $request->input('id');
        // $subproduksilog->user_id = $request->input('user_id');
        $subproduksilog->nama_ikan = $request->input('nama_ikan');
    	$subproduksilog->panjang_ikan = $request->input('panjang_ikan');
        $subproduksilog->jumlah_ikan = $request->input('jumlah_ikan');
        $subproduksilog->berat_ikan = $request->input('berat_ikan');
        $subproduksilog->tanggal_pindah = $request->input('tanggal_pindah');
        $subproduksilog->keramba_sebelum = $request->input('keramba_sebelum');
        $subproduksilog->keramba_sesudah = $request->input('keramba_sesudah');
        $subproduksilog->tanggal_cuci = $request->input('tanggal_cuci');
        $subproduksilog->kegiatan = $request->input('kegiatan');
        $subproduksilog->produksi_id = $request->input('subproduksi_id');
            
        if($subproduksilog->save()){
            return new SubproduksiLogResources($subproduksilog);
        }

    }
    
    public function showsubproduksilog($id)
    {
        $subproduksilog = SubproduksiLogModel::findOrFail($id);
        return new SubproduksiLogResources($subproduksilog);
    }
    public function where(Request $request)
    {
        $subproduksi_id = $request->query('subproduksi');
        $user_id = $request->query('user');
        
        if(is_null($subproduksi_id)){
        $subproduksi = SubproduksiLogModel::Where('user_id', $user_id)->paginate(5);
        return SubproduksiLogResources::collection($subproduksi);
        }
        if(is_null($user_id)){
        $user = SubproduksiLogModel::where('subproduksi_id',$subproduksi_id)->paginate(5);
        return SubproduksiLogResources::collection($user);
        }
        else{
        $all = SubproduksiLogModel::where('subproduksi_id',$subproduksi_id)->Where('user_id', $user_id)->paginate(5);
        return SubproduksiLogResources::collection($all);
        }
        // $produksi = subproduksilogModel::where('produksi_id',$produksi_id)->paginate(2);
        // return subproduksilogResources::collection($produksi);
         
    }
    public function destroysubproduksilog($id)
{
    $subproduksilog = SubproduksiLogModel::findOrFail($id);
    if($subproduksilog->delete()){
    return new SubproduksiLogResources($subproduksilog);
}
}
}
