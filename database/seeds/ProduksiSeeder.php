<?php

use Illuminate\Database\Seeder;

class ProduksiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('produksi')->insert([
            'nama_ikan' => 'Kerapu Cantang',
            'panjang_ikan' => '12',
            'jumlah_ikan' => '700',
            'tanggal_tebar' => '2020/09/20',
            'tanggal_cuci' => '2020/10/21',
            'tanggal_pindah' => '2020/11/12',
            'tanggal_panen' => '2020/12/11',
            'kelompok_id'=>'1',
            'keramba_id'=> '1',
            'user_id'=>'1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('produksi')->insert([
            'nama_ikan' => 'Kerapu Macan',
            'panjang_ikan' => '13',
            'jumlah_ikan' => '800',
            'tanggal_tebar' => '2020/07/21',
            'tanggal_cuci' => '2020/08/23',
            'tanggal_pindah' => '2020/09/11',
            'tanggal_panen' => '2020/10/14',
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
            'tanggal_tebar' => '2020/01/20',
            'tanggal_cuci' => '2020/02/21',
            'tanggal_pindah' => '2020/03/12',
            'tanggal_panen' => '2020/04/11',
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
            'tanggal_tebar' => '2020/02/22',
            'tanggal_cuci' => '2020/03/21',
            'tanggal_pindah' => '2020/04/12',
            'tanggal_panen' => '2020/05/11',
            'keramba_id'=> '4',
            'user_id'=>'1',
            'kelompok_id'=>'1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('produksi')->insert([
            'nama_ikan' => 'Kerapu Bebek',
            'panjang_ikan' => '16',
            'jumlah_ikan' => '900',
            'tanggal_tebar' => '2020/03/20',
            'tanggal_cuci' => '2020/04/21',
            'tanggal_pindah' => '2020/05/12',
            'tanggal_panen' => '2020/06/11',
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
            'tanggal_tebar' => '2020/06/20',
            'tanggal_cuci' => '2020/07/21',
            'tanggal_pindah' => '2020/08/12',
            'tanggal_panen' => '2020/09/11',
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
            'tanggal_tebar' => '2020/10/20',
            'tanggal_cuci' => '2020/11/21',
            'tanggal_pindah' => '2020/11/12',
            'tanggal_panen' => '2020/12/11',
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
            'tanggal_tebar' => '2020/07/20',
            'tanggal_cuci' => '2020/08/21',
            'tanggal_pindah' => '2020/09/12',
            'tanggal_panen' => '2020/10/11',
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
            'tanggal_tebar' => '2020/06/20',
            'tanggal_cuci' => '2020/07/21',
            'tanggal_pindah' => '2020/08/12',
            'tanggal_panen' => '2020/09/11',
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
            'tanggal_tebar' => '2020/04/20',
            'tanggal_cuci' => '2020/05/21',
            'tanggal_pindah' => '2020/06/12',
            'tanggal_panen' => '2020/07/11',
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
            'tanggal_tebar' => '2020/05/20',
            'tanggal_cuci' => '2020/06/21',
            'tanggal_pindah' => '2020/07/12',
            'tanggal_panen' => '2020/08/11',
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
            'tanggal_tebar' => '2020/08/20',
            'tanggal_cuci' => '2020/09/21',
            'tanggal_pindah' => '2020/10/12',
            'tanggal_panen' => '2020/12/11',
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
            'tanggal_tebar' => '2020/03/20',
            'tanggal_cuci' => '2020/04/21',
            'tanggal_pindah' => '2020/05/12',
            'tanggal_panen' => '2020/06/11',
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
            'tanggal_tebar' => '2020/10/20',
            'tanggal_cuci' => '2020/10/21',
            'tanggal_pindah' => '2020/11/12',
            'tanggal_panen' => '2020/12/11',
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
            'tanggal_tebar' => '2020/08/20',
            'tanggal_cuci' => '2020/09/21',
            'tanggal_pindah' => '2020/10/12',
            'tanggal_panen' => '2020/11/11',
            'keramba_id'=> '15',
            'kelompok_id'=>'3',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        
    }
}