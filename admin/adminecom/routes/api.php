<?php

use App\Http\Controllers\Admin\VisitorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// get website visitor route
Route::get('/get-visitor', [VisitorController::class, 'getVisitorDetails']);

