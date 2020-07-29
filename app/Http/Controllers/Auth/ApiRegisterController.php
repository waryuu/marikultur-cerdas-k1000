<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\User;
use Illuminate\Support\Facades\Validator;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class ApiRegisterController extends Controller
{
    public function register(Request $request)
        {
            $request->validate([
                'name' => 'required|string|max:255',
                'username' => 'required|string|min:3|max:255|unique:users',
                'status' => 'required|string|max:7',
                'kelompok_id' => 'nullable|integer',
                'email' => 'nullable|string|email|max:255|unique:users',
                'password' => 'required|string|min:6|confirmed',
            ]);

            $user = User::create([
                'name' => $request->get('name'),
                'status' => $request->get('status'),
                'username' => $request->get('username'),
                'kelompok_id' => $request->get('kelompok_id'),
                'email' => $request->get('email'),
                'password' => bcrypt($request->get('password')),
            ]);

            $token = JWTAuth::fromUser($user);

            return response()->json(compact('user','token'),201);
        }
}
