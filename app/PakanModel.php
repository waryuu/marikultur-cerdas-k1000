<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PakanModel extends Model
{
    protected $table = 'pakan';
    protected $fillable = array('jumlah_pakan','waktu_pakan','subproduksi_id');
}
