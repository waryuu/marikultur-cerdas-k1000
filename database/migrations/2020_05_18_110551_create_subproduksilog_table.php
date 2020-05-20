<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubproduksilogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subproduksilog', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nama_ikan')->nullable();
            $table->integer('jumlah_ikan')->nullable();
            $table->integer('panjang_ikan')->nullable();
            $table->string('tanggal_cuci')->nullable();
            $table->string('berat_ikan')->nullable();
            $table->string('tanggal_pindah')->nullable();
            $table->integer('keramba_sebelum')->unsigned()->nullable();
            $table->foreign('keramba_sebelum')->references('id')->on('keramba');
            $table->integer('keramba_sesudah')->unsigned()->nullable();
            $table->foreign('keramba_sesudah')->references('id')->on('keramba');
            $table->integer('subproduksi_id')->unsigned();
            $table->foreign('subproduksi_id')->references('id')->on('subproduksi');
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
        Schema::dropIfExists('subproduksilog');
    }
}
