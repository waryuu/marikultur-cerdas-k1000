<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\ProduksiModel as Produksi;

class PemindahanModel extends Model
{
    protected $table = 'pemindahan';
    protected $fillable = array('jumlah_ikan','panjang_ikan','tanggal_pindah','berat_ikan','user_id','keramba_sebelum','keramba_sesudah','produksi_id');
    public function produksi()
    {
        return $this->belongsTo(Produksi::class);
    }
}
