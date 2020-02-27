<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\PakanModel as Pakan;
use App\Http\Resources\PakanResources;

class ApiPakanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pakan = Pakan::paginate(2);
        return PakanResources::collection($pakan);
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
        $pakan = $request ->isMethod('put') ? Pakan::findOrFail($request->pakan_id) : new Pakan;

        $pakan->id = $request->input('pakan_id');
        $pakan->baterai_pakan = $request->input('baterai_pakan');
        $pakan->keramba_id = $request->input('keramba_id');

        if($pakan->save()){
            return new PakanResources($pakan);
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
        $pakan = Pakan::findOrFail($id);
        return new PakanResources($pakan);
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

    public function where(Request $request)
    {
        $keramba_id = $request->query('keramba');
        $pakan = Pakan::where('keramba_id', $keramba_id)->latest('id')->first();
        return response()->json($pakan);
        // $keramba_id = $request->query('keramba');
        // $sensor_do = SensorDo::where('keramba_id', $keramba_id)->paginate(2);
        // return SensorDoResources::collection($sensor_do);
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
    public function destroy(Request $request)
    {
        $pakan = Pakan::findOrFail($request->id)->delete();
        return response()->json(['success' => true],200);

    }
}
