<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Subcategory;
use Illuminate\Http\Request;
use Image;

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

    /**
     * @access private
     * @routes /categories/add/category
     * @method GET
     */
    public function addCategory(){
        return view('backend.category.add_category');
    }

    /**
     * @access private
     * @routes /categories/store/category
     * @method POST
     */
    public function storeCategory(Request $request){
        $this->validate($request, [
            'category_name' => 'required'
        ],[
            'category_name.required' => 'Please insert category name'
        ]);

        $save_url = '';
        if($request->hasFile('category_image')){
            $image = $request->file('category_image');
            $img_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
            Image::make($image)->resize(128, 128)->save('upload/category/'.$img_gen);
            $save_url = 'http://localhost:8000/upload/category/'.$img_gen;
        }

        Category::create([
            'category_name' => $request->category_name,
            'category_image' => $save_url
        ]);

        $notification = [
            'message' => "Category added successfully",
            'alert-type' => "success"
        ];

        return redirect()->route('get.all.category')->with($notification);
    }

    /**
     * @access private
     * @routes /categories/edit/category/{id}
     * @method GET
     */
    public function editCategory($id){
        $data = Category::findOrFail($id);
        return view('backend.category.edit_category', compact('data'));
    }

    /**
     * @access private
     * @routes /categories/update/category/{id}
     * @method PUT
     */
    public function updateCategory($id){
        $data = Category::findOrFail($id);

    }
}
