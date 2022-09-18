<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
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
        $result = Category::all();
        return $result;
    }
}
