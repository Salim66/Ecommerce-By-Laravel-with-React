<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    /**
     * @access private
     * @routes /logout
     * @method GET
     */
    public function adminLogout(){
        Auth::logout();
        return redirect()->route('login');
    }
}
