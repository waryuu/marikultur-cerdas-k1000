<?php

use Illuminate\Database\Seeder;

class PakanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pakan')->insert([
            'jumlah_pakan' => '80',
            'subproduksi_id' => '1',
            'waktu_pakan' => '2020-08-20 08:50:47',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'jumlah_pakan' => '90',
            'subproduksi_id' => '2',
            'waktu_pakan' => '2020-08-20 08:50:47',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'jumlah_pakan' => '80',
            'subproduksi_id' => '3',
            'waktu_pakan' => '2020-08-20 08:50:47',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'jumlah_pakan' => '70',
            'subproduksi_id' => '4',
            'waktu_pakan' => '2020-08-20 08:50:47',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'jumlah_pakan' => '60',
            'subproduksi_id' => '5',
            'waktu_pakan' => '2020-08-20 08:50:47',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'jumlah_pakan' => '40',
            'subproduksi_id' => '6',
            'waktu_pakan' => '2020-08-20 08:50:47',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'jumlah_pakan' => '40',
            'subproduksi_id' => '7',
            'waktu_pakan' => '2020-08-20 08:50:47',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'jumlah_pakan' => '41',
            'subproduksi_id' => '8',
            'waktu_pakan' => '2020-08-20 08:50:47',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'jumlah_pakan' => '42',
            'subproduksi_id' => '9',
            'waktu_pakan' => '2020-08-20 08:50:47',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'jumlah_pakan' => '45',
            'subproduksi_id' => '10',
            'waktu_pakan' => '2020-08-20 08:50:47',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'jumlah_pakan' => '80',
            'subproduksi_id' => '11',
            'waktu_pakan' => '2020-08-20 08:50:47',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'jumlah_pakan' => '90',
            'subproduksi_id' => '12',
            'waktu_pakan' => '2020-08-20 08:50:47',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'jumlah_pakan' => '100',
            'subproduksi_id' => '13',
            'waktu_pakan' => '2020-08-20 08:50:47',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'jumlah_pakan' => '40',
            'subproduksi_id' => '14',
            'waktu_pakan' => '2020-08-20 08:50:47',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'jumlah_pakan' => '70',
            'waktu_pakan' => '2020-08-20 08:50:47',
            'subproduksi_id' => '15',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
