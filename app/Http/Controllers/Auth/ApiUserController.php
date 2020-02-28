<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Http\Resources\UserResources;

class ApiUserController extends Controller
{
    public function index()
    {
            $user = User::paginate(5);
            return UserResources::collection($user);   
    }
}
