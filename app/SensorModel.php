<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SensorModel extends Model
{
    protected $table = 'sensor';
    protected $fillable = array('sinyal_sensor','baterai_sensor','suhu_air','kecepatan_angin','kelembaban_udara','curah_hujan','kecepatan_arus','keramba_id');
}
