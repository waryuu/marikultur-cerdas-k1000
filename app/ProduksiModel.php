<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
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
        return $this->hasMany(Aktivitas::class, 'produksi_id' ,'id')->select(array('id','produksi_id','tanggal_cuci','berat_ikan','panjang_ikan'));
    }
    
}
