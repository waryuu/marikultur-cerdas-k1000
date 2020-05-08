<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\KerambaModel as Keramba;
use App\User as User;
use App\AktivitasModel as Aktivitas;
use Carbon\Carbon;
\Carbon\Carbon::setToStringFormat('d-m-Y');

class ProduksiModel extends Model
{
    protected $table = 'produksi';
    protected $fillable = array('nama_ikan','jumlah_ikan_awal','jumlah_ikan_akhir','panjang_ikan_awal','panjang_ikan_akhir','tanggal_tebar','tanggal_panen','berat_ikan_awal','berat_ikan_akhir','status_panen','user_id','keramba_id','kelompok_id');

    public function keramba()
    {
        return $this->belongsTo(Keramba::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function Aktivitas()
    {
        return $this->hasMany(Aktivitas::class, 'produksi_id', 'id')->select(array('id','produksi_id','jumlah_ikan','tanggal_cuci','berat_ikan','panjang_ikan','tanggal_pindah','keramba_sebelum','keramba_sesudah'));
    }
    
}
// return $this->hasMany(Aktivitas::class, 'produksi_id' ,'id')->select(array('id','produksi_id','jumlah_ikan','tanggal_cuci','berat_ikan','panjang_ikan','tanggal_pindah','keramba_sebelum','keramba_sesudah'));