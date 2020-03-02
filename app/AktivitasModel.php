<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\ProduksiModel as Produksi;

class AktivitasModel extends Model
{
    protected $table = 'aktivitas';
    protected $fillable = array('jumlah_ikan','panjang_ikan','berat_ikan','tanggal_cuci','tanggal_pindah','keramba_sebelum','keramba_sesudah','user_id','produksi_id');
    public function produksi()
    {
        return $this->belongsTo(Produksi::class);
    }
}
