<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\KerambaModel as Keramba;
use App\User as User;
use App\ProduksiModel as Produksi;
use App\SubproduksiLogModel as SubproduksiLog;

class SubproduksiModel extends Model
{
    protected $table = 'subproduksi';
    protected $fillable = array('nama_ikan','jumlah_ikan','panjang_ikan','berat_ikan','tanggal_cuci','tanggal_pindah','tanggal_panen','status_panen','keramba_sebelum','keramba_sesudah','produksi_id',
    'tanggal_panen','status_panen','user_id','berat_ikan_akhir','jumlah_ikan_akhir','panjang_ikan_akhir');
    public function produksi()
    {
        return $this->belongsTo(Produksi::class,'produksi_id','id');
    }
    public function Subproduksi()
    {
        return $this->hasMany(SubproduksiLog::class, 'subproduksi_id', 'id');
    }
}
