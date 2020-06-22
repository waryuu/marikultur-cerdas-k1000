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
        $this->call(KelompokSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(KerambaSeeder::class);
        $this->call(NamaikanSeeder::class);
        // $this->call(ProduksiSeeder::class);
        $this->call(SensorSuhuSeeder::class);
        $this->call(SensorDoSeeder::class);
        $this->call(SensorHumTempSeeder::class);
        $this->call(SensorWaveSeeder::class);
        $this->call(SensorWindSeeder::class);
        // $this->call(SubProduksiSeeder::class);
        // $this->call(PakanSeeder::class);
    }
}
