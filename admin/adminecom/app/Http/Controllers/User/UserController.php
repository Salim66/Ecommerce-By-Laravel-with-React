<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * @access public
     * @route /api/user
     * @method GET
     */
    public function user(){
        return Auth::user();
    }
}
