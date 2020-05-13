<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SUbproduksiModel;
use App\Http\Requests;
use App\Http\Resources\SubproduksiResources;

class ApiSubproduksiController extends Controller
{
    public function subproduksiget()
    {
        $subproduksi = SubproduksiModel::paginate(15);
        return SubproduksiResources::collection($subproduksi);
    }
    public function subproduksistore(Request $request)
    {
        $subproduksi = $request ->isMethod('put') ? SubproduksiModel::findOrFail($request->id) : new SubproduksiModel;
        $subproduksi->id = $request->input('id');
        $subproduksi->user_id = $request->input('user_id');
    	$subproduksi->panjang_ikan = $request->input('panjang_ikan');
        $subproduksi->jumlah_ikan = $request->input('jumlah_ikan');
        $subproduksi->berat_ikan = $request->input('berat_ikan');
        $subproduksi->tanggal_pindah = $request->input('tanggal_pindah');
        $subproduksi->keramba_sebelum = $request->input('keramba_sebelum');
        $subproduksi->keramba_sesudah = $request->input('keramba_sesudah');
        $subproduksi->tanggal_cuci = $request->input('tanggal_cuci');
        // $subproduksi->tanggal_cuci = Carbon::createFromFormat('Y-m-d',$request->input('tanggal_cuci'))->format('d-m-Y');
        // $subproduksi->keramba_id = $request->input('keramba_id');
        $subproduksi->produksi_id = $request->input('produksi_id');
        $subproduksi->status_panen = 'Pembesaran';
        $subproduksi->tanggal_panen = $request->input('tanggal_panen');
        

        if($subproduksi->save()){
            return new SubproduksiResources($subproduksi);
        }

    }
    public function subproduksipanen(Request $request,$id)
    {
        $berat_ikan = $request->berat_ikan;
        $jumlah_ikan = $request->jumlah_ikan;
        $panjang_ikan = $request->panjang_ikan; 
        $tanggal_panen = $request->tanggal_panen;
        $status_panen = $request->status_panen;


        $panen = SubproduksiModel::find($id);
        
        $panen->berat_ikan = $berat_ikan;
        $panen->jumlah_ikan = $jumlah_ikan;
        $panen->panjang_ikan = $panjang_ikan;
    	$panen->tanggal_panen = $tanggal_panen;
        $panen->status_panen = 'Panen';
    	$panen->save();

    	return new SubproduksiResources($panen);
    }

    public function showsubproduksi($id)
    {
        $subproduksi = SubproduksiModel::findOrFail($id);
        return new SubproduksiResources($subproduksi);
    }
    public function where(Request $request)
    {
        $produksi_id = $request->query('produksi');
        $user_id = $request->query('user');
        
        if(is_null($produksi_id)){
        $produksi = SubproduksiModel::Where('user_id', $user_id)->paginate(5);
        return SubproduksiResources::collection($produksi);
        }
        if(is_null($user_id)){
        $user = SubproduksiModel::where('produksi_id',$produksi_id)->paginate(5);
        return SubproduksiResources::collection($user);
        }
        else{
        $all = SubproduksiModel::where('produksi_id',$produksi_id)->Where('user_id', $user_id)->paginate(5);
        return SubproduksiResources::collection($all);
        }
        // $produksi = subproduksiModel::where('produksi_id',$produksi_id)->paginate(2);
        // return subproduksiResources::collection($produksi);
         
    }
    public function destroysubproduksi($id)
{
    $subproduksi = SubproduksiModel::findOrFail($id);
    if($subproduksi->delete()){
    return new SubproduksiResources($subproduksi);
}
}
}