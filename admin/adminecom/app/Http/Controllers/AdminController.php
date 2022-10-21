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

    /**
     * @access private
     * @routes /admin/user/profile/update
     * @method POST
     */
    public function userProfileUpdate(Request $request){
        $user = User::find(Auth::user()->id);
        // image manage
        $fileName = '';
        if($request->hasFile('profile_photo_path')){
            $img = $request->file('profile_photo_path');
            $fileName = date('YmdHi').$img->getClientOriginalName();
            $img->move(public_path('upload/admin_images/'), $fileName);
            if(file_exists('upload/admin_images/'.$user->profile_photo_path) && !empty($user->profile_photo_path)){
                unlink('upload/admin_images/'.$user -> profile_photo_path);
            }
        }else {
            $fileName = $user->profile_photo_path;
        }

        $user->name = $request->name;
        $user->email = $request->email;
        $user->profile_photo_path = $fileName;
        $user->update();

        return redirect()->route('user.profile');
    }
}
