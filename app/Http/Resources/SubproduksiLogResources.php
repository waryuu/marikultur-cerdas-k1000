<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SubproduksiLogResources extends JsonResource
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
            'nama_ikan'=>$this->nama_ikan,
            'panjang_ikan'=>$this->panjang_ikan,
            'jumlah_ikan'=>$this->jumlah_ikan,
            'berat_ikan'=>$this->berat_ikan,
            'tanggal_cuci'=>$tanggal_pencucian_doang,
            'tanggal_pindah'=>$this->tanggal_pindah,
            'keramba_sebelum'=>$this->keramba_sebelum,
            'keramba_sesudah'=>$this->keramba_sesudah,    
            'subproduksi_id'=>$this->subproduksi_id,
            // 'user_id'=>$this->user_id
        ];
    }
    public function with($request){
        return[
            'version'=> '1.0.0',
            'author_url'=> url('http://localhost/nelayan-laravel')
        ];
    }
}
