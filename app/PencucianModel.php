<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\ProduksiModel as Produksi;

class PencucianModel extends Model
{
    protected $table = 'pencucian';
    protected $fillable = array('jumlah_ikan','panjang_ikan','berat_ikan','tanggal_cuci','user_id','produksi_id');
    public function produksi()
    {
        return $this->belongsTo(Produksi::class);
    }
}
