<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\PemindahanModel;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;
use App\Http\Resources\PemindahanResources;

class ApiPemindahanController extends Controller
{
    public function pemindahanget()
    {
        $pemindahan = PemindahanModel::paginate(15);
        return PemindahanResources::collection($pemindahan);
    }
    public function pemindahanstore(Request $request)
    {
        $pemindahan = $request ->isMethod('put') ? ProduksiModel::findOrFail($request->pemindahan_id) : new pemindahanModel;
        $pemindahan->id = $request->input('pemindahan_id');
        $pemindahan->user_id = $request->input('user_id');
    	$pemindahan->panjang_ikan = $request->input('panjang_ikan');
        $pemindahan->jumlah_ikan = $request->input('jumlah_ikan');
    	$pemindahan->tanggal_pindah = Carbon::createFromFormat('Y-m-d',$request->input('tanggal_pindah'))->format('d-m-Y');
    	// $pemindahan->tanggal_pindah = $request->input('tanggal_pindah');
        $pemindahan->keramba_sebelum = $request->input('keramba_sebelum');
        $pemindahan->keramba_sesudah = $request->input('keramba_sesudah');
        $pemindahan->produksi_id = $request->input('produksi_id');

        if($pemindahan->save()){
            return new pemindahanResources($pemindahan);
        }

    }
    public function showpindah($id)
    {
        $pemindahan = PemindahanModel::findOrFail($id);
        return new PemindahanResources($pemindahan);
    }
    public function destroypindah($id)
    {
        $pemindahan = PemindahanModel::findOrFail($id);
        if($pemindahan->delete()){
        return new PemindahanResources($pemindahan);
    }
}
    public function where(Request $request)
    {
        $keramba_sebelum = $request->query('keramba_sebelum');
        $keramba_sesudah = $request->query('keramba_sesudah');
        $user_id = $request->query('user');
        $produksi_id = $request->query('produksi');
        if(is_null($keramba_sebelum)&&is_null($keramba_sesudah)&&is_null($user_id)){
            $produksi = PemindahanModel::where('produksi_id',$produksi_id)->paginate(2);
            return PemindahanResources::collection($produksi);
       }
       if(is_null($keramba_sebelum)&&is_null($keramba_sesudah)&&is_null($produksi_id)){
        $user = PemindahanModel::where('user_id',$user_id)->paginate(2);
        return PemindahanResources::collection($user);
       }
       if(is_null($keramba_sebelum)&&is_null($produksi_id)&&is_null($user_id)){
        $keramba = PemindahanModel::where('keramba_sesudah',$keramba_sesudah)->paginate(2);
        return PemindahanResources::collection($keramba);
       }
       if(is_null($keramba_sesudah)&&is_null($produksi_id)&&is_null($user_id)){
        $keramba = PemindahanModel::where('keramba_sebelum',$keramba_sebelum)->paginate(2);
        return PemindahanResources::collection($keramba);
        }
        else if(is_null($keramba_sebelum)&&is_null($keramba_sesudah)){
            $kelompokuser = PemindahanModel::where('produksi_id',$produksi_id)->Where('user_id', $user_id)->paginate(2);
            return PemindahanResources::collection($kelompokuser);
       }
       else if(is_null($keramba_sebelum)&&is_null($user_id)){
        $kerambaproduksi = PemindahanModel::where('produksi_id',$produksi_id)->Where('keramba_sesudah', $keramba_sesudah)->paginate(2);
        return PemindahanResources::collection($kerambaproduksi);
     }  
     else if(is_null($keramba_sebelum)&&is_null($produksi_id)){
        $kerambauser = PemindahanModel::where('user_id',$user_id)->Where('keramba_sesudah', $keramba_sesudah)->paginate(2);
        return PemindahanResources::collection($kerambauser);
     }    
     else if(is_null($keramba_sesudah)&&is_null($user_id)){
        $kerambaproduksi = PemindahanModel::where('produksi_id',$produksi_id)->Where('keramba_sebelum', $keramba_sebelum)->paginate(2);
        return PemindahanResources::collection($kerambaproduksi);
     }  
     else if(is_null($keramba_sesudah)&&is_null($produksi_id)){
        $kerambauser = PemindahanModel::where('user_id',$user_id)->Where('keramba_sebelum', $keramba_sebelum)->paginate(2);
        return PemindahanResources::collection($kerambauser);
     }  
     else if(is_null($produksi_id)&&is_null($user_id)){
        $produksiuser = PemindahanModel::where('produksi_id',$produksi_id)->Where('user_id', $user_id)->paginate(2);
        return PemindahanResources::collection($produksiuser);
     }  
       else if(is_null($keramba_sebelum)){
            $keramba = PemindahanModel::where('produksi_id',$produksi_id)->Where('keramba_sesudah', $keramba_sesudah)->Where('user_id', $user_id)->paginate(2);
            return PemindahanResources::collection($keramba);
        }
        
       else if(is_null($keramba_sesudah)){
            $keramba = PemindahanModel::where('produksi_id',$produksi_id)->Where('keramba_sebelum', $keramba_sebelum)->Where('user_id', $user_id)->paginate(2);
            return PemindahanResources::collection($keramba);
        }
      else  if(is_null($user_id)){
            $user = PemindahanModel::where('produksi_id',$produksi_id)->Where('keramba_sebelum', $keramba_sebelum)->Where('keramba_sesudah', $keramba_sesudah)->paginate(2);
            return PemindahanResources::collection($user);
        }
        
        else if(is_null($produksi_id)){
            $produksi = PemindahanModel::where('user_id',$user_id)->Where('keramba_sebelum', $keramba_sebelum)->Where('keramba_sesudah', $keramba_sesudah)->paginate(2);
            return PemindahanResources::collection($produksi);
        }
        
        else{
        $all = PemindahanModel::where('produksi_id',$produksi_id)->Where('keramba_sebelum', $keramba_sebelum)->Where('keramba_sesudah', $keramba_sesudah)->Where('user_id', $user_id)->paginate(2);
         return PemindahanResources::collection($all);
                }
    }
    
}
