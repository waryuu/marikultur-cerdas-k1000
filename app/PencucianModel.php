<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PencucianModel extends Model
{
    protected $table = 'pencucian';
    protected $fillable = array('jumlah_ikan','panjang_ikan','berat_ikan','tanggal_cuci','user_id','produksi_id');
    
}
