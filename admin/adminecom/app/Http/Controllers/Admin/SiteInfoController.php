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
}
