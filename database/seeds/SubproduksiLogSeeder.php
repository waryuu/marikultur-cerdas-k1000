<?php

use Illuminate\Database\Seeder;

class SubproduksiLogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('subproduksilog')->insert([
            'nama_ikan' => 'Kerapu Macan',
            "panjang_ikan"=> '15',
            "jumlah_ikan"=> '700',
            "berat_ikan"=> '2',
            "tanggal_cuci"=> '2020-10-22',
            "tanggal_pindah"=> '2020-02-22',
            "keramba_sebelum"=> '3',
            "keramba_sesudah"=> '4',
            "kegiatan"=>'Pemindahan',
            "subproduksi_id"=> '2',
            // "user_id"=> 1,
            'created_at' => now(),
            'updated_at' => now()
            ]);
        DB::table('subproduksilog')->insert([
            'nama_ikan' => 'Kerapu Macan',
            "panjang_ikan"=> 17,
            "jumlah_ikan"=> 500,
            "berat_ikan"=> "2",
            "tanggal_cuci"=> "2020-10-23",
            "tanggal_pindah"=> "2020-02-23",
            "kegiatan"=>'Pemindahan',
            "keramba_sebelum"=> 4,
            "keramba_sesudah"=> 5,
            "subproduksi_id"=> 2,
            // "user_id"=> 1,
            'created_at' => now(),
            'updated_at' => now()
            ]);
           
        
    }
}
