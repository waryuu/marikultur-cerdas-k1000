<?php

use Illuminate\Database\Seeder;

class PencucianSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pencucian')->insert([
            'panjang_ikan' => '13',
            'jumlah_ikan' => '700',
            'tanggal_cuci' => '2020/09/21',
            'keramba_id'=> '1',
            'produksi_id'=>'1',
            'user_id'=>'1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pencucian')->insert([
            'panjang_ikan' => '14',
            'jumlah_ikan' => '800',
            'tanggal_cuci' => '2020/10/21',
            'keramba_id'=> '2',
            'produksi_id'=>'2',
            'user_id'=>'2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pencucian')->insert([
            'panjang_ikan' => '14',
            'jumlah_ikan' => '800',
            'tanggal_cuci' => '2020/10/21',
            'keramba_id'=> '4',
            'produksi_id'=>'4',
            'user_id'=>'1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pencucian')->insert([
            'panjang_ikan' => '12',
            'jumlah_ikan' => '700',
            'tanggal_cuci' => '2020/08/21',
            'keramba_id'=> '5',
            'produksi_id'=>'5',
            'user_id'=>'1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pencucian')->insert([
            'panjang_ikan' => '14',
            'jumlah_ikan' => '900',
            'tanggal_cuci' => '2020/07/21',
            'keramba_id'=> '3',
            'produksi_id'=>'3',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pencucian')->insert([
            'panjang_ikan' => '17',
            'jumlah_ikan' => '800',
            'tanggal_cuci' => '2020/11/21',
            'keramba_id'=> '3',
            'produksi_id'=>'3',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pencucian')->insert([
            'panjang_ikan' => '14',
            'jumlah_ikan' => '800',
            'tanggal_cuci' => '2020/09/21',
            'keramba_id'=> '3',
            'produksi_id'=>'3',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pencucian')->insert([
            'panjang_ikan' => '14',
            'jumlah_ikan' => '700',
            'tanggal_cuci' => '2020/12/21',
            'keramba_id'=> '4',
            'produksi_id'=>'4',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pencucian')->insert([
            'panjang_ikan' => '12',
            'jumlah_ikan' => '700',
            'tanggal_cuci' => '2020/10/21',
            'keramba_id'=> '4',
            'produksi_id'=>'3',
            'user_id'=>'2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pencucian')->insert([
            'panjang_ikan' => '13',
            'jumlah_ikan' => '800',
            'tanggal_cuci' => '2020/04/21',
            'keramba_id'=> '3',
            'produksi_id'=>'3',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pencucian')->insert([
            'panjang_ikan' => '12',
            'jumlah_ikan' => '700',
            'tanggal_cuci' => '2020/05/21',
            'keramba_id'=> '3',
            'produksi_id'=>'3',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pencucian')->insert([
            'panjang_ikan' => '14',
            'jumlah_ikan' => '500',
            'tanggal_cuci' => '2020/11/21',
            'keramba_id'=> '3',
            'produksi_id'=>'4',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pencucian')->insert([
            'panjang_ikan' => '15',
            'jumlah_ikan' => '900',
            'tanggal_cuci' => '2020/11/21',
            'keramba_id'=> '2',
            'produksi_id'=>'3',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pencucian')->insert([
            'panjang_ikan' => '17',
            'jumlah_ikan' => '900',
            'tanggal_cuci' => '2020/12/21',
            'keramba_id'=> '3',
            'produksi_id'=>'3',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pencucian')->insert([
            'panjang_ikan' => '14',
            'jumlah_ikan' => '800',
            'tanggal_cuci' => '2020/11/21',
            'keramba_id'=> '3',
            'produksi_id'=>'3',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
