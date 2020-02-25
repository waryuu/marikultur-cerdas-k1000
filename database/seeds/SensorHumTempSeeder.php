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
            'temperature'=>'36',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '15:00:00',
            'date' => '2020/03/01',
            'humidity' => '90',
            'temperature'=>'27',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '13:00:00',
            'date' => '2020/04/01',
            'humidity' => '70',
            'temperature'=>'35',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '14:00:00',
            'date' => '2020/05/01',
            'humidity' => '80',
            'temperature'=>'36',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '13:00:00',
            'date' => '2020/06/01',
            'humidity' => '40',
            'temperature'=>'25',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '14:00:00',
            'date' => '2020/12/01',
            'humidity' => '80',
            'temperature'=>'35',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '17:00:00',
            'date' => '2020/09/01',
            'humidity' => '60',
            'temperature'=>'45',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '18:00:00',
            'date' => '2020/03/01',
            'humidity' => '40',
            'temperature'=>'35',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '13:00:00',
            'date' => '2020/07/01',
            'humidity' => '90',
            'temperature'=>'40',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '15:00:00',
            'date' => '2020/06/01',
            'humidity' => '10',
            'temperature'=>'45',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '17:00:00',
            'date' => '2020/03/01',
            'humidity' => '10',
            'temperature'=>'25',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '19:00:00',
            'date' => '2020/04/01',
            'humidity' => '15',
            'temperature'=>'20',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_humtemp')->insert([
            'time' => '15:00:00',
            'date' => '2020/01/02',
            'humidity' => '90',
            'temperature'=>'30',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
