<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\AktivitasModel;
use App\Http\Requests;
use App\Http\Resources\AktivitasResources;

class ApiAktivitasController extends Controller
{
    public function aktivitasget()
    {
        $aktivitas = AktivitasModel::paginate(15);
        return AktivitasResources::collection($aktivitas);
    }
    public function aktivitasstore(Request $request)
    {
        $aktivitas = $request ->isMethod('put') ? AktivitasModel::findOrFail($request->id) : new aktivitasModel;
        $aktivitas->id = $request->input('id');
        $aktivitas->user_id = $request->input('user_id');
    	$aktivitas->panjang_ikan = $request->input('panjang_ikan');
        $aktivitas->jumlah_ikan = $request->input('jumlah_ikan');
        $aktivitas->berat_ikan = $request->input('berat_ikan');
        $aktivitas->tanggal_pindah = $request->input('tanggal_pindah');
        $aktivitas->keramba_sebelum = $request->input('keramba_sebelum');
        $aktivitas->keramba_sesudah = $request->input('keramba_sesudah');
        $aktivitas->tanggal_cuci = $request->input('tanggal_cuci');
        // $aktivitas->tanggal_cuci = Carbon::createFromFormat('Y-m-d',$request->input('tanggal_cuci'))->format('d-m-Y');
        // $aktivitas->keramba_id = $request->input('keramba_id');
        $aktivitas->produksi_id = $request->input('produksi_id');

        if($aktivitas->save()){
            return new aktivitasResources($aktivitas);
        }

    }
    public function showaktivitas($id)
    {
        $aktivitas = aktivitasModel::findOrFail($id);
        return new aktivitasResources($aktivitas);
    }
    public function where(Request $request)
    {
        $produksi_id = $request->query('produksi');
        $user_id = $request->query('user');
        
        if(is_null($produksi_id)){
        $produksi = aktivitasModel::Where('user_id', $user_id)->paginate(2);
        return aktivitasResources::collection($produksi);
        }
        if(is_null($user_id)){
        $user = aktivitasModel::where('produksi_id',$produksi_id)->paginate(2);
        return aktivitasResources::collection($user);
        }
        else{
        $all = aktivitasModel::where('produksi_id',$produksi_id)->Where('user_id', $user_id)->paginate(2);
        return aktivitasResources::collection($all);
        }
        // $produksi = aktivitasModel::where('produksi_id',$produksi_id)->paginate(2);
        // return aktivitasResources::collection($produksi);
         
    }
    public function destroyaktivitas($id)
{
    $aktivitas = aktivitasModel::findOrFail($id);
    if($aktivitas->delete()){
    return new aktivitasResources($aktivitas);
}
}
}
