<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\KelompokModel;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\KelompokResources;

class ApiKelompokController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $kelompok = KelompokModel::paginate(5);
        // $kelompok = KelompokModel::all();
        return KelompokResources::collection($kelompok);
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
        $request->validate([
            'nama_kelompok' => 'nullable|string|min:1|max:255',
            'ketua_kelompok' => 'nullable|string|max:255',
            'bendahara_kelompok' => 'nullable|string|max:255',
            'humas_kelompok' => 'nullable|string|max:255',
            ]);

        $kelompok = $request ->isMethod('put') ? KelompokModel::findOrFail($request->kelompok_id) : new KelompokModel;
        $kelompok->id = $request->input('kelompok_id');
        $kelompok->nama_kelompok = $request->input('nama_kelompok');
        $kelompok->ketua_kelompok = $request->input('ketua_kelompok');
        $kelompok->bendahara_kelompok = $request->input('bendahara_kelompok');
        $kelompok->humas_kelompok = $request->input('humas_kelompok');

        if($kelompok->save()){
            return response()->json(compact('kelompok'),201);
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
        $kelompok = KelompokModel::findOrFail($id);
        return new KelompokResources($kelompok);
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
        $kelompok = KelompokModel::findOrFail($id);
        if($kelompok->delete()){
            return new KelompokResources($kelompok);
        }
    }

}
