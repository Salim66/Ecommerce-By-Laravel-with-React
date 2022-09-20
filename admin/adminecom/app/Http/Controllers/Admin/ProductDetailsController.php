<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ProductDetails;
use App\Models\ProductList;
use Illuminate\Http\Request;

class ProductDetailsController extends Controller
{
    /**
     * @access public
     * @routes /api/product-details/{id}
     * @method GET
     */
    public function productDetails($id){
        $productDetails = ProductDetails::where('product_id', $id)->first();
        $productList = ProductList::where('id', $id)->first();
        $item = [
            'productDetails' => $productDetails,
            'productList' => $productList,
        ];
        return $item;
    }
}
