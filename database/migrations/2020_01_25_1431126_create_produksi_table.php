<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProduksiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('produksi', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('nama_ikan')->nullable();
            $table->integer('jumlah_ikan_awal')->nullable();
            $table->integer('panjang_ikan_awal')->nullable();
            $table->string('tanggal_tebar')->nullable();
            $table->string('tanggal_panen')->nullable();
            $table->string('berat_ikan_awal')->nullable();
            $table->string('berat_ikan_akhir')->nullable();
            $table->integer('jumlah_ikan_akhir')->nullable();
            $table->integer('panjang_ikan_akhir')->nullable();
            // $table->string('tanggal_cuci')->nullable();
            // $table->string('tanggal_pindah')->nullable();
            $table->string('status_panen')->default('Pembesaran');
            $table->integer('keramba_id')->unsigned();
            $table->foreign('keramba_id')->references('id')->on('keramba');
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
        Schema::dropIfExists('produksi');
    }
}
