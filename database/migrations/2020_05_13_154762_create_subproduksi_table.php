<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubproduksiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subproduksi', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('nama_ikan')->nullable();
            $table->integer('jumlah_ikan')->nullable();
            // $table->integer('panjang_ikan')->nullable();
            // $table->string('tanggal_cuci')->nullable();
            // $table->string('berat_ikan')->nullable();
            $table->integer('produksi_id')->unsigned();
            $table->foreign('produksi_id')->references('id')->on('produksi');
            // $table->unsignedBigInteger('user_id');
            // $table->foreign('user_id')->references('id')->on('users');
            // $table->string('tanggal_pindah')->nullable();
            // $table->integer('keramba_sebelum')->unsigned()->nullable();
            // $table->foreign('keramba_sebelum')->references('id')->on('keramba');
            // $table->integer('keramba_sesudah')->unsigned()->nullable();
            // $table->foreign('keramba_sesudah')->references('id')->on('keramba');
            $table->string('status_panen')->default('Pembesaran');
            $table->string('tanggal_panen')->nullable();
            $table->string('berat_ikan_akhir')->nullable();
            $table->integer('jumlah_ikan_akhir')->nullable();
            $table->integer('panjang_ikan_akhir')->nullable();
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
        Schema::dropIfExists('subproduksi');
    }
}
