<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\User;
use Illuminate\Support\Facades\Validator;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Hash;

class ApiProfileController extends Controller
{
    public function __construct(){
        $this->middleware(['auth:api']);
        return response(null, 401);
    }

    public function update(Request $request,$id)
        {
            $validator = Validator::make($request->all(), [
                'name' => 'nullable|string|max:255',
                'username' => 'nullable|string|min:3|max:255|unique:users',
                'status' => 'nullable|string|max:6',
                'kelompok_id' => 'nullable|integer',
                'email' => 'nullable|string|email|max:255|unique:users',
                'password' => 'nullable|string|min:6|confirmed',
            ]);

            if($validator->fails()){
                    return response()->json($validator->errors()->toJson(), 400);
            }

            $user = User::updateOrCreate([
                'id'=>$id],[
                'name' => $request->get('name'),
                'status' => $request->get('status'),
                'username' => $request->get('username'),
                'kelompok_id' => $request->get('kelompok_id'),
                'email' => $request->get('email'),
                'password' => bcrypt($request->get('password')),
            ]);

            $token = JWTAuth::fromUser($user);

            return response()->json(compact('user','token'),201);

            // $name = $request->name;
            // $status = $request->status;
            // $kelompok_id = $request->kelompok_id;
            // $email = $request->email;
            // $password = bcrypt($request->password);
            // $token = $request->token;

            // $user = User::find($id);
            // $user->name = $name;
            // $user->status = $status;
            // $user->kelompok_id = $kelompok_id;
            // $user->email = $email;
            // $user->password = bcrypt($password);

            // $token = JWTAuth::fromUser($user);
            // $user->save();
            // return response()->json(compact('user','token'),201);

        }

    public function updateProfile(Request $request)
    {
        $user = auth('api')->user();

        $request->validate([
            'name' => 'nullable|string|max:255',
            'status' => 'nullable|string|max:7',
            'username' => 'nullable|string|min:3|max:255|unique:users',
            'kelompok_id' => 'nullable|integer',
            'email' => 'nullable|string|email|max:255|unique:users,email,'.$user->id,
            'password' => 'nullable|string|min:6|confirmed',
        ]);
       
        // $validator = Validator::make($request->all(), [
        //     'name' => 'nullable|string|max:255',
        //     'status' => 'nullable|string|max:6',
        //     'username' => 'nullable|string|min:3|max:255|unique:users',
        //     'kelompok_id' => 'nullable|integer',
        //     'email' => 'nullable|string|email|max:255|unique:users,email,'.$user->id,
        //     'password' => 'nullable|string|min:6|confirmed',
        // ]);

        // if($validator->fails()){
        //     return response()->json($validator->errors()->toJson(), 400);
        // }

        if(!empty($request->password)){
            $request->merge(['password' => bcrypt($request['password'])]);
        }


        $user->update($request->all());
        $token = JWTAuth::fromUser($user);
        return response()->json(compact('user','token'),201);
    }
}
// public function update(Request $request,$id)
//     {

//     	$nama_keramba = $request->nama_keramba;
//     	$panjang_keramba = $request->panjang_keramba;
//     	$lebar_keramba = $request->lebar_keramba;
//     	$kapasitas_keramba = $request->kapasitas_keramba;
//         $id_kelompok = $request->id_kelompok;
//         $id_user = $request->id_user;


//     	$kerambas = KerambaModel::find($id);
//     	$kerambas->nama_keramba = $nama_keramba;
//     	$kerambas->panjang_keramba = $panjang_keramba;
//     	$kerambas->lebar_keramba = $lebar_keramba;
//     	$kerambas->kapasitas_keramba = $kapasitas_keramba;
//         $kerambas->id_kelompok = $id_kelompok;
//         $kerambas->id_user = $id_user;
//     	$kerambas->save();

//     	return response()->json($kerambas);
//     }



 // $userid = JWTAuth::user($id);
            // $user = User::findorfail($userid);
            // $user->fill([
            //     'name' => $request->get('name'),
            //     'status' => $request->get('status'),
            //     'kelompok_id' => $request->get('kelompok_id'),
            //     'email' => $request->get('email'),
            //     'password' => bcrypt($request->get('password'))
            // ]);
            // // $user->name -> $request->input('name');
            // // $user->status -> $request->input('status');
            // // $user->kelompok_id -> $request->input('kelompok_id');
            // // $user->email -> $request->input('email');
            // // $user->password -> bcrypt($request->input('password'));
            // $user->save();
            // // $token = JWTAuth::fromUser($user);

            // return response()->json(compact('user'),201);
