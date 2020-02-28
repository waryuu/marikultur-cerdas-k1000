<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\KerambaModel;
use App\Http\Resources\KerambaResources;

class ApiKerambaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $keramba = KerambaModel::paginate(15);
        return KerambaResources::collection($keramba);
    }
    public function where(Request $request)
    {
        $kelompok_id = $request->query('kelompok');
        $user_id = $request->query('user');
        if(is_null($kelompok_id)){
             $user = KerambaModel::where('user_id',$user_id)->paginate(2);
             return KerambaResources::collection($user);
        }
        if(is_null($user_id)){
            $kelompok = KerambaModel::where('kelompok_id',$kelompok_id)->paginate(2);
            return KerambaResources::collection($kelompok);
       }
       else{
        $keramba = KerambaModel::where('kelompok_id',$kelompok_id)->Where('user_id', $user_id)->paginate(2);
        return KerambaResources::collection($keramba);
       }
        // $keramba = KerambaModel::where($conditions)->paginate(2);
        // return KerambaResources::collection($keramba);
         
    }


    public function store(Request $request)
    {
        $keramba = $request ->isMethod('put') ? KerambaModel::findOrFail($request->keramba_id) : new KerambaModel;
        $keramba->id = $request->input('keramba_id');
        $keramba->nama_keramba = $request->input('nama_keramba');
        $keramba->panjang_keramba = $request->input('panjang_keramba');
        $keramba->lebar_keramba = $request->input('lebar_keramba');
        $keramba->kapasitas_keramba = $request->input('kapasitas_keramba');
        $keramba->kelompok_id = $request->input('kelompok_id');
        $keramba->user_id = $request->input('user_id');

        if($keramba->save()){
            return new KerambaResources($keramba);
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
        $keramba =KerambaModel::findOrFail($id);
        return new KerambaResources($keramba);
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

    // public function where(Request $request)
    // {
    //     $kelompok_id = $request->query('kelompok');
    //     $keramba = KerambaModel::where('kelompok_id', $kelompok_id)->get();
    //     return response()->json($keramba);
    //     // $keramba_id = $request->query('keramba');
    //     // $sensor_do = SensorDo::where('keramba_id', $keramba_id)->paginate(2);
    //     // return SensorDoResources::collection($sensor_do);
    // }

    public function showkerambabyidkelompok($kelompok_id)
    {
        $keramba = KerambaModel::where(compact('kelompok_id'))->get();
        if(is_null($keramba))
        {
            return response()->json("not found");
        }
        return KerambaResources::collection($keramba);
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
        $keramba = KerambaModel::findOrFail($id);
        if($keramba->delete()){
        return new KerambaResources($keramba);
    }}
}
