<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Footer;
use Illuminate\Http\Request;

class FooterController extends Controller
{
    //
    public function onSelectAll(){
        $result = Footer::all();
        return $result;
    }
}
