<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\KerambaModel as Keramba;
use App\User as User;
use App\PencucianModel as Pencucian;
use App\PemindahanModel as Pemindahan;
use Carbon\Carbon;
\Carbon\Carbon::setToStringFormat('d-m-Y');

class ProduksiModel extends Model
{
    protected $table = 'produksi';
    protected $fillable = array('nama_ikan','jumlah_ikan','panjang_ikan','tanggal_tebar','berat_ikan','status_panen','user_id','keramba_id','kelompok_id');

    public function keramba()
    {
        return $this->belongsTo(Keramba::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function pencucian()
    {
        return $this->hasMany(Pencucian::class);
    }
    public function pemindahan()
    {
        return $this->hasMany(Pemindahan::class);
    }
}
