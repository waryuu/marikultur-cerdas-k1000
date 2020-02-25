<?php

use Illuminate\Database\Seeder;

class KelompokSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('kelompok')->insert([
            'nama_kelompok' => 'Sea Fast',
            'ketua_kelompok' => 'Umar',
            'bendahara_kelompok' => 'Marzuki',
            'humas_kelompok' => 'Dodi',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelompok')->insert([
            'nama_kelompok' => 'Sea Turtle',
            'ketua_kelompok' => 'Basuki',
            'bendahara_kelompok' => 'Purnama',
            'humas_kelompok' => 'Dadang',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelompok')->insert([
            'nama_kelompok' => 'Kerapu Juara',
            'ketua_kelompok' => 'Maliki',
            'bendahara_kelompok' => 'Wicak',
            'humas_kelompok' => 'Reyhan',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelompok')->insert([
            'nama_kelompok' => 'Hujan Badai',
            'ketua_kelompok' => 'Asep',
            'bendahara_kelompok' => 'Fadil',
            'humas_kelompok' => 'Yusuf',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelompok')->insert([
            'nama_kelompok' => 'Kelompok Laut',
            'ketua_kelompok' => 'Dudung',
            'bendahara_kelompok' => 'Wawan',
            'humas_kelompok' => 'Doni',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelompok')->insert([
            'nama_kelompok' => 'Anti Parasit',
            'ketua_kelompok' => 'Dilo',
            'bendahara_kelompok' => 'Feter',
            'humas_kelompok' => 'Willyam',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelompok')->insert([
            'nama_kelompok' => 'Sea Wave',
            'ketua_kelompok' => 'Dani',
            'bendahara_kelompok' => 'Akbar',
            'humas_kelompok' => 'Devin',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelompok')->insert([
            'nama_kelompok' => 'Laut Indah',
            'ketua_kelompok' => 'Mulyana',
            'bendahara_kelompok' => 'Darmawan',
            'humas_kelompok' => 'Baswedan',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelompok')->insert([
            'nama_kelompok' => 'Senja Timur',
            'ketua_kelompok' => 'Denis',
            'bendahara_kelompok' => 'Dandi',
            'humas_kelompok' => 'Malik',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelompok')->insert([
            'nama_kelompok' => 'Merona Timur',
            'ketua_kelompok' => 'Didin',
            'bendahara_kelompok' => 'Sulaiman',
            'humas_kelompok' => 'Naufal',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelompok')->insert([
            'nama_kelompok' => 'Senja Barat',
            'ketua_kelompok' => 'Yusuf',
            'bendahara_kelompok' => 'Dori',
            'humas_kelompok' => 'Meta',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelompok')->insert([
            'nama_kelompok' => 'Seribu Indah',
            'ketua_kelompok' => 'Anies',
            'bendahara_kelompok' => 'Fauzi',
            'humas_kelompok' => 'Bowo',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelompok')->insert([
            'nama_kelompok' => 'Pulau Harapan',
            'ketua_kelompok' => 'Cahya',
            'bendahara_kelompok' => 'Yadi',
            'humas_kelompok' => 'Hafiz',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelompok')->insert([
            'nama_kelompok' => 'Sea Law',
            'ketua_kelompok' => 'Hafid',
            'bendahara_kelompok' => 'Hadid',
            'humas_kelompok' => 'Horatio',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelompok')->insert([
            'nama_kelompok' => 'Alam Jakarta',
            'ketua_kelompok' => 'Tama',
            'bendahara_kelompok' => 'Alif',
            'humas_kelompok' => 'Ridwan',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
