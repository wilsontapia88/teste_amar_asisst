<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produto;
use Illuminate\Support\Facades\Log;

class ProdutoController extends Controller
{
    private $productImage;

    public function __construct(){
        $this->productImage = new Produto;
    }
    public function index()
    {
        $produtos  = Produto::all();
        return response()->json($produtos);
    }

    public function store(Request $request)
    {

        Log::info('Dados da requisição:', $request->all());

        if(isset($request->imagens)){
            $images = $request->imagens;
            foreach ($images as $key => $image) {
                Log::info('image:', $image);
                if ($request->hasFile('imagens') ) {
                    $imagenvarios[] = $this->productImage->storagerImageProduto('produtos', $image);
                }else{
                    $imagenvarios = null;
                }
            }
        }else{
            $imagenvarios = null;
        }

        $dados = [
            'titulo' => $request->titulo,
            'imagens' => $imagenvarios,
            'preco' => $request->preco,
            'custo' => $request->custo,
            'descricao' => $request->descricao,
        ];

        $produto = Produto::create($dados);
        return response()->json($produto, 201);
    }
    public function show($id)
    {
        $produto = Produto::findOrFail($id);
        return response()->json($produto);
    }
    public function update(Request $request, $id)
    {
        $produto = Produto::findOrFail($id);
        $produto->update($request->all());
        return response()->json($produto);
    }
    public function destroy($id)
    {
        //
    }
}
