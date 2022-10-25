<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HomeSlider;
use Illuminate\Http\Request;
use Image;

class SliderController extends Controller
{
    /**
     * @access public
     * @routes /api/all-slider
     * @method GET
     */
    public function allSlider(){
        $result = HomeSlider::all();
        return $result;
    }

    /**
     * @access private
     * @routes /sliders/all/slider
     * @method GET
     */
    public function getAllSlider(){
        $all_data = HomeSlider::latest()->get();
        return view('backend.slider.all_slider', compact('all_data'));
    }

    /**
     * @access private
     * @routes /sliders/add/slider
     * @method GET
     */
    public function addSlider(){
        return view('backend.slider.add_slider');
    }

    /**
     * @access private
     * @routes /sliders/store/slider
     * @method POST
     */
    public function storeSlider(Request $request){
        $this->validate($request, [
            'slider_image' => 'required'
        ],[
            'slider_image.required' => 'Please insert slider image'
        ]);

        $save_url = '';
        if($request->hasFile('slider_image')){
            $image = $request->file('slider_image');
            $img_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
            Image::make($image)->resize(1024, 379)->save('upload/slider/'.$img_gen);
            $save_url = 'http://localhost:8000/upload/slider/'.$img_gen;
        }

        HomeSlider::create([
            'slider_image' => $save_url
        ]);

        $notification = [
            'message' => "Slider added successfully",
            'alert-type' => "success"
        ];

        return redirect()->route('get.all.slider')->with($notification);
    }

    /**
     * @access private
     * @routes /sliders/edit/slider/{id}
     * @method GET
     */
    public function editSlider($id){
        $data = HomeSlider::findOrFail($id);
        return view('backend.slider.edit_slider', compact('data'));
    }

    /**
     * @access private
     * @routes /sliders/update/slider/{id}
     * @method PUT
     */
    public function updateSlider(Request $request, $id){

        $data = HomeSlider::findOrFail($id);

        $save_url = '';
        if($request->hasFile('slider_image')){
            $image = $request->file('slider_image');
            $img_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
            Image::make($image)->resize(1024, 379)->save('upload/slider/'.$img_gen);
            $save_url = 'http://localhost:8000/upload/slider/'.$img_gen;
        }else {
            $save_url = $data->slider_image;
        }

        $data->slider_image = $save_url;
        $data->update();

        $notification = [
            'message' => "Slider updated successfully",
            'alert-type' => "info"
        ];

        return redirect()->route('get.all.slider')->with($notification);

    }

    /**
     * @access private
     * @routes /sliders/delete/slider/{id}
     * @method GET
     */
    public function deleteSlider($id){

        HomeSlider::findOrFail($id)->delete();

        $notification = [
            'message' => "Slider delete successfully",
            'alert-type' => "success"
        ];

        return redirect()->back()->with($notification);

    }

}
