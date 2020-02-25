<?php

use Illuminate\Database\Seeder;

class KerambaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('keramba')->insert([
            'nama_keramba' => 'Keramba 1',
            'panjang_keramba' => '3',
            'lebar_keramba' => '3',
            'kapasitas_keramba' => '1200',
            'kelompok_id'=> '1',
            'user_id'=>'1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('keramba')->insert([
            'nama_keramba' => 'Keramba 2',
            'panjang_keramba' => '2',
            'lebar_keramba' => '2',
            'kapasitas_keramba' => '1000',
            'kelompok_id'=> '1',
            'user_id'=>'1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('keramba')->insert([
            'nama_keramba' => 'Keramba 3',
            'panjang_keramba' => '3',
            'lebar_keramba' => '3',
            'kapasitas_keramba' => '1500',
            'kelompok_id'=> '1',
            'user_id'=>'1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('keramba')->insert([
            'nama_keramba' => 'Keramba 4',
            'panjang_keramba' => '2',
            'lebar_keramba' => '3',
            'kapasitas_keramba' => '1300',
            'kelompok_id'=> '1',
            'user_id'=>'1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('keramba')->insert([
            'nama_keramba' => 'Keramba 5',
            'panjang_keramba' => '1',
            'lebar_keramba' => '1',
            'kapasitas_keramba' => '900',
            'kelompok_id'=> '1',
            'user_id'=>'1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('keramba')->insert([
            'nama_keramba' => 'Keramba 6',
            'panjang_keramba' => '3',
            'lebar_keramba' => '3',
            'kapasitas_keramba' => '1000',
            'kelompok_id'=> '2',
            'user_id'=>'2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('keramba')->insert([
            'nama_keramba' => 'Keramba 7',
            'panjang_keramba' => '4',
            'lebar_keramba' => '3',
            'kapasitas_keramba' => '1500',
            'kelompok_id'=> '2',
            'user_id'=>'2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('keramba')->insert([
            'nama_keramba' => 'Keramba 8',
            'panjang_keramba' => '2',
            'lebar_keramba' => '1',
            'kapasitas_keramba' => '800',
            'kelompok_id'=> '2',
            'user_id'=>'2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('keramba')->insert([
            'nama_keramba' => 'Keramba 9',
            'panjang_keramba' => '3',
            'lebar_keramba' => '3',
            'kapasitas_keramba' => '1200',
            'kelompok_id'=> '2',
            'user_id'=>'2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('keramba')->insert([
            'nama_keramba' => 'Keramba 10',
            'panjang_keramba' => '3',
            'lebar_keramba' => '3',
            'kapasitas_keramba' => '800',
            'kelompok_id'=> '2',
            'user_id'=>'2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('keramba')->insert([
            'nama_keramba' => 'Keramba 11',
            'panjang_keramba' => '3',
            'lebar_keramba' => '4',
            'kapasitas_keramba' => '800',
            'kelompok_id'=> '3',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('keramba')->insert([
            'nama_keramba' => 'Keramba 12',
            'panjang_keramba' => '2',
            'lebar_keramba' => '2',
            'kapasitas_keramba' => '700',
            'kelompok_id'=> '3',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('keramba')->insert([
            'nama_keramba' => 'Keramba 13',
            'panjang_keramba' => '5',
            'lebar_keramba' => '5',
            'kapasitas_keramba' => '2000',
            'kelompok_id'=> '3',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('keramba')->insert([
            'nama_keramba' => 'Keramba 14',
            'panjang_keramba' => '5',
            'lebar_keramba' => '3',
            'kapasitas_keramba' => '1200',
            'kelompok_id'=> '3',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('keramba')->insert([
            'nama_keramba' => 'Keramba 15',
            'panjang_keramba' => '2',
            'lebar_keramba' => '1',
            'kapasitas_keramba' => '900',
            'kelompok_id'=> '3',
            'user_id'=>'3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
      
    }
}
