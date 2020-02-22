<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ApiSignOutController extends Controller
{
    public function __invoke(){
        auth()->logout();
        return response(null, 401);
    }
}
