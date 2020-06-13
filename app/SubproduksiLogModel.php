<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\KerambaModel as Keramba;
use App\User as User;
use App\subproduksiModel as Subproduksi;

class SubproduksiLogModel extends Model
{
    protected $table = 'subproduksilog';
    protected $fillable = array('nama_ikan','jumlah_ikan','panjang_ikan','kegiatan','berat_ikan','tanggal_cuci','tanggal_pindah','keramba_sebelum','keramba_sesudah',
    'subproduksi_id',);
    public function subproduksi()
    {
        return $this->belongsTo(subproduksi::class,'subproduksi_id','id');
    }
}
