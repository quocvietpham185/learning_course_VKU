<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    //
    public function onSelectFour(){
        $result = Course::limit(4) -> get();
        return $result;
    }

    public function onSelectAll(){
        $result = Course::all();
        return $result;
    }

    public function onSelectDetails(Request $request){
        $id = $request->input('id');
        $result = Course::where('id', $id)->get();
        return $result;
    }

}
