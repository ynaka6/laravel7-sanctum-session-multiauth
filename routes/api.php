<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', 'Api\User\LoginController');

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/me', 'Api\User\MeController');
    Route::delete('/logout', 'Api\User\LogoutController');
});
