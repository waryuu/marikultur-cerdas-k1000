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
    Route::put('update/profile','ApiProfileController@updateProfile');
    Route::get('me','ApiMeController');
    Route::get('user','ApiUserController@index');
});


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/apikerambaidkelompok/{kelompok_id}','ApiKerambaController@showkerambabyidkelompok');
Route::get('/apiproduksiidkelompok/{kelompok_id}','ApiProduksiController@showproduksibyidkelompok');

Route::get('/apiaktivitas/where','ApiAktivitasController@where');
Route::get('/apiaktivitas','ApiAktivitasController@aktivitasget');
Route::get('/apiaktivitas/{id}','ApiAktivitasController@showaktivitas');
Route::post('/apiaktivitas/store','ApiAktivitasController@aktivitasstore');
Route::put('/apiaktivitas/store','ApiAktivitasController@aktivitasstore');
Route::delete('/apiaktivitas/delete/{id}','ApiAktivitasController@destroyaktivitas');

Route::get('/apikelompok','ApiKelompokController@index');
Route::get('/apikelompok/where','ApiKelompokController@where');
Route::get('/apikelompok/{id}','ApiKelompokController@show');
Route::post('/apikelompok/store','ApiKelompokController@store');
Route::put('/apikelompok/store','ApiKelompokController@store');
Route::delete('/apikelompok/delete/{id}','ApiKelompokController@destroy');

Route::get('/apisensorsuhu','ApiSensorSuhuController@index');
Route::get('/apisensorsuhu/where','ApiSensorSuhuController@where');
Route::get('/apisensorsuhu/{id}','ApiSensorSuhuController@show');
Route::post('/apisensorsuhu/store','ApiSensorSuhuController@store');
Route::put('/apisensorsuhu/store','ApiSensorSuhuController@store');
Route::delete('/apisensorsuhu/delete/{id}','ApiSensorSuhuController@destroy');

Route::get('/apikeramba','ApiKerambaController@index');
Route::get('/apikeramba/where','ApiKerambaController@where');
Route::get('/apikeramba/{id}','ApiKerambaController@show');
Route::post('/apikeramba/store','ApiKerambaController@store');
Route::put('/apikeramba/store','ApiKerambaController@store');
Route::delete('/apikeramba/delete/{id}','ApiKerambaController@destroy');

Route::get('/apiproduksi','ApiProduksiController@index');
Route::get('/apiproduksiall','ApiProduksiController@getallproduksi');
Route::get('/apiproduksi/where','ApiProduksiController@where');
Route::get('/apiproduksi/{id}','ApiProduksiController@show');
Route::post('/apiproduksi/store','ApiProduksiController@store');
Route::put('/apiproduksi/store','ApiProduksiController@store');
Route::put('/apiproduksi/panen/{id}','ApiProduksiController@panen');
Route::delete('/apiproduksi/delete/{id}','ApiProduksiController@destroy');

Route::get('/apisensordo','ApiSensorDoController@index');
Route::get('/apisensordo/where','ApiSensorDoController@where');
Route::get('/apisensordo/{id}','ApiSensorDoController@show');
Route::post('/apisensordostore','ApiSensorDoController@store');
Route::put('/apisensordostore','ApiSensorDoController@store');
Route::delete('/apisensordodelete/{id}','ApiSensorDoController@destroy');

Route::get('/apisensorhumtemp','ApiSensorHumTempController@index');
Route::get('/apisensorhumtemp/{id}','ApiSensorHumTempController@show');
Route::post('/apisensorhumtemp/store','ApiSensorHumTempController@store');
Route::put('/apisensorhumtemp/store','ApiSensorHumTempController@store');
Route::delete('/apisensorhumtemp/delete/{id}','ApiSensorHumTempController@destroy');

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
Route::get('/apipakan/where','ApiPakanController@where');
Route::get('/apipakan/{id}','ApiPakanController@show');
Route::post('/apipakan/store','ApiPakanController@store');
Route::put('/apipakan/store','ApiPakanController@store');
Route::delete('/apipakan/delete/{id}','ApiPakanController@destroy');

Route::get('/apipencucian','ApiPencucianController@pencucianget');
Route::get('/apipemindahan','ApiPemindahanController@pemindahanget');

Route::get('/apipencucian/{id}','ApiPencucianController@showcuci');
Route::get('/apipemindahan/{id}','ApiPemindahanController@showpindah');

Route::post('/apipencucian/store','ApiPencucianController@pencucianstore');
Route::post('/apipemindahan/store','ApiPemindahanController@pemindahanstore');

Route::put('/apipencucian/store','ApiPencucianController@pencucianstore');
Route::put('/apipemindahan/store','ApiPemindahanController@pemindahanstore');

Route::delete('/apipencucian/delete/{id}','ApiPencucianController@destroycuci');
Route::delete('/apipemindahan/delete/{id}','ApiPemindahanController@destroypindah');



