<?php

use Illuminate\Database\Seeder;

class SensorDoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sensor_do')->insert([
            'do_air' => '30',
            'keramba_id' => '1',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_do')->insert([
            'do_air' => '40',
            'keramba_id' => '2',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_do')->insert([
            'do_air' => '50',
            'keramba_id' => '3',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_do')->insert([
            'do_air' => '30',
            'keramba_id' => '4',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_do')->insert([
            'do_air' => '20',
            'keramba_id' => '5',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_do')->insert([
            'do_air' => '20',
            'keramba_id' => '6',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_do')->insert([
            'do_air' => '27',
            'keramba_id' => '7',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_do')->insert([
            'do_air' => '28',
            'keramba_id' => '8',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_do')->insert([
            'do_air' => '30',
            'keramba_id' => '9',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_do')->insert([
            'do_air' => '35',
            'keramba_id' => '10',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_do')->insert([
            'do_air' => '37',
            'keramba_id' => '11',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_do')->insert([
            'do_air' => '38',
            'keramba_id' => '12',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_do')->insert([
            'do_air' => '27',
            'keramba_id' => '13',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_do')->insert([
            'do_air' => '28',
            'keramba_id' => '14',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_do')->insert([
            'do_air' => '30',
            'keramba_id' => '15',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
