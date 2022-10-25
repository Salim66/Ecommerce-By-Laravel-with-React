<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Subcategory;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * @access public
     * @routes /api/all-category
     * @method GET
     */
    public function allCategory(){
        // get all category
        $categories = Category::all();
        $categoryDetailsArray = [];

        foreach($categories as $value){
            $subcategory = Subcategory::where('category_name', $value->category_name)->get();

            $item = [
                'category_name' => $value->category_name,
                'category_image' => $value->category_image,
                'subcategory' => $subcategory
            ];

            array_push($categoryDetailsArray, $item);
        }

        return $categoryDetailsArray;
    }

    /**
     * @access private
     * @routes /categories/all/category
     * @method GET
     */
    public function getAllCategory(){
        $all_data = Category::latest()->get();
        return view('backend.category.all_category', compact('all_data'));
    }
}
