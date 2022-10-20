<?php

namespace App\Http\Controllers;

use App\Models\User;
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

    /**
     * @access private
     * @routes /admin/user/profile
     * @method GET
     */
    public function userProfile(){
        $data = User::find(Auth::user()->id);
        return view('backend.admin.user_profile', compact('data'));
    }
}
