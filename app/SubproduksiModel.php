<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubproduksiModel extends Model
{
    protected $table = 'subproduksi';
    protected $fillable = array('jumlah_ikan','panjang_ikan','berat_ikan','tanggal_cuci','tanggal_pindah','tanggal_panen','status_panen','keramba_sebelum','keramba_sesudah','user_id','produksi_id');
    public function produksi()
    {
        return $this->belongsTo(Produksi::class,'produksi_id','id');
    }
}
