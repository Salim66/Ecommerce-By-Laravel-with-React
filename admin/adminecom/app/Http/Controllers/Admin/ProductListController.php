<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\ProductList;
use App\Models\Subcategory;
use Illuminate\Http\Request;
use Image;

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
        $all_data = ProductList::latest()->paginate(10);
        return view('backend.product.all_product', compact('all_data'));
    }

    /**
     * @access private
     * @routes /products/add/product
     * @method GET
     */
    public function addProduct(){
        $categories = Category::orderBy('category_name', 'ASC')->get();
        $subcategories = Subcategory::orderBy('subcategory_name', 'ASC')->get();
        return view('backend.product.add_product', compact('categories', 'subcategories'));
    }

    /**
     * @access private
     * @routes /products/store/product
     * @method POST
     */
    public function storeProduct(Request $request){
        $this->validate($request, [
            'product_code' => 'required'
        ],[
            'product_code.required' => 'Please insert product code'
        ]);

        $save_url = '';
        if($request->hasFile('image')){
            $image = $request->file('image');
            $img_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
            Image::make($image)->resize(128, 128)->save('upload/product/'.$img_gen);
            $save_url = 'http://localhost:8000/upload/product/'.$img_gen;
        }

        $product_id = ProductList::insertGetId([
            'title' => $request->title,
            'price' => $request->price,
            'special_price' => $request->special_price,
            'category' => $request->category,
            'subcategory' => $request->subcategory,
            'remark' => $request->remark,
            'brand' => $request->brand,
            'product_code' => $request->product_code,
            'image' => $save_url
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
