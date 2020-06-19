<?php

use Illuminate\Database\Seeder;

class NamaikanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('nama_ikan')->insert([
            'nama_ikan' => 'Kerapu Cantang',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('nama_ikan')->insert([
            'nama_ikan' => 'Kerapu Macan',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('nama_ikan')->insert([
            'nama_ikan' => 'Kerapu Bebek',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('nama_ikan')->insert([
            'nama_ikan' => 'Kerapu Batik',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('nama_ikan')->insert([
            'nama_ikan' => 'Kerapu Kertang',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('nama_ikan')->insert([
            'nama_ikan' => 'Kerapu Lumpur',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('nama_ikan')->insert([
            'nama_ikan' => 'Kerapu Muara/Balong',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('nama_ikan')->insert([
            'nama_ikan' => 'Kerapu Tikus',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('nama_ikan')->insert([
            'nama_ikan' => 'Kerapu Merah',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('nama_ikan')->insert([
            'nama_ikan' => 'Kerapu Lodi',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('nama_ikan')->insert([
            'nama_ikan' => 'Kerapu Kustang',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('nama_ikan')->insert([
            'nama_ikan' => 'Udang',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('nama_ikan')->insert([
            'nama_ikan' => 'Kakap',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('nama_ikan')->insert([
            'nama_ikan' => 'Bawal',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
