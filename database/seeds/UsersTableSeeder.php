<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Dodi',
            'email' => 'admin@admin.com',
            'email_verified_at' => now(),
            'password' => bcrypt('123123'),
            'status' => 'admin',
            'kelompok_id' => '1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('users')->insert([
            'name' => 'Umar',
            'email' => 'ketua@ketua.com',
            'email_verified_at' => now(),
            'password' => bcrypt('123123'),
            'status' => 'ketua',
            'kelompok_id' => '1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('users')->insert([
            'name' => 'Marzuki',
            'email' => 'anggota@anggota.com',
            'email_verified_at' => now(),
            'password' => bcrypt('123123'),
            'status' => 'user',
            'kelompok_id' => '1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
     }
}
