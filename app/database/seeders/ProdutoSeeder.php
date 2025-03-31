<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Produto;


class ProdutoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $imagens = [
            "photo-1542291026-7eec264c27ff.jpg",
            "photo-1549298916-b41d501d3772.jpg",
            "photo-1551107696-a4b0c5a0d9a2.jpg",
            "photo-1556637640-2c80d3201be8.jpg",
            "photo-1511556532299-8f662fc26c06.jpg",
            "photo-1515955656352-a1fa3ffcd111.jpg",
            "photo-1520256862855-398228c41684.jpg",
            "photo-1539185441755-769473a23570.jpg",
        ];
        // Criar 10 produtos
        Produto::factory()->count(10)->create()->each(function ($produto) use ($imagens) {
            // Embaralha e seleciona 2 imagens diferentes
            shuffle($imagens);
            $produto->imagens = [
                "produtos/" . $imagens[0],
                "produtos/" . $imagens[1],
            ];
            $produto->save();
        });
    }
}
