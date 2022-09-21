<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\NotificationController;
use App\Http\Controllers\Admin\ProductDetailsController;
use App\Http\Controllers\Admin\ProductListController;
use App\Http\Controllers\Admin\SiteInfoController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\VisitorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// get website visitor route
Route::get('/get-visitor', [VisitorController::class, 'getVisitorDetails']);

// post contact store route
Route::post('/post-contact', [ContactController::class, 'getPostContact']);

// site info get route
Route::get('/get-site-info', [SiteInfoController::class, 'getSiteInfo']);

// get all category route
Route::get('/all-category', [CategoryController::class, 'allCategory']);

// get all product list by remark route
Route::get('/product-list-by-remark/{remark}', [ProductListController::class, 'productListByRemark']);

// get all product list by category route
Route::get('/product-list-by-category/{category}', [ProductListController::class, 'productListByCategory']);

// get all product list by subcategory route
Route::get('/product-list-by-subcategory/{category}/{subcategory}', [ProductListController::class, 'productListBySubCategory']);

// get home slider route
Route::get('/all-slider', [SliderController::class, 'allSlider']);

// get product details by product id route
Route::get('/product-details/{id}', [ProductDetailsController::class, 'productDetails']);

// get notification route
Route::get('/notification', [NotificationController::class, 'notificationHistory']);

// get product by search route
Route::get('/search/{key}', [ProductListController::class, 'productListBySearch']);

