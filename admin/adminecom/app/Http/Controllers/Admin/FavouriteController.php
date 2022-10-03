<?php

namespace App\Http\Controllers\Admin;

use App\Models\ProductList;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Favourite;

class FavouriteController extends Controller
{
    /**
     * @access private
     * @routes /api/favourite/{product_code}/{email}
     * @method GET
     */
    public function addFavourite(Request $request){
        $product_code = $request->product_code;
        $email = $request->email;

        $productList = ProductList::where('product_code', $product_code)->first();

        $result = Favourite::create([
            'product_name' => $productList->title,
            'image' => $productList->image,
            'product_code' => $product_code,
            'email' => $email
        ]);

        return $result;

    }

    /**
     * @access private
     * @routes /api/favouritelist/{email}
     * @method GET
     */
    public function favouriteList(Request $request){
        $email = $request->email;
        $result = Favourite::where('email', $email)->get();
        return $result;
    }
}
