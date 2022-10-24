<?php

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth:sanctum',config('jetstream.auth_session'),'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return view('admin.index');
    })->name('dashboard');
});

Route::get('/logout', [AdminController::class, 'adminLogout'])->name('admin.logout');

Route::prefix('admin')->group(function(){
    Route::get('/user/profile', [AdminController::class, 'userProfile'])->name('user.profile');
    Route::post('/user/profile/update', [AdminController::class, 'userProfileUpdate'])->name('user.profile.update');
    Route::get('/change-password', [AdminController::class, 'changePassword'])->name('change.password');
    Route::post('/change-password/update', [AdminController::class, 'changePasswordUpdate'])->name('change.password.update');
});
