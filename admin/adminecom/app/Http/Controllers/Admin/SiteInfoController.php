<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SiteInfo;
use Illuminate\Http\Request;

class SiteInfoController extends Controller
{
    /**
     * @access private
     * @routes /api/get-site-info
     * @method GET
     */
    public function getSiteInfo(){
        // get site info all data
        $result = SiteInfo::all();
        return $result;
    }

    /**
     * @access private
     * @routes /site-info
     * @method GET
     */
    public function editSiteInfo(){
        $data = SiteInfo::findOrFail(1);
        return view('backend.siteinfo.edit_siteinfo', compact('data'));
    }

    /**
     * @access private
     * @routes /siteinfo/update
     * @method POST
     */
    public function updateReview(Request $request){
        $data = SiteInfo::findOrFail($request->id)->update([
            'about' => $request->about,
            'refund' => $request->refund,
            'purchase_guide' => $request->purchase_guide,
            'privacy' => $request->privacy,
            'address' => $request->address,
            'google_app_link' => $request->google_app_link,
            'ios_app_link' => $request->ios_app_link,
            'facebook_link' => $request->facebook_link,
            'twitter_link' => $request->twitter_link,
            'instagram_link' => $request->instagram_link,
            'copyright_text' => $request->copyright_text
        ]);

        $notification = [
            'message' => "Siteinfo updated successfully",
            'alert-type' => "info"
        ];

        return redirect()->back()->with($notification);
    }
}
