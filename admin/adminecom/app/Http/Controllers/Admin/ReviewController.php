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
        $product_code = $request->product_code;
        $reviewList = ProductReview::where('product_code', $product_code)->orderBy('id', 'DESC')->limit(4)->get();
        return $reviewList;
    }

    /**
     * @access private
     * @routes /api/postreview
     * @method POST
     */
    public function postReview(Request $request){
        $product_name = $request->input('product_name');
        $product_code = $request->input('product_code');
        $reviewer_name = $request->input('reviewer_name');
        $reviewer_rating = $request->input('reviewer_rating');
        $reviewer_photo = $request->input('reviewer_photo');
        $reviewer_comments = $request->input('reviewer_comments');

        $result = ProductReview::create([
            'product_code' => $product_code,
            'product_name' => $product_name,
            'reviewer_name' => $reviewer_name,
            'reviewer_rating' => $reviewer_rating,
            'reviewer_photo' => $reviewer_photo,
            'reviewer_comments' => $reviewer_comments,
        ]);

        return $result;
    }
}
