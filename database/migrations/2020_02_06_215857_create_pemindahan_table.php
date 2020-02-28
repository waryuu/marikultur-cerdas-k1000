<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePemindahanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pemindahan', function (Blueprint $table) {
            $table->Increments('id');
            $table->integer('jumlah_ikan')->nullable();
            $table->integer('panjang_ikan')->nullable();
            $table->string('tanggal_pindah')->nullable();
            $table->string('berat_ikan')->nullable();
            $table->integer('keramba_sebelum')->unsigned();
            $table->foreign('keramba_sebelum')->references('id')->on('keramba');
            $table->integer('keramba_sesudah')->unsigned();
            $table->foreign('keramba_sesudah')->references('id')->on('keramba');
            $table->integer('produksi_id')->unsigned();
            $table->foreign('produksi_id')->references('id')->on('produksi');
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
        Schema::dropIfExists('pemindahan');
    }
}
