<?php

namespace App\Http\Controllers\User;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\ResetRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class ResetController extends Controller
{
    /**
     * @access private
     * @routes /api/reset-password
     * @method POST
     */
    public function resetPassword(ResetRequest $request){

        try {

            $email = $request->email;
            $token = $request->token;
            $password = Hash::make($request->password);

            $emailcheck = DB::table('password_resets')->where('email', $email)->first();
            $tokencheck = DB::table('password_resets')->where('token', $token)->first();

            if(!$emailcheck){
                return response()->json([
                    "message" => "Email not found"
                ], 401);
            }

            if(!$tokencheck){
                return response()->json([
                    "message" => "Pincode is invalid"
                ], 401);
            }

            DB::table('users')->where('email', $email)->update(["password" => $password]);
            DB::table('password_resets')->where('email', $email)->delete();

            return response()->json([
                "message" => "Password change successfully"
            ], 201);

        } catch (Exception $exception) {
            return response()->json([
                "message" => $exception->getMessage()
            ], 400);
        }

    }
}
