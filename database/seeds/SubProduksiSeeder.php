<?php

use Illuminate\Database\Seeder;

class SubProduksiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('subproduksi')->insert([
            'nama_ikan' => 'Kerapu Cantang',
            // 'panjang_ikan' => '13',
            'jumlah_ikan' => '700',
            // 'tanggal_cuci' => '2020-01-21',
            // 'tanggal_pindah' => '2020-01-21',
            // 'keramba_sebelum'=> '1',
            // 'keramba_sesudah'=> '2',
            // 'berat_ikan'=> '1',
            'produksi_id'=>'1',
            // 'user_id'=>'1',
            'tanggal_panen'=>'2020-12-20',
            'status_panen'=>'Panen',
            'panjang_ikan_akhir' => '15',
            'jumlah_ikan_akhir' => '200',
            'berat_ikan_akhir' => '20',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksi')->insert([
            'nama_ikan' => 'Kerapu Macan',
            // 'panjang_ikan' => '14',
            'jumlah_ikan' => '500',
            // 'tanggal_cuci' => '2020-10-21',
            // 'berat_ikan'=> '2',
            // 'tanggal_pindah' => '2020-02-21',
            // 'keramba_sebelum'=> '2',
            // 'keramba_sesudah'=> '3',
            'produksi_id'=>'2',
            // 'user_id'=>'1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksi')->insert([
            'nama_ikan' => 'Kerapu Cantang',
            // 'panjang_ikan' => '14',
            'jumlah_ikan' => '800',
            // 'tanggal_cuci' => '2020-10-21',
            // 'tanggal_pindah' => '2020-03-21',
            // 'keramba_sebelum'=> '3',
            // 'keramba_sesudah'=> '4',
            // 'berat_ikan'=> '3',
            'produksi_id'=>'3',
            // 'user_id'=>'1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksi')->insert([
            'nama_ikan' => 'Kerapu Macan',
            // 'panjang_ikan' => '12',
            'jumlah_ikan' => '700',
            // 'tanggal_cuci' => '2020-08-21',
            // 'tanggal_pindah' => '2020-04-21',
            // 'keramba_sebelum'=> '4',
            // 'keramba_sesudah'=> '5',
            // 'berat_ikan'=> '4',
            'produksi_id'=>'4',
            // 'user_id'=>'1',
            'tanggal_panen'=>'2020-12-20',
            'status_panen'=>'Panen',
            'panjang_ikan_akhir' => '15',
            'jumlah_ikan_akhir' => '200',
            'berat_ikan_akhir' => '20',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksi')->insert([
            'nama_ikan' => 'Kerapu Bebek',
            // 'panjang_ikan' => '14',
            'jumlah_ikan' => '900',
            // 'tanggal_cuci' => '2020-07-21',
            // 'tanggal_pindah' => '2020-05-21',
            // 'keramba_sebelum'=> '5',
            // 'keramba_sesudah'=> '1',
            // 'berat_ikan'=> '5',
            'produksi_id'=>'5',
            // 'user_id'=>'1',
             'tanggal_panen'=>'2020-12-15',
            'status_panen'=>'Panen',
            'panjang_ikan_akhir' => '15',
            'jumlah_ikan_akhir' => '200',
            'berat_ikan_akhir' => '20',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksi')->insert([
            'nama_ikan' => 'Kerapu Bebek',
            // 'panjang_ikan' => '17',
            'jumlah_ikan' => '800',
            // 'tanggal_cuci' => '2020-11-21',
            // 'tanggal_pindah' => '2020-06-21',
            // 'keramba_sebelum'=> '6',
            // 'keramba_sesudah'=> '7',
            // 'berat_ikan'=> '6',
            'produksi_id'=>'6',
            // 'user_id'=>'2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksi')->insert([
            'nama_ikan' => 'Kerapu Cantang',
            // 'panjang_ikan' => '14',
            'jumlah_ikan' => '800',
            // 'tanggal_cuci' => '2020-09-21',
            // 'berat_ikan'=> '7',
            'produksi_id'=>'7',
            // 'tanggal_pindah' => '2020-07-21',
            // 'keramba_sebelum'=> '7',
            // 'keramba_sesudah'=> '8',
            // 'user_id'=>'2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksi')->insert([
            'nama_ikan' => 'Kerapu Manik',
            // 'panjang_ikan' => '14',
            'jumlah_ikan' => '700',
            // 'tanggal_cuci' => '2020-12-21',
            // 'tanggal_pindah' => '2020-08-21',
            // 'keramba_sebelum'=> '8',
            // 'keramba_sesudah'=> '9',
            // 'berat_ikan'=> '8',
            'produksi_id'=>'8',
            // 'user_id'=>'2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksi')->insert([
            'nama_ikan' => 'Kerapu Macan',
            // 'panjang_ikan' => '12',
            'jumlah_ikan' => '700',
            // 'tanggal_cuci' => '2020-10-21',
            // 'tanggal_pindah' => '2020-09-21',
            // 'keramba_sebelum'=> '9',
            // 'keramba_sesudah'=> '10',
            // 'berat_ikan'=> '9',
            'produksi_id'=>'9',
            // 'user_id'=>'2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksi')->insert([
            'nama_ikan' => 'Kerapu Cantang',
            // 'panjang_ikan' => '13',
            'jumlah_ikan' => '800',
            // 'tanggal_cuci' => '2020-10-21',
            // 'tanggal_pindah' => '2020-10-21',
            // 'keramba_sebelum'=> '10',
            // 'keramba_sesudah'=> '6',
            // 'berat_ikan'=> '10',
            'produksi_id'=>'10',
            // 'user_id'=>'2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksi')->insert([
            'nama_ikan' => 'Kerapu Bebek',
            // 'panjang_ikan' => '12',
            'jumlah_ikan' => '700',
            // 'tanggal_cuci' => '2020-05-21',
            // 'tanggal_pindah' => '2020-11-21',
            // 'keramba_sebelum'=> '11',
            // 'keramba_sesudah'=> '12',
            // 'berat_ikan'=> '11',
            'produksi_id'=>'11',
            // 'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksi')->insert([
            'nama_ikan' => 'Kerapu Macan',
            // 'panjang_ikan' => '14',
            'jumlah_ikan' => '500',
            // 'tanggal_cuci' => '2020-11-21',
            // 'tanggal_pindah' => '2020-12-21',
            // 'keramba_sebelum'=> '12',
            // 'keramba_sesudah'=> '13',
            // 'berat_ikan'=> '12',
            'produksi_id'=>'12',
            // 'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksi')->insert([
            'nama_ikan' => 'Kerapu Cantang',
            // 'panjang_ikan' => '15',
            'jumlah_ikan' => '900',
            // 'tanggal_cuci' => '2020-01-22',
            // 'tanggal_pindah' => '2020-01-22',
            // 'keramba_sebelum'=> '13',
            // 'keramba_sesudah'=> '14',
            // 'berat_ikan'=> '13',
            'produksi_id'=>'13',
            // 'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksi')->insert([
            'nama_ikan' => 'Kerapu Bebek',
            // 'panjang_ikan' => '17',
            'jumlah_ikan' => '900',
            // 'tanggal_cuci' => '2020-12-21',
            // 'tanggal_pindah' => '2020-02-22',
            // 'keramba_sebelum'=> '14',
            // 'keramba_sesudah'=> '15',
            // 'berat_ikan'=> '14',
            'produksi_id'=>'14',
            // 'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('subproduksi')->insert([
            'nama_ikan' => 'Kerapu Cantang',
            // 'panjang_ikan' => '14',
            'jumlah_ikan' => '800',
            // 'tanggal_cuci' => '2020-11-21',
            // 'tanggal_pindah' => '2020-02-21',
            // 'keramba_sebelum'=> '15',
            // 'keramba_sesudah'=> '11',
            // 'berat_ikan'=> '15',
            'produksi_id'=>'15',
            // 'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
