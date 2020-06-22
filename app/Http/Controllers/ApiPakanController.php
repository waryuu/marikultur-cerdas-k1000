<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\PakanModel;
use Illuminate\Support\Facades\Validator;
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

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'jumlah_pakan' => 'required|string',
            'waktu_pakan' => 'required',
            'subproduksi_id' => 'required|integer',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
    }

        $pakan = PakanModel::create([
            'subproduksi_id' => $request->input('subproduksi_id'),
            'waktu_pakan' => $request->input('waktu_pakan'),
            'jumlah_pakan' =>  $request->input('jumlah_pakan'),
        ]);
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
        $subproduksi_id = $request->query('subproduksi');
        $pakan = Pakan::where('subproduksi_id', $subproduksi_id)->latest('id')->first();
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
