<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Http\Requests;
use App\NamaIkanModel;
use App\Http\Resources\NamaIkanResources;

class ApiNamaIkanController extends Controller
{
    public function index()
    {
        $nama_ikan = NamaIkanModel::paginate(2);
        return NamaIkanResources::collection($nama_ikan);
    }

    public function store(Request $request)
    {
        $nama_ikan = NamaIkanModel::create([
            'nama_ikan' => $request->input('nama_ikan'),
           
        ]);
            return new NamaIkanResources($nama_ikan);
        
    }

    public function destroy(Request $request)
    {
        $nama_ikan = NamaIkanModel::findOrFail($request->id)->delete();
        return response()->json(['success' => true],200);

    }

}
