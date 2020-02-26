<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(SensorDoSeeder::class);
        $this->call(SensorHumTempSeeder::class);
        $this->call(SensorWaveSeeder::class);
        $this->call(SensorWindSeeder::class);
        $this->call(SensorSuhuSeeder::class);

    }
}
