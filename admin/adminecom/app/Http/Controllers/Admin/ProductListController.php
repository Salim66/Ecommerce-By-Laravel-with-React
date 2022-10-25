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

    /**
     * @access private
     * @routes /products/all/product
     * @method GET
     */
    public function getAllProduct(){
        $all_data = ProductList::latest()->get();
        return view('backend.product.all_product', compact('all_data'));
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
}
