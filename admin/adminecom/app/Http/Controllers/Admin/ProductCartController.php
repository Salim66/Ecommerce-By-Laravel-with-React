<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CartOrder;
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
        // $result = ProductCart::where('product_code', $productCode)->count();
        $result = ProductCart::count();
        return $result;
    }

    /**
     * @access private
     * @routes /api/cartlist
     * @method GET
     */
    public function cartList(Request $request){
        $email = $request->email;
        $result = ProductCart::where('email', $email)->get();
        return $result;
    }

    /**
     * @access private
     * @routes /api/removecartlist
     * @method GET
     */
    public function removeCartList(Request $request){
        $id = $request->id;
        $result = ProductCart::where('id', $id)->delete();
        return $result;
    }

    /**
     * @access private
     * @routes /api/cartitemincrement
     * @method GET
     */
    public function cartItemIncrement(Request $request){
        $id = $request->id;
        $quantity = $request->quantity;
        $price = $request->price;
        $newQuantity = $quantity + 1;
        $total_price = $newQuantity * $price;
        $result = ProductCart::where('id', $id)->update([
            'quantity' => $newQuantity,
            'total_price' => $total_price
        ]);
        return $result;
    }

    /**
     * @access private
     * @routes /api/cartitemdecrement
     * @method GET
     */
    public function cartItemDecrement(Request $request){
        $id = $request->id;
        $quantity = $request->quantity;
        $price = $request->price;
        $newQuantity = $quantity - 1;
        $total_price = $newQuantity * $price;
        $result = ProductCart::where('id', $id)->update([
            'quantity' => $newQuantity,
            'total_price' => $total_price
        ]);
        return $result;
    }

    /**
     * @access private
     * @routes /api/cartorder
     * @method POST
     */
    public function cartOrder(Request $request){
        $city = $request->input('city');
        $payment_method = $request->input('payment_method');
        $name = $request->input('name');
        $email = $request->input('email');
        $delivery_address = $request->input('delivery_address');
        $invoice_no = $request->input('invoice_no');
        $delivery_charge = $request->input('delivery_charge');

        date_default_timezone_set("Asia/Dhaka");
        $order_time = date('h:i:sa');
        $order_date = date('d-m-Y');

        $cart_list = ProductCart::where('email', $email)->get();

        foreach ($cart_list as $key => $cart) {
            $cartInsertDeleteResult = "";
            $result = CartOrder::insert([
                "invoice_no" => $invoice_no,
                "product_name" => $cart->product_name,
                "product_code" => $cart->product_code,
                "size" => $cart->size,
                "color" => $cart->color,
                "quantity" => $cart->quantity,
                "unit_price" => $cart->unit_price,
                "total_price" => $cart->total_price,
                "email" => $email,
                "name" => $name,
                "payment_method" => $payment_method,
                "delivery_address" => $delivery_address,
                "city" => $city,
                "delivery_charge" => $delivery_charge,
                "order_date" => $order_date,
                "order_time" => $order_time,
                "order_status" => "Pending"
            ]);

            if($result == 1){
                $deleteCart = ProductCart::where('id', $cart->id)->delete();
                if($deleteCart == 1){
                    $cartInsertDeleteResult = 1;
                }else {
                    $cartInsertDeleteResult = 0;
                }
            }

        }

        return $cartInsertDeleteResult;
    }

    /**
     * @access private
     * @routes /api/orderListByUser
     * @method GET
     */
    public function orderListByUser(Request $request){
        $email = $request->email;
        $result = CartOrder::where('email', $email)->orderBy('id', 'desc')->get();
        return $result;
    }
}
