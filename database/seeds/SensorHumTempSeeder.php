<?php

use Illuminate\Database\Seeder;

class SensorHumTempSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sensor_humtemp')->insert([
            'time' => '12:00:00',
            'date' => '2020/01/01',
            'humidity' => '80',
            'temperature'=>'35',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '13:00:00',
            'date' => '2020/02/01',
            'humidity' => '70',
            'temperature'=>'34',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '14:00:00',
            'date' => '2020/03/01',
            'humidity' => '80',
            'temperature'=>'34',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '15:00:00',
            'date' => '2020/03/01',
            'humidity' => '71',
            'temperature'=>'32',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '16:00:00',
            'date' => '2020/04/01',
            'humidity' => '72',
            'temperature'=>'33',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '17:00:00',
            'date' => '2020/05/01',
            'humidity' => '75',
            'temperature'=>'32',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '18:00:00',
            'date' => '2020/06/01',
            'humidity' => '78',
            'temperature'=>'35',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '19:00:00',
            'date' => '2020/12/01',
            'humidity' => '74',
            'temperature'=>'33',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '20:00:00',
            'date' => '2020/09/01',
            'humidity' => '79',
            'temperature'=>'32',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '21:00:00',
            'date' => '2020/03/01',
            'humidity' => '76',
            'temperature'=>'34',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '22:00:00',
            'date' => '2020/07/01',
            'humidity' => '77',
            'temperature'=>'33',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '23:00:00',
            'date' => '2020/06/01',
            'humidity' => '74',
            'temperature'=>'35',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '23:00:01',
            'date' => '2020/03/01',
            'humidity' => '72',
            'temperature'=>'34',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '23:00:02',
            'date' => '2020/04/01',
            'humidity' => '73',
            'temperature'=>'35',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '23:00:03',
            'date' => '2020/01/02',
            'humidity' => '76',
            'temperature'=>'34',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
