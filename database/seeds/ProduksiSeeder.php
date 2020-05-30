<?php

use Illuminate\Database\Seeder;

class ProduksiSeeder extends Seeder
{
    public function run()
    {
        DB::table('produksi')->insert([
            'nama_ikan' => 'Kerapu Cantang',
            'panjang_ikan' => '12',
            'jumlah_ikan' => '700',
            'jumlah_subproduksi' => '1',
            'tanggal_tebar' => '2020-09-20',
            'berat_ikan' => '10',
            'kelompok_id'=>'1',
            'keramba_id'=> '1',
            // 'status_panen'=>'Panen',
            'user_id'=>'1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('produksi')->insert([
            'nama_ikan' => 'Kerapu Macan',
            'panjang_ikan' => '13',
            'jumlah_ikan' => '800',
            'jumlah_subproduksi' => '1',
            'tanggal_tebar' => '2020-07-21',
            'berat_ikan' => '10',
            'keramba_id'=> '2',
            'kelompok_id'=>'1',
            'user_id'=>'1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('produksi')->insert([
            'nama_ikan' => 'Kerapu Cantang',
            'panjang_ikan' => '14',
            'jumlah_ikan' => '300',
            'jumlah_subproduksi' => '1',
            'tanggal_tebar' => '2020-01-20',
            'berat_ikan' => '10',
            'keramba_id'=> '3',
            'user_id'=>'1',
            'kelompok_id'=>'1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('produksi')->insert([
            'nama_ikan' => 'Kerapu Macan',
            'panjang_ikan' => '13',
            'jumlah_ikan' => '400',
            'jumlah_subproduksi' => '1',
            'tanggal_tebar' => '2020-02-22',
            'berat_ikan' => '10',
            // 'status_panen'=>'Panen',
            'keramba_id'=> '4',
            'user_id'=>'1',
            'kelompok_id'=>'1',
            // 'tanggal_panen'=>'2020-12-15',
            // 'panjang_ikan_akhir' => '13',
            // 'jumlah_ikan_akhir' => '200',
            // 'berat_ikan_akhir' => '20',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('produksi')->insert([
            'nama_ikan' => 'Kerapu Bebek',
            'panjang_ikan' => '16',
            'jumlah_ikan' => '900',
            'jumlah_subproduksi' => '1',
            'tanggal_tebar' => '2020-03-20',
            'berat_ikan' => '10',
            // 'status_panen'=>'Panen',
            'keramba_id'=> '5',
            'user_id'=>'1',
            'kelompok_id'=>'1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('produksi')->insert([
            'nama_ikan' => 'Kerapu Bebek',
            'panjang_ikan' => '13',
            'jumlah_ikan' => '700',
            'jumlah_subproduksi' => '1',
            'tanggal_tebar' => '2020-06-20',
            'berat_ikan' => '10',
            'keramba_id'=> '6',
            'kelompok_id'=>'2',
            'user_id'=>'2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('produksi')->insert([
            'nama_ikan' => 'Kerapu Cantang',
            'panjang_ikan' => '15',
            'jumlah_ikan' => '600',
            'jumlah_subproduksi' => '1',
            'tanggal_tebar' => '2020-10-20',
            'berat_ikan' => '10',
            'keramba_id'=> '7',
            'kelompok_id'=>'2',
            'user_id'=>'2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('produksi')->insert([
            'nama_ikan' => 'Kerapu Manik',
            'panjang_ikan' => '16',
            'jumlah_ikan' => '700',
            'jumlah_subproduksi' => '1',
            'tanggal_tebar' => '2020-07-20',
            'berat_ikan' => '10',
            'keramba_id'=> '8',
            'user_id'=>'2',
            'kelompok_id'=>'2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('produksi')->insert([
            'nama_ikan' => 'Kerapu Macan',
            'panjang_ikan' => '13',
            'jumlah_ikan' => '500',
            'jumlah_subproduksi' => '1',
            'tanggal_tebar' => '2020-06-20',
            'berat_ikan' => '10',
            'keramba_id'=> '9',
            'kelompok_id'=>'2',
            'user_id'=>'2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('produksi')->insert([
            'nama_ikan' => 'Kerapu Cantang',
            'panjang_ikan' => '13',
            'jumlah_ikan' => '1000',
            'jumlah_subproduksi' => '1',
            'tanggal_tebar' => '2020-04-20',
            'berat_ikan' => '10',
            'keramba_id'=> '10',
            'kelompok_id'=>'2',
            'user_id'=>'2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('produksi')->insert([
            'nama_ikan' => 'Kerapu Bebek',
            'panjang_ikan' => '12',
            'jumlah_ikan' => '600',
            'jumlah_subproduksi' => '1',
            'tanggal_tebar' => '2020-05-20',
            'berat_ikan' => '15',
            'keramba_id'=> '11',
            'kelompok_id'=>'3',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('produksi')->insert([
            'nama_ikan' => 'Kerapu Macan',
            'panjang_ikan' => '14',
            'jumlah_ikan' => '700',
            'jumlah_subproduksi' => '1',
            'tanggal_tebar' => '2020-08-20',
            'berat_ikan' => '13',
            'keramba_id'=> '12',
            'kelompok_id'=>'3',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('produksi')->insert([
            'nama_ikan' => 'Kerapu Cantang',
            'panjang_ikan' => '15',
            'jumlah_ikan' => '600',
            'jumlah_subproduksi' => '1',
            'tanggal_tebar' => '2020-03-20',
            'berat_ikan' => '13',
            'keramba_id'=> '13',
            'kelompok_id'=>'3',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('produksi')->insert([
            'nama_ikan' => 'Kerapu Bebek',
            'panjang_ikan' => '13',
            'jumlah_ikan' => '900',
            'jumlah_subproduksi' => '1',
            'tanggal_tebar' => '2020-10-20',
            'berat_ikan' => '20',
            'keramba_id'=> '14',
            'user_id'=>'3',
            'kelompok_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('produksi')->insert([
            'nama_ikan' => 'Kerapu Cantang',
            'panjang_ikan' => '13',
            'jumlah_ikan' => '700',
            'jumlah_subproduksi' => '1',
            'tanggal_tebar' => '2020-08-20',
            'berat_ikan' => '15',
            'keramba_id'=> '15',
            'kelompok_id'=>'3',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);

    }
}
