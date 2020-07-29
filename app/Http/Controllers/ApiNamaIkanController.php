<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Http\Requests;
use App\NamaIkanModel;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\NamaIkanResources;

class ApiNamaIkanController extends Controller
{
    public function index()
    {
        $nama_ikan = NamaIkanModel::get();
        return NamaIkanResources::collection($nama_ikan);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama_ikan' => 'required|string|unique:nama_ikan',
            ]);

    //     $validator = Validator::make($request->all(), [
    //         'nama_ikan' => 'required|string|unique:nama_ikan',
    //     ]);

    //     if($validator->fails()){
    //         return response()->json($validator->errors()->toJson(), 400);
    // }
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
