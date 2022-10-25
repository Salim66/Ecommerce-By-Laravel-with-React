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
    public function updateCategory(Request $request, $id){

        $data = Category::findOrFail($id);

        $save_url = '';
        if($request->hasFile('category_image')){
            $image = $request->file('category_image');
            $img_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
            Image::make($image)->resize(128, 128)->save('upload/category/'.$img_gen);
            $save_url = 'http://localhost:8000/upload/category/'.$img_gen;
        }else {
            $save_url = $data->category_image;
        }

        $data->category_name = $request->category_name;
        $data->category_image = $save_url;
        $data->update();

        $notification = [
            'message' => "Category updated successfully",
            'alert-type' => "info"
        ];

        return redirect()->route('get.all.category')->with($notification);

    }

    /**
     * @access private
     * @routes /categories/delete/category/{id}
     * @method GET
     */
    public function deleteCategory($id){

        Category::findOrFail($id)->delete();

        $notification = [
            'message' => "Category delete successfully",
            'alert-type' => "success"
        ];

        return redirect()->back()->with($notification);

    }

    ////////////////// Sub Category ////////////////////
    /**
     * @access private
     * @routes /subcategories/all/category
     * @method GET
     */
    public function getAllSubCategory(){

        $all_data = Subcategory::latest()->get();
        return view('backend.subcategory.all_subcategory', compact('all_data'));

    }

    /**
     * @access private
     * @routes /categories/add/subcategory
     * @method GET
     */
    public function addSubCategory(){
        $categories = Category::latest()->get();
        return view('backend.subcategory.add_subcategory', compact('categories'));
    }

    /**
     * @access private
     * @routes /categories/store/subcategory
     * @method POST
     */
    public function storeSubCategory(Request $request){
        $this->validate($request, [
            'category_name' => 'required',
            'subcategory_name' => 'required'
        ],[
            'category_name.required' => 'Please insert category name',
            'subcategory_name.required' => 'Please insert sub-category name'
        ]);

        Subcategory::create([
            'category_name' => $request->category_name,
            'subcategory_name' => $request->subcategory_name
        ]);

        $notification = [
            'message' => "Sub-Category added successfully",
            'alert-type' => "success"
        ];

        return redirect()->route('get.all.subcategory')->with($notification);
    }

     /**
     * @access private
     * @routes /categories/edit/subcategory/{id}
     * @method GET
     */
    public function editSubCategory($id){
        $data = Subcategory::findOrFail($id);
        $categories = Category::latest()->get();
        return view('backend.subcategory.edit_subcategory', compact('data', 'categories'));
    }

    /**
     * @access private
     * @routes /categories/update/subcategory/{id}
     * @method PUT
     */
    public function updateSubCategory(Request $request, $id){

        $data = Subcategory::findOrFail($id);

        $data->category_name = $request->category_name;
        $data->subcategory_name = $request->subcategory_name;
        $data->update();

        $notification = [
            'message' => "Sub-Category updated successfully",
            'alert-type' => "info"
        ];

        return redirect()->route('get.all.subcategory')->with($notification);

    }

    /**
     * @access private
     * @routes /categories/delete/subcategory/{id}
     * @method GET
     */
    public function deleteSubCategory($id){

        Subcategory::findOrFail($id)->delete();

        $notification = [
            'message' => "SubCategory delete successfully",
            'alert-type' => "success"
        ];

        return redirect()->back()->with($notification);

    }

}
