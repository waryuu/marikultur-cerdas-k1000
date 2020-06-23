<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\DB;
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
        $pakan = PakanModel::paginate(2);
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
        $pakan = PakanModel::findOrFail($id);
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
        $pakan = PakanModel::leftjoin('subproduksi', 'subproduksi.id', '=','pakan.subproduksi_id')
        ->select(DB::raw('sum(pakan.jumlah_pakan) as total_pakan'))
        ->groupBy('pakan.subproduksi_id')
        ->where('pakan.subproduksi_id',$subproduksi_id)
        ->get();
        return response()->json($pakan);
        // return PakanResources::collection($pakan);

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
        $pakan = PakanModel::findOrFail($request->id)->delete();
        return response()->json(['success' => true],200);

    }
}
