<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Visitor;
use Illuminate\Http\Request;

class VisitorController extends Controller
{
    /**
     * @access public
     * @routes /api/get-visitor
     * @method GET
     */
    public function getVisitorDetails(){

        // get ip address from server
        $ip_address = $_SERVER['REMOTE_ADDR'];
        // set my current time zone
        date_default_timezone_set("Asia/Dhaka");
        // current time get
        $visit_time = date('h:i:sa');
        // current date get
        $visit_date = date('d-m-Y');

        // Create visitor record
        $result = Visitor::create([
            'ip_address' => $ip_address,
            'visit_time' => $visit_time,
            'visit_date' => $visit_date,
        ]);

        return $result;

    }
}
