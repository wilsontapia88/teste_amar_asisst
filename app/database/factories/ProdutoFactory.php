<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Produto>
 */
class ProdutoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'titulo' => $this->faker->word(),
            'imagens' => ([]),
            'preco' => $this->faker->randomFloat(2, 50, 5000),
            'custo' => $this->faker->randomFloat(2, 30, 4000),
            'descricao' => $this->faker->sentence(),
        ];
    }
}
