<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\SensorHumTempModel as SensorHumTemp;
use App\Http\Resources\SensorHumTempResources;

class ApiSensorHumTempController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(auth('api')->user()->status == 'admin'){
            $sensor_humtemp = SensorHumTemp::paginate(5);
            return SensorHumTemp::collection($sensor_humtemp);
        }
        else{
            $sensor_hum = SensorHumTemp::latest()->take(5)->get()->pluck('humidity');
            $sensor_tem = SensorHumTemp::latest()->take(5)->get()->pluck('temperature');
            $time = SensorHumTemp::latest()->take(5)->get()->pluck('time');
            // $array = array_merge($sensor_hum->toArray(), $sensor_tem->toArray(), $time->toArray());
            // return response()->json($sensor_hum);
            return response()->json(['sensor_hum' => $sensor_hum, 'sensor_tem' => $sensor_tem, 'time' => $time]);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $sensor_humtemp = $request ->isMethod('put') ? SensorHumTemp::findOrFail($request->sensor_humtemp_id) : new SensorHumTemp;

        $sensor_humtemp->id = $request->input('sensor_humtemp_id');
        $sensor_humtemp->time = $request->input('time');
        $sensor_humtemp->date = $request->input('date');
        $sensor_humtemp->humidity = $request->input('humidity');
        $sensor_humtemp->temperature = $request->input('temperature');



        if($sensor_humtemp->save()){
            return new SensorHumTempResources($sensor_humtemp);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $sensor_humtemp = SensorHumTemp::findOrFail($id);
        return new SensorHumTempResources($sensor_humtemp);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $sensor_humtemp = SensorHumTemp::findOrFail($id);
        if($sensor_humtemp->delete()){
        return new SensorHumTempResources($sensor_humtemp);
        }
    }
}
