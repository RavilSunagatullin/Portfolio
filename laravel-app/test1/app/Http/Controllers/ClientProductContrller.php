<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;

class ClientProductContrller extends Controller
{
    public function show(Product $product){
        return view('eshop.show', compact('product'));
    }
}
