<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SubproduksiResources extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $tanggal_pencucian_doang = substr($this->tanggal_cuci,0,10);
        return [
            'id'=> $this->id,
            'panjang_ikan'=>$this->panjang_ikan,
            'jumlah_ikan'=>$this->jumlah_ikan,
            'berat_ikan'=>$this->berat_ikan,
            'tanggal_cuci'=>$tanggal_pencucian_doang,
            'tanggal_pindah'=>$this->tanggal_pindah,
            'keramba_sebelum'=>$this->keramba_sebelum,
            'keramba_sesudah'=>$this->keramba_sesudah,    
            'produksi_id'=>$this->produksi_id,
            'tanggal_panen'=>$this->tanggal_panen,
            'status_panen'=>$this->status_panen,
            'user_id'=>$this->user_id
        ];
    }
    public function with($request){
        return[
            'version'=> '1.0.0',
            'author_url'=> url('http://localhost/nelayan-laravel')
        ];
    }
}
