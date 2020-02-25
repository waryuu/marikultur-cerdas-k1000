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
            'baterai_pakan' => '80',
            'keramba_id' => '1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'baterai_pakan' => '90',
            'keramba_id' => '2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'baterai_pakan' => '80',
            'keramba_id' => '3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'baterai_pakan' => '70',
            'keramba_id' => '4',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'baterai_pakan' => '60',
            'keramba_id' => '5',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'baterai_pakan' => '40',
            'keramba_id' => '6',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'baterai_pakan' => '40',
            'keramba_id' => '7',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'baterai_pakan' => '41',
            'keramba_id' => '8',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'baterai_pakan' => '42',
            'keramba_id' => '9',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'baterai_pakan' => '45',
            'keramba_id' => '10',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'baterai_pakan' => '80',
            'keramba_id' => '11',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'baterai_pakan' => '90',
            'keramba_id' => '12',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'baterai_pakan' => '100',
            'keramba_id' => '13',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'baterai_pakan' => '40',
            'keramba_id' => '14',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('pakan')->insert([
            'baterai_pakan' => '70',
            'keramba_id' => '15',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
