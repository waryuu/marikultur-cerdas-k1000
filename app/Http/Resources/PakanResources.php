<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PakanResources extends JsonResource
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
        return [
            'id'=> $this->id,
            'jumlah_pakan'=>$this->jumlah_pakan,
            'waktu_pakan'=>$this->waktu_pakan,
            'total_pakan'=>$this->total_pakan,
            'subproduksi_id'=>$this->subproduksi_id

        ];
    }
    public function with($request){
        return[
            'version'=> '1.0.0',
            'author_url'=> url('http://localhost/nelayan-laravel')
        ];
    }
}
