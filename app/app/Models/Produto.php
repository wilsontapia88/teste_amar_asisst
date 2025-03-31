<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    use HasFactory;

    protected $fillable = [
        'titulo',
        'imagens',
        'preco',
        'custo',
        'descricao',
    ];

    protected $casts = [
        'imagens' => 'array'
    ];


    public function storagerImageProduto($nome_pasta, $fileimage)
    {
        $extension = $fileimage->extension();
        if (!in_array($extension, ['jpg', 'jpeg', 'png'])) {
            return redirect()
                ->back()
                ->with('error', 'Apenas arquivos JPG e PNG são permitidos')
                ->withInput();
        }
        $originalName = pathinfo($fileimage->getClientOriginalName(), PATHINFO_FILENAME);
        $name = $originalName . '_' . date('Ymd_His');
        $nameFile = "{$name}.{$extension}";
        $imagePath = $fileimage->storeAs($nome_pasta, $nameFile, 'public');
        if (!$imagePath) {
            return redirect()
                ->back()
                ->with('error', 'Falha ao fazer upload')
                ->withInput();
        }
        return $imagePath;
    }
}
