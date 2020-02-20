<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKerambaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('keramba', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('nama_keramba');
            $table->integer('panjang_keramba');
            $table->integer('lebar_keramba');
            $table->string('kapasitas_keramba');
            $table->integer('kelompok_id')->unsigned();
            $table->foreign('kelompok_id')->references('id')->on('kelompok');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('keramba');
    }
}
