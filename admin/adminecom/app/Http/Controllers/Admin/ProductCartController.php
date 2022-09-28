<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ProductCart;
use App\Models\ProductList;
use Illuminate\Http\Request;

class ProductCartController extends Controller
{
    /**
     * @access public
     * @routes /api/addtocart
     * @method POST
     */
    public function addToCart(Request $request){
        $email = $request->email;
        $product_code = $request->product_code;
        $size = $request->size;
        $color = $request->color;
        $quantity = $request->quantity;

        $productList = ProductList::where('product_code', $product_code)->first();

        if($productList->special_price == "na"){
            $total_price = $productList->price*$quantity;
            $unit_price = $productList->price;
        }else {
            $total_price = $productList->special_price*$quantity;
            $unit_price = $productList->special_price;
        }

        $result = ProductCart::create([
            'image' => $productList->image,
            'email' => $email,
            'product_name' => $productList->title,
            'product_code' => $productList->product_code,
            'size' => 'Size: '.$size,
            'color' => 'Color: '.$color,
            'quantity' => $quantity,
            'unit_price' => $unit_price,
            'total_price' => $total_price,
        ]);

        return $result;
    }

    /**
     * @access private
     * @routes /api/cartcount
     * @method GET
     */
    public function cartCount(Request $request){
        $productCode = $request->product_code;
        $result = ProductCart::where('product_code', $productCode)->count();
        return $result;
    }
}
