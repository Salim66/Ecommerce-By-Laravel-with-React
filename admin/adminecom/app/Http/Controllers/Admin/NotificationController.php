<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    /**
     * @access public
     * @routes /api/notification
     * @method GET
     */
    public function notificationHistory(){
        $result = Notification::all();
        return $result;
    }
}
