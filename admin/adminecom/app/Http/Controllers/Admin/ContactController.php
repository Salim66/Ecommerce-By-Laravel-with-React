<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * @access public
     * @routes /api/post-contact
     * @method POST
     */
    public function getPostContact(Request $request){
        // Get all requested name
        $name = $request->input('name');
        $email = $request->input('email');
        $message = $request->input('message');

        // Set time zone and get time and date
        date_default_timezone_set("Asia/Dhaka");
        $contact_time = date("h:i:sa");
        $contact_date = date("d-m-Y");

        // create contact by client data
        $result = Contact::create([
            'name' => $name,
            'email' => $email,
            'message' => $message,
            'contact_time' => $contact_time,
            'contact_date' => $contact_date,
        ]);

        return $result;
    }

    /**
     * @access private
     * @routes /all/contact
     * @method GET
     */
    public function getAllContact(){
        $all_data = Contact::latest()->paginate(10);
        return view('backend.contact.all_contact', compact('all_data'));
    }
}
