<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\FavouriteController;
use App\Http\Controllers\Admin\NotificationController;
use App\Http\Controllers\Admin\ProductCartController;
use App\Http\Controllers\Admin\ProductDetailsController;
use App\Http\Controllers\Admin\ProductListController;
use App\Http\Controllers\Admin\ReviewController;
use App\Http\Controllers\Admin\SiteInfoController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\User\ForgetController;
use App\Http\Controllers\User\ResetController;
use App\Http\Controllers\User\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

//////////////////// User Authentication Start ///////////////////////
// Login Route
Route::post('/login', [AuthController::class, 'login']);
// Register Route
Route::post('/register', [AuthController::class, 'register']);
// Forgot Password Route
Route::post('/forget-password', [ForgetController::class, 'forgetPassword']);
// Reset Password Route
Route::post('/reset-password', [ResetController::class, 'resetPassword']);
// Current Authenticate User Route
Route::get('/user', [UserController::class, 'user'])->middleware('auth:api');
//////////////////// User Authentication End ////////////////////////



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

// get product by similar product route
Route::get('/similar/{subcategory}', [ProductListController::class, 'similarProduct']);

// get review by user route
Route::get('/reviewlist/{product_code}', [ReviewController::class, 'reviewList']);

// add to cart route
Route::post('/addtocart', [ProductCartController::class, 'addToCart']);

// get cart count by product code route
Route::get('/cartcount/{product_code}', [ProductCartController::class, 'cartCount']);

// add favourite product route
Route::get('/favourite/{product_code}/{email}', [FavouriteController::class, 'addFavourite']);

// get favourite list product route
Route::get('/favouritelist/{email}', [FavouriteController::class, 'favouriteList']);

// remove favourite product route
Route::get('/favourite-remove/{product_code}/{email}', [FavouriteController::class, 'removeFavourite']);

// get cart list product route
Route::get('/cartlist/{email}', [ProductCartController::class, 'cartList']);

// remove cart list product route
Route::get('/removecartlist/{id}', [ProductCartController::class, 'removeCartList']);

// quantity increment in cart route
Route::get('/cartitemincrement/{id}/{quantity}/{price}', [ProductCartController::class, 'cartItemIncrement']);

// quantity decrement in cart route
Route::get('/cartitemdecrement/{id}/{quantity}/{price}', [ProductCartController::class, 'cartItemDecrement']);

// cart order route
Route::post('/cartorder', [ProductCartController::class, 'cartOrder']);

// cart order list by user route
Route::get('/orderlistbyuser/{email}', [ProductCartController::class, 'orderListByUser']);

// post product reviewer by user route
Route::post('/postreview', [ReviewController::class, 'postReview']);
