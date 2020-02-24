<?php

use Illuminate\Http\Request;

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

Route::group(['prefix' => 'auth', 'namespace' => 'Auth'], function(){
    Route::post('register','ApiRegisterController@register');
    Route::post('signin','ApiSignInController');
    // Route::post('signin', [ 'as' => 'login', 'uses' => 'ApiSignInController']);
    Route::post('signout','ApiSignOutController');
    Route::put('update/{id}','ApiUpdateController@update');
    Route::put('profileupdate','ApiUpdateController@updateProfile');
    Route::get('me','ApiMeController');
});


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/apikelompok','ApiKelompokController@index');
Route::get('/apikelompok/{id}','ApiKelompokController@show');
Route::post('/apikelompok/store','ApiKelompokController@store');
Route::put('/apikelompok/store','ApiKelompokController@store');
Route::delete('/apikelompok/delete/{id}','ApiKelompokController@destroy');

Route::get('/apisensorsuhu','ApiSensorSuhuController@index');
Route::get('/apisensorsuhu/{id}','ApiSensorSuhuController@show');
Route::post('/apisensorsuhu/store','ApiSensorSuhuController@store');
Route::put('/apisensorsuhu/store','ApiSensorSuhuController@store');
Route::delete('/apisensorsuhu/delete/{id}','ApiSensorSuhuController@destroy');

Route::get('/apikeramba','ApiKerambaController@index');
Route::get('/apikeramba/{id}','ApiKerambaController@show');
Route::post('/apikerambastore','ApiKerambaController@store');
Route::put('/apikerambastore','ApiKerambaController@store');
Route::delete('/apikerambadelete/{id}','ApiKerambaController@destroy');

Route::get('/apiproduksi','ApiProduksiController@index');
Route::get('/apiproduksi/{id}','ApiProduksiController@show');
Route::post('/apiproduksi/store','ApiProduksiController@store');
Route::put('/apiproduksi/store','ApiProduksiController@store');
Route::delete('/apiproduksi/delete/{id}','ApiProduksiController@destroy');

Route::get('/apisensordo','ApiSensorDoController@index');
Route::get('/apisensordo/{id}','ApiSensorDoController@show');
Route::post('/apisensordostore','ApiSensorDoController@store');
Route::put('/apisensordostore','ApiSensorDoController@store');
Route::delete('/apisensordodelete/{id}','ApiSensorDoController@destroy');

Route::get('/apisensorhumtemp','ApiSensorHumTempController@index');
Route::get('/apisensorhumtemp/{id}','ApiSensorHumTempController@show');
Route::post('/apisensorhumtempstore','ApiSensorHumTempController@store');
Route::put('/apisensorhumtempstore','ApiSensorHumTempController@store');
Route::delete('/apisensorhumtempdelete/{id}','ApiSensorHumTempController@destroy');

Route::get('/apisensorwave','ApiSensorwaveController@index');
Route::get('/apisensorwave/{id}','ApiSensorwaveController@show');
Route::post('/apisensorwavestore','ApiSensorwaveController@store');
Route::put('/apisensorwavestore','ApiSensorwaveController@store');
Route::delete('/apisensorwavedelete/{id}','ApiSensorwaveController@destroy');

Route::get('/apisensorwind','ApiSensorwindController@index');
Route::get('/apisensorwind/{id}','ApiSensorwindController@show');
Route::post('/apisensorwindstore','ApiSensorwindController@store');
Route::put('/apisensorwindstore','ApiSensorwindController@store');
Route::delete('/apisensorwinddelete/{id}','ApiSensorwindController@destroy');

Route::get('/apipakan','ApiPakanController@index');
Route::get('/apipakan/{id}','ApiPakanController@show');
Route::post('/apipakan/store','ApiPakanController@store');
Route::put('/apipakan/store','ApiPakanController@store');
Route::delete('/apipakan/delete/{id}','ApiPakanController@destroy');

Route::get('/apipencucian','ApiProduksiController@pencucianget');
Route::get('/apipemindahan','ApiProduksiController@pencucianget');
Route::get('/apipencucian/{id}','ApiProduksiController@showcuci');
Route::get('/apipemindahan/{id}','ApiProduksiController@showpindah');
Route::post('/apipencucianstore','ApiProduksiController@pencucianstore');
Route::post('/apipemindahanstore','ApiProduksiController@pemindahanstore');
Route::put('/apipencucianstore','ApiProduksiController@pencucianstore');
Route::put('/apipemindahanstore','ApiProduksiController@pemindahanstore');
Route::delete('/apipencuciandelete/{id}','ApiProduksiController@destroycuci');
Route::delete('/apipemindahandelete/{id}','ApiProduksiController@destroypindah');

