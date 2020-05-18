<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ApiMeController extends Controller
{
    public function __construct(){
        $this->middleware(['auth:api']);
         return response(null, 401);
    }

    public function __invoke(Request $request){
        $user = $request->user();
        return response()->json([
            'id' => $user->id,
            'email' => $user->email,
            'username' => $user->username,
            'name' => $user->name,
            'status' => $user->status,
            'kelompok_id' => $user->kelompok_id
        ]);
    }
}
