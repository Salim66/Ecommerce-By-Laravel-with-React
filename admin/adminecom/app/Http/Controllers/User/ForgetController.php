<?php

namespace App\Http\Controllers\User;

use Exception;
use App\Models\User;
use App\Mail\ForgetMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\ForgetRequest;
use Illuminate\Support\Facades\Mail;

class ForgetController extends Controller
{
    /**
     * @access public
     * @routes /api/forgot-password
     * @method POST
     */
    public function forgetPassword(ForgetRequest $request){

        $email = $request->email;

        if(User::where('email', $email)->doesntExist()){
            return response()->json([
                "message" => "Invalid Email"
            ], 401);
        }

        // Create Random Token for verify user
        $token = rand(10, 100000);

        try {

            DB::table('password_resets')->insert([
                "email" => $email,
                "token" => $token
            ]);

            Mail::to($email)->send(new ForgetMail($token));

            return response()->json([
                "message" => "Reset Password link send your email"
            ], 200);

        } catch ( Exception $exception ) {
            return response()->json( [
                "message" => $exception->getMessage(),
            ], 400 );
        }
    }
}
