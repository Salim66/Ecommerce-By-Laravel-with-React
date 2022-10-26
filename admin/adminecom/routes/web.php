<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\ProductListController;
use App\Http\Controllers\Admin\ReviewController;
use App\Http\Controllers\Admin\SiteInfoController;
use App\Http\Controllers\Admin\SliderController;
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

Route::prefix('categories')->group(function(){
    Route::get('/all/category', [CategoryController::class, 'getAllCategory'])->name('get.all.category');
    Route::get('/add/category', [CategoryController::class, 'addCategory'])->name('add.category');
    Route::post('/store/category', [CategoryController::class, 'storeCategory'])->name('store.category');
    Route::get('/eidt/category/{id}', [CategoryController::class, 'editCategory'])->name('edit.category');
    Route::put('/update/category/{id}', [CategoryController::class, 'updateCategory'])->name('update.category');
    Route::get('/delete/category/{id}', [CategoryController::class, 'deleteCategory'])->name('delete.category');
});

Route::prefix('subcategories')->group(function(){
    Route::get('/all/subcategory', [CategoryController::class, 'getAllSubCategory'])->name('get.all.subcategory');
    Route::get('/add/subcategory', [CategoryController::class, 'addSubCategory'])->name('add.subcategory');
    Route::post('/store/subcategory', [CategoryController::class, 'storeSubCategory'])->name('store.subcategory');
    Route::get('/eidt/subcategory/{id}', [CategoryController::class, 'editSubCategory'])->name('edit.subcategory');
    Route::put('/update/subcategory/{id}', [CategoryController::class, 'updateSubCategory'])->name('update.subcategory');
    Route::get('/delete/subcategory/{id}', [CategoryController::class, 'deleteSubCategory'])->name('delete.subcategory');
});

Route::prefix('sliders')->group(function(){
    Route::get('/all/slider', [SliderController::class, 'getAllSlider'])->name('get.all.slider');
    Route::get('/add/slider', [SliderController::class, 'addSlider'])->name('add.slider');
    Route::post('/store/slider', [SliderController::class, 'storeSlider'])->name('store.slider');
    Route::get('/eidt/slider/{id}', [SliderController::class, 'editSlider'])->name('edit.slider');
    Route::put('/update/slider/{id}', [SliderController::class, 'updateSlider'])->name('update.slider');
    Route::get('/delete/slider/{id}', [SliderController::class, 'deleteSlider'])->name('delete.slider');
});

Route::prefix('products')->group(function(){
    Route::get('/all/product', [ProductListController::class, 'getAllProduct'])->name('get.all.product');
    Route::get('/add/product', [ProductListController::class, 'addProduct'])->name('add.product');
    Route::post('/store/product', [ProductListController::class, 'storeProduct'])->name('store.product');
    Route::get('/eidt/product/{id}', [ProductListController::class, 'editProduct'])->name('edit.product');
    Route::put('/update/product/{id}', [ProductListController::class, 'updateProduct'])->name('update.product');
    Route::get('/delete/product/{id}', [ProductListController::class, 'deleteProduct'])->name('delete.product');
});

// Contact Message Get
Route::get('/all/contact', [ContactController::class, 'getAllContact'])->name('all.contact');
Route::get('/delete/contact/{id}', [ContactController::class, 'deleteContact'])->name('delete.contact');

// All Review Get
Route::get('/all/review', [ReviewController::class, 'getAllReview'])->name('all.review');
Route::get('/delete/review/{id}', [ReviewController::class, 'deleteReview'])->name('delete.review');

// Site Inof
Route::get('/site/info', [SiteInfoController::class, 'editSiteInfo'])->name('site.info');
Route::post('/update/review', [SiteInfoController::class, 'updateReview'])->name('siteinfo.update');
