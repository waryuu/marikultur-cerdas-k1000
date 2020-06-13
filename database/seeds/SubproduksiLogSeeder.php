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
            'nama_ikan' => 'Kerapu Cantang',
            'panjang_ikan' => '13',
            'jumlah_ikan' => '700',
            'tanggal_cuci' => '2020-01-21',
            'tanggal_pindah' => '2020-01-21',
            'keramba_sebelum'=> '1',
            'keramba_sesudah'=> '2',
            'berat_ikan'=> '1',
            "subproduksi_id"=> '1',
            
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksilog')->insert([
            'nama_ikan' => 'Kerapu Macan',
            "panjang_ikan"=> '15',
            "jumlah_ikan"=> '700',
            "berat_ikan"=> '2',
            "tanggal_cuci"=> '2020-10-22',
            "tanggal_pindah"=> '2020-02-22',
            "keramba_sebelum"=> '3',
            "keramba_sesudah"=> '4',
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
            "keramba_sebelum"=> 4,
            "keramba_sesudah"=> 5,
            "subproduksi_id"=> 2,
            // "user_id"=> 1,
            'created_at' => now(),
            'updated_at' => now()
            ]);
        DB::table('subproduksilog')->insert([
            'nama_ikan' => 'Kerapu Cantang',
            'panjang_ikan' => '14',
            'jumlah_ikan' => '800',
            'tanggal_cuci' => '2020-10-21',
            'tanggal_pindah' => '2020-03-21',
            'keramba_sebelum'=> '3',
            'keramba_sesudah'=> '4',
            'berat_ikan'=> '3',
            "subproduksi_id"=> '3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksilog')->insert([
            'nama_ikan' => 'Kerapu Macan',
            'panjang_ikan' => '12',
            'jumlah_ikan' => '700',
            'tanggal_cuci' => '2020-08-21',
            'tanggal_pindah' => '2020-04-21',
            'keramba_sebelum'=> '4',
            'keramba_sesudah'=> '5',
            "subproduksi_id"=> '4',
            'berat_ikan'=> '4',
            
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksilog')->insert([
            'nama_ikan' => 'Kerapu Bebek',
            'panjang_ikan' => '14',
            'jumlah_ikan' => '900',
            'tanggal_cuci' => '2020-07-21',
            'tanggal_pindah' => '2020-05-21',
            'keramba_sebelum'=> '5',
            "subproduksi_id"=> '5',
            'keramba_sesudah'=> '1',
            'berat_ikan'=> '5',
            
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksilog')->insert([
            'nama_ikan' => 'Kerapu Bebek',
            'panjang_ikan' => '17',
            'jumlah_ikan' => '800',
            'tanggal_cuci' => '2020-11-21',
            'tanggal_pindah' => '2020-06-21',
            'keramba_sebelum'=> '6',
            'keramba_sesudah'=> '7',
            'berat_ikan'=> '6',
            "subproduksi_id"=> '6',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksilog')->insert([
            'nama_ikan' => 'Kerapu Cantang',
            'panjang_ikan' => '14',
            'jumlah_ikan' => '800',
            'tanggal_cuci' => '2020-09-21',
            'berat_ikan'=> '7',
            'tanggal_pindah' => '2020-07-21',
            'keramba_sebelum'=> '7',
            "subproduksi_id"=> '7',
            'keramba_sesudah'=> '8',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksilog')->insert([
            'nama_ikan' => 'Kerapu Manik',
            'panjang_ikan' => '14',
            'jumlah_ikan' => '700',
            'tanggal_cuci' => '2020-12-21',
            'tanggal_pindah' => '2020-08-21',
            'keramba_sebelum'=> '8',
            "subproduksi_id"=> '8',
            'keramba_sesudah'=> '9',
            'berat_ikan'=> '8',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksilog')->insert([
            'nama_ikan' => 'Kerapu Macan',
            'panjang_ikan' => '12',
            'jumlah_ikan' => '700',
            'tanggal_cuci' => '2020-10-21',
            'tanggal_pindah' => '2020-09-21',
            'keramba_sebelum'=> '9',
            "subproduksi_id"=> '9',
            'keramba_sesudah'=> '10',
            'berat_ikan'=> '9',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksilog')->insert([
            'nama_ikan' => 'Kerapu Cantang',
            'panjang_ikan' => '13',
            'jumlah_ikan' => '800',
            'tanggal_cuci' => '2020-10-21',
            'tanggal_pindah' => '2020-10-21',
            'keramba_sebelum'=> '10',
            'keramba_sesudah'=> '6',
            "subproduksi_id"=> '10',
            'berat_ikan'=> '10',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksilog')->insert([
            'nama_ikan' => 'Kerapu Bebek',
            'panjang_ikan' => '12',
            'jumlah_ikan' => '700',
            'tanggal_cuci' => '2020-05-21',
            'tanggal_pindah' => '2020-11-21',
            'keramba_sebelum'=> '11',
            "subproduksi_id"=> '11',
            'keramba_sesudah'=> '12',
            'berat_ikan'=> '11',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksilog')->insert([
            'nama_ikan' => 'Kerapu Macan',
            'panjang_ikan' => '14',
            'jumlah_ikan' => '500',
            'tanggal_cuci' => '2020-11-21',
            'tanggal_pindah' => '2020-12-21',
            'keramba_sebelum'=> '12',
            'keramba_sesudah'=> '13',
            "subproduksi_id"=> '12',
            'berat_ikan'=> '12',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksilog')->insert([
            'nama_ikan' => 'Kerapu Cantang',
            'panjang_ikan' => '15',
            'jumlah_ikan' => '900',
            'tanggal_cuci' => '2020-01-22',
            'tanggal_pindah' => '2020-01-22',
            'keramba_sebelum'=> '13',
            'keramba_sesudah'=> '14',
            "subproduksi_id"=> '13',
            'berat_ikan'=> '13',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksilog')->insert([
            'nama_ikan' => 'Kerapu Bebek',
            'panjang_ikan' => '17',
            'jumlah_ikan' => '900',
            'tanggal_cuci' => '2020-12-21',
            'tanggal_pindah' => '2020-02-22',
            'keramba_sebelum'=> '14',
            'keramba_sesudah'=> '15',
            "subproduksi_id"=> '14',
            'berat_ikan'=> '14',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksilog')->insert([
            'nama_ikan' => 'Kerapu Cantang',
            'panjang_ikan' => '14',
            'jumlah_ikan' => '800',
            'tanggal_cuci' => '2020-11-21',
            'tanggal_pindah' => '2020-02-21',
            'keramba_sebelum'=> '15',
            'keramba_sesudah'=> '11',
            "subproduksi_id"=> '15',
            'berat_ikan'=> '15',
            'created_at' => now(),
            'updated_at' => now()
        ]);

       
           
        
    }
}
