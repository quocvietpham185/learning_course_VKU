<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ChartController;
use App\Http\Controllers\Admin\ClientReviewController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\CourseController;
use App\Http\Controllers\Admin\FooterController;
use App\Http\Controllers\Admin\HomePageEtcController;
use App\Http\Controllers\Admin\InformationController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\ServiceController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::get('/chartdata', [ChartController::class, 'onAllSelect']);

Route::get('/clientreview',[ClientReviewController::class, 'onAllSelect']);

Route::post('/contactsend',[ContactController::class, 'onContactSend']);
Route::get('/coursehome',[CourseController::class, 'onSelectFour']);

Route::get('/courseall', [CourseController::class, 'onSelectAll']);
Route::post('/coursedetails', [CourseController::class, 'onSelectDetails']);

Route::get('/footerdata', [FooterController::class, 'onSelectAll']);

Route::get('/information', [InformationController::class, 'onSelectAll']);

Route::get('/services', [ServiceController::class, 'ServiceView']);

Route::get('/projecthome', [ProjectController::class, 'onSelectThree']);
Route::get('/projectall', [ProjectController::class, 'onSelectAll']);
Route::post('/projectdetails', [ProjectController::class, 'ProjectDetails']);

Route::get('/home/video', [HomePageEtcController::class, 'SelectVideo']);
Route::get('/totalhome', [HomePageEtcController::class, 'SelectTotalHome']);
Route::get('/techhome', [HomePageEtcController::class, 'SelectTechHome']);
Route::get('/homepage/title', [HomePageEtcController::class, 'SelectHomeTitle']);