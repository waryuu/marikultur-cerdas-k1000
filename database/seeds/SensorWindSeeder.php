<?php

use Illuminate\Database\Seeder;

class SensorWindSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sensor_wind')->insert([
            'time' => '12:00:00',
            'date' => '2020/01/01',
            'arah_angin' => 'Barat',
            'kecepatan_angin'=>'35',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wind')->insert([
            'time' => '13:00:00',
            'date' => '2020/02/01',
            'arah_angin' => 'Timur',
            'kecepatan_angin'=>'34',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wind')->insert([
            'time' => '14:00:00',
            'date' => '2020/03/01',
            'arah_angin' => 'Utara',
            'kecepatan_angin'=>'36',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wind')->insert([
            'time' => '15:00:00',
            'date' => '2020/03/01',
            'arah_angin' => 'Tenggara',
            'kecepatan_angin'=>'27',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wind')->insert([
            'time' => '13:00:00',
            'date' => '2020/04/01',
            'arah_angin' => 'Barat Laut',
            'kecepatan_angin'=>'35',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wind')->insert([
            'time' => '14:00:00',
            'date' => '2020/05/01',
            'arah_angin' => 'Timur Laut',
            'kecepatan_angin'=>'36',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wind')->insert([
            'time' => '13:00:00',
            'date' => '2020/06/01',
            'arah_angin' => 'Selatan',
            'kecepatan_angin'=>'25',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wind')->insert([
            'time' => '14:00:00',
            'date' => '2020/12/01',
            'arah_angin' => 'Barat',
            'kecepatan_angin'=>'35',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wind')->insert([
            'time' => '17:00:00',
            'date' => '2020/09/01',
            'arah_angin' => 'Barat Daya',
            'kecepatan_angin'=>'45',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wind')->insert([
            'time' => '18:00:00',
            'date' => '2020/03/01',
            'arah_angin' => 'Timur',
            'kecepatan_angin'=>'35',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wind')->insert([
            'time' => '13:00:00',
            'date' => '2020/07/01',
            'arah_angin' => 'Tenggara',
            'kecepatan_angin'=>'40',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wind')->insert([
            'time' => '15:00:00',
            'date' => '2020/06/01',
            'arah_angin' => 'Timur',
            'kecepatan_angin'=>'45',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wind')->insert([
            'time' => '17:00:00',
            'date' => '2020/03/01',
            'arah_angin' => 'Barat',
            'kecepatan_angin'=>'25',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wind')->insert([
            'time' => '19:00:00',
            'date' => '2020/04/01',
            'arah_angin' => 'Utara',
            'kecepatan_angin'=>'20',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('sensor_wind')->insert([
            'time' => '15:00:00',
            'date' => '2020/01/02',
            'arah_angin' => 'Selatan',
            'kecepatan_angin'=>'30',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
