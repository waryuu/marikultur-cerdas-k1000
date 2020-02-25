<?php

use Illuminate\Database\Seeder;

class SensorWaveSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sensor_wave')->insert([
            'time' => '12:00:00',
            'date' => '2020/01/01',
            'ketinggian_air' => '80',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wave')->insert([
            'time' => '13:00:00',
            'date' => '2020/02/01',
            'ketinggian_air' => '70',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wave')->insert([
            'time' => '14:00:00',
            'date' => '2020/03/01',
            'ketinggian_air' => '80',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wave')->insert([
            'time' => '15:00:00',
            'date' => '2020/03/01',
            'ketinggian_air' => '90',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wave')->insert([
            'time' => '13:00:00',
            'date' => '2020/04/01',
            'ketinggian_air' => '70',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wave')->insert([
            'time' => '14:00:00',
            'date' => '2020/05/01',
            'ketinggian_air' => '80',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wave')->insert([
            'time' => '13:00:00',
            'date' => '2020/06/01',
            'ketinggian_air' => '40',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wave')->insert([
            'time' => '14:00:00',
            'date' => '2020/12/01',
            'ketinggian_air' => '80',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wave')->insert([
            'time' => '17:00:00',
            'date' => '2020/09/01',
            'ketinggian_air' => '60',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wave')->insert([
            'time' => '18:00:00',
            'date' => '2020/03/01',
            'ketinggian_air' => '40',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wave')->insert([
            'time' => '13:00:00',
            'date' => '2020/07/01',
            'ketinggian_air' => '90',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wave')->insert([
            'time' => '15:00:00',
            'date' => '2020/06/01',
            'ketinggian_air' => '10',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wave')->insert([
            'time' => '17:00:00',
            'date' => '2020/03/01',
            'ketinggian_air' => '10',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wave')->insert([
            'time' => '19:00:00',
            'date' => '2020/04/01',
            'ketinggian_air' => '15',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wave')->insert([
            'time' => '15:00:00',
            'date' => '2020/01/02',
            'ketinggian_air' => '90',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
