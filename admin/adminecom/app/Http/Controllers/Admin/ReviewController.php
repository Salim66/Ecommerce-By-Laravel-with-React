<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ProductReview;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    /**
     * @access private
     * @routes /api/reviewlist/{id}
     * @method GET
     */
    public function reviewList(Request $request){
        $id = $request->id;
        $reviewList = ProductReview::where('product_id', $id)->orderBy('id', 'DESC')->limit(4)->get();
        return $reviewList;
    }
}
