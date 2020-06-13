<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;


class ProduksiResources extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        // return parent::toArray($request);
        $tanggal_tebar_doang = substr($this->tanggal_tebar,0,10);
        $tanggal_panen_doang = substr($this->tanggal_panen,0,10);
        // $tanggal_cuci_doang = substr($this->tanggal_cuci,0,10);
        // $tanggal_pindah_doang = substr($this->tanggal_pindah,0,10);
        return [
            'id'=> $this->id,
            'nama_ikan'=>$this->nama_ikan,
            'panjang_ikan_awal'=>$this->panjang_ikan,
            'jumlah_ikan_awal'=>$this->jumlah_ikan,
            'jumlah_subproduksi'=>$this->jumlah_subproduksi,
            'berat_ikan_awal'=>$this->berat_ikan,
            // 'panjang_ikan_akhir'=>$this->panjang_ikan_akhir,
            // 'jumlah_ikan_akhir'=>$this->jumlah_ikan_akhir,
            // 'berat_ikan_akhir'=>$this->berat_ikan_akhir,
            'tanggal_tebar'=>$tanggal_tebar_doang,
            // 'tanggal_panen'=>$tanggal_panen_doang,
            // 'tanggal_cuci'=>$this->tanggal_cuci,
            // 'tanggal_pindah'=>$this->pemindahan->tanggal_pindah,
            // 'status_panen'=>$this->status_panen,
            'keramba_id'=>$this->keramba_id,
            'kelompok_id'=>$this->kelompok_id,
            'user_id'=>$this->user_id,
              'jumlah_terkini'=>$this->jumlah_terkini,
              'nama_keramba'=>$this->nama_keramba,
            // 'jumlah_ikan'=>$this->jumlah_ikan,
            // 'berat_ikan'=>$this->berat_ikan,
            // 'panjang_ikan'=>$this->panjang_ikan,
            // 'tanggal_cuci'=>$this->tanggal_cuci,
            // 'tanggal_pindah'=>$this->tanggal_pindah,
            // 'keramba_sebelum'=>$this->keramba_sebelum,
            // 'keramba_sesudah'=>$this->keramba_sesudah,
        ];
    }
    public function with($request){
        return[
            'version'=> '1.0.0',
            'author_url'=> url('http://localhost/nelayan-laravel')
        ];
    }
}
