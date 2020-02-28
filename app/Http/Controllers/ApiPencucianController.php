<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\PencucianModel;
use App\Http\Resources\PencucianResources;

class ApiPencucianController extends Controller
{
    public function pencucianget()
    {
        $pencucian = PencucianModel::paginate(15);
        return PencucianResources::collection($pencucian);
    }
    public function pencucianstore(Request $request)
    {
        $pencucian = $request ->isMethod('put') ? ProduksiModel::findOrFail($request->id) : new PencucianModel;
        $pencucian->id = $request->input('id');
        $pencucian->user_id = $request->input('user_id');
    	$pencucian->panjang_ikan = $request->input('panjang_ikan');
    	$pencucian->jumlah_ikan = $request->input('jumlah_ikan');
    	$pencucian->tanggal_cuci = $request->input('tanggal_cuci');
        $pencucian->keramba_id = $request->input('keramba_id');
        $pencucian->produksi_id = $request->input('produksi_id');

        if($pencucian->save()){
            return new PencucianResources($pencucian);
        }

    }
    public function showcuci($id)
    {
        $pencucian = PencucianModel::findOrFail($id);
        return new PencucianResources($pencucian);
    }
    public function where(Request $request)
    {
        $keramba_id = $request->query('keramba');
        $produksi_id = $request->query('produksi');
        $user_id = $request->query('user');
        if(is_null($keramba_id)&&is_null($produksi_id)){
            $user = PencucianModel::where('user_id',$user_id)->paginate(2);
            return PencucianResources::collection($user);
       }
       if(is_null($produksi_id)&&is_null($user_id)){
        $keramba = PencucianModel::where('keramba_id',$keramba_id)->paginate(2);
        return PencucianResources::collection($keramba);
       }
       if(is_null($keramba_id)&&is_null($user_id)){
        $produksi = PencucianModel::where('produksi_id',$produksi_id)->paginate(2);
        return PencucianResources::collection($produksi);
        }
        if(is_null($produksi_id)){
        $produksi = PencucianModel::where('keramba_id',$keramba_id)->Where('user_id', $user_id)->paginate(2);
        return PencucianResources::collection($produksi);
        }
        if(is_null($keramba_id)){
            $keramba = PencucianModel::where('produksi_id',$produksi_id)->Where('user_id', $user_id)->paginate(2);
            return PencucianResources::collection($keramba);
            }
            if(is_null($user_id)){
                $user = PencucianModel::where('produksi_id',$produksi_id)->Where('keramba_id', $keramba_id)->paginate(2);
                return PencucianResources::collection($user);
                }
                else{
                    $all = PencucianModel::where('produksi_id',$produksi_id)->Where('keramba_id', $keramba_id)->Where('user_id', $user_id)->paginate(2);
                return PencucianResources::collection($all);
                }
        // $produksi = PencucianModel::where('produksi_id',$produksi_id)->paginate(2);
        // return PencucianResources::collection($produksi);
         
    }
    public function destroycuci($id)
{
    $pencucian = PencucianModel::findOrFail($id);
    if($pencucian->delete()){
    return new PencucianResources($pencucian);
}
}
}