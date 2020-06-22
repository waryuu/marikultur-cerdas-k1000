<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class SensorDoModel extends Model
{
    protected $table = 'sensor_do';
    protected $fillable = array('do_air','keramba_id');

    public function getCreatedAtAttribute($date)
{
    return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('H:i:s');
}

}
