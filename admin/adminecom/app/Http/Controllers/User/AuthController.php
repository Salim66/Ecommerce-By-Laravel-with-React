<?php

namespace App\Http\Controllers\User;

use Exception;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;

class AuthController extends Controller
{
    /**
     * @access public
     * @routes /api/login
     * @method POST
     */
    public function login( Request $request ) {

        try {

            if ( Auth::attempt( $request->only( 'email', 'password' ) ) ) {
                $user = Auth::user();
                $token = $user->createToken( 'app' )->accessToken;

                return response()->json( [
                    "message" => "Logged in successfully",
                    "token"   => $token,
                    "user"    => $user,
                ], 202 );
            }

        } catch ( Exception $exception ) {
            return response()->json( [
                "message" => $exception->getMessage(),
            ], 400 );
        }

        return response()->json( [
            "message" => "Invalid email and password!",
        ], 401 );

    }

    /**
     * @access public
     * @routes /api/register
     * @method POST
     */
    public function register( RegisterRequest $request ) {

        try {

            $user = User::create( [
                "name"     => $request->name,
                "email"    => $request->email,
                "password" => Hash::make( $request->password ),
            ] );

            $token = $user->createToken( 'app' )->accessToken;

            return response()->json( [
                "message" => "Register Successfull",
                "token"   => $token,
                "user"    => $user,
            ] );

        } catch ( Exception $exception ) {
            return response()->json( [
                "message" => $exception->getMessage(),
            ], 400 );
        }

    }
}
