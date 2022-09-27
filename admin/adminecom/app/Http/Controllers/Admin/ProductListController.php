<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ProductList;
use Illuminate\Http\Request;

class ProductListController extends Controller
{
    /**
     * @access public
     * @routes /api/product-list-by-remark/{remark}
     * @method GET
     */
    public function productListByRemark(Request $request){
        // get paramitter by request
        $remark = $request->remark;
        $product_list = ProductList::where('remark', $remark)->get();
        return $product_list;
    }

    /**
     * @access public
     * @routes /api/product-list-by-category/{category}
     * @method GET
     */
    public function productListByCategory(Request $request){
        // get paramitter by request
        $category = $request->category;
        $product_list = ProductList::where('category', $category)->get();
        return $product_list;
    }

    /**
     * @access public
     * @routes /api/product-list-by-subcategory/{category}/{subcategory}
     * @method GET
     */
    public function productListBySubCategory(Request $request){
        // get paramitter by request
        $category = $request->category;
        $subcategory = $request->subcategory;
        $product_list = ProductList::where('category', $category)->where('subcategory', $subcategory)->get();
        return $product_list;
    }

    /**
     * @access public
     * @routes /api/search/{key}
     * @method GET
     */
    public function productListBySearch(Request $request){
        // get paramitter by request
        $key = $request->key;
        $result = ProductList::where('title', 'LIKE', "%{$key}%")->orWhere('brand', 'LIKE', "%{$key}%")->get();
        return $result;
    }

    /**
     * @access public
     * @routes /api/similar/{subcategory}
     * @method GET
     */
    public function similarProduct(Request $request){
        $subcategory = $request->subcategory;
        $productList = ProductList::where('subcategory', $subcategory)->orderBy('id', 'DESC')->limit(6)->get();
        return $productList;
    }
}
