<?php

use Illuminate\Database\Seeder;

class PemindahanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pemindahan')->insert([
            'panjang_ikan' => '13',
            'jumlah_ikan' => '700',
            'tanggal_pindah' => '2020/09/21',
            'berat_ikan' => '10',
            'keramba_sebelum'=> '1',
            'keramba_sesudah'=> '2',
            'produksi_id'=>'1',
            'user_id'=>'1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pemindahan')->insert([
            'panjang_ikan' => '14',
            'jumlah_ikan' => '800',
            'tanggal_pindah' => '2020/10/21',
            'keramba_sebelum'=> '2',
            'berat_ikan' => '10',
            'keramba_sesudah'=> '3',
            'produksi_id'=>'2',
            'user_id'=>'1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pemindahan')->insert([
            'panjang_ikan' => '14',
            'jumlah_ikan' => '800',
            'tanggal_pindah' => '2020/10/21',
            'keramba_sebelum'=> '3',
            'berat_ikan' => '10',
            'keramba_sesudah'=> '4',
            'produksi_id'=>'3',
            'user_id'=>'1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pemindahan')->insert([
            'panjang_ikan' => '12',
            'jumlah_ikan' => '700',
            'tanggal_pindah' => '2020/08/21',
            'keramba_sebelum'=> '4',
            'keramba_sesudah'=> '5',
            'berat_ikan' => '10',
            'produksi_id'=>'4',
            'user_id'=>'1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pemindahan')->insert([
            'panjang_ikan' => '14',
            'jumlah_ikan' => '900',
            'tanggal_pindah' => '2020/07/21',
            'keramba_sebelum'=> '5',
            'keramba_sesudah'=> '1',
            'produksi_id'=>'5',
            'berat_ikan' => '12',
            'user_id'=>'1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pemindahan')->insert([
            'panjang_ikan' => '17',
            'jumlah_ikan' => '800',
            'tanggal_pindah' => '2020/11/21',
            'keramba_sebelum'=> '2',
            'berat_ikan' => '13',
            'keramba_sesudah'=> '3',
            'produksi_id'=>'6',
            'user_id'=>'2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pemindahan')->insert([
            'panjang_ikan' => '14',
            'jumlah_ikan' => '800',
            'tanggal_pindah' => '2020/09/21',
            'keramba_sebelum'=> '3',
            'berat_ikan' => '14',
            'keramba_sesudah'=> '4',
            'produksi_id'=>'7',
            'user_id'=>'2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pemindahan')->insert([
            'panjang_ikan' => '14',
            'jumlah_ikan' => '700',
            'tanggal_pindah' => '2020/12/21',
            'keramba_sebelum'=> '4',
            'berat_ikan' => '15',
            'keramba_sesudah'=> '5',
            'produksi_id'=>'8',
            'user_id'=>'2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pemindahan')->insert([
            'panjang_ikan' => '12',
            'jumlah_ikan' => '700',
            'tanggal_pindah' => '2020/10/21',
            'keramba_sebelum'=> '5',
            'berat_ikan' => '14',
            'keramba_sesudah'=> '1',
            'produksi_id'=>'9',
            'user_id'=>'2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pemindahan')->insert([
            'panjang_ikan' => '13',
            'jumlah_ikan' => '800',
            'tanggal_pindah' => '2020/04/21',
            'keramba_sebelum'=> '1',
            'keramba_sesudah'=> '2',
            'berat_ikan' => '12',
            'produksi_id'=>'10',
            'user_id'=>'2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pemindahan')->insert([
            'panjang_ikan' => '12',
            'jumlah_ikan' => '700',
            'tanggal_pindah' => '2020/05/21',
            'keramba_sebelum'=> '3',
            'keramba_sesudah'=> '2',
            'berat_ikan' => '11',
            'produksi_id'=>'11',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pemindahan')->insert([
            'panjang_ikan' => '14',
            'jumlah_ikan' => '500',
            'tanggal_pindah' => '2020/11/21',
            'keramba_sebelum'=> '2',
            'berat_ikan' => '10',
            'keramba_sesudah'=> '1',
            'produksi_id'=>'12',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pemindahan')->insert([
            'panjang_ikan' => '15',
            'jumlah_ikan' => '900',
            'tanggal_pindah' => '2020/11/21',
            'keramba_sebelum'=> '1',
            'berat_ikan' => '10',
            'keramba_sesudah'=> '5',
            'produksi_id'=>'13',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pemindahan')->insert([
            'panjang_ikan' => '17',
            'jumlah_ikan' => '900',
            'tanggal_pindah' => '2020/12/21',
            'keramba_sebelum'=> '5',
            'berat_ikan' => '13',
            'keramba_sesudah'=> '4',
            'produksi_id'=>'14',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pemindahan')->insert([
            'panjang_ikan' => '14',
            'jumlah_ikan' => '800',
            'tanggal_pindah' => '2020/11/21',
            'keramba_sebelum'=> '4',
            'berat_ikan' => '15',
            'keramba_sesudah'=> '3',
            'produksi_id'=>'15',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
