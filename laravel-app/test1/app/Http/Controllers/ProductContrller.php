<?php

namespace App\Http\Controllers;
use App\Http\Requests\Product\StoreRequest;
use App\Http\Requests\Product\UpdateRequest;
use App\Models\Product;

use Illuminate\Http\Request;

class ProductContrller extends Controller
{
    public function index(Request $request){
        $sortColumn = $request->input('sort', 'id');
        $products = Product::orderBy($sortColumn)->get();
        return view("admin.products.index",compact("products"));
    }
    public function create(){
        return view("admin.products.create");
    }
    public function store(StoreRequest $request){
        $data = $request->validated();
        Product::firstOrCreate($data);
        return redirect()->route('admin.product.index');
    }
    public function edit(Product $product){
        return view('admin.products.edit',compact('product'));
    }
    public function update(UpdateRequest $request, Product $product){
        $data = $request->validated();
        $product->update($data);
        return redirect()->route('admin.product.index');
    }
    public function delete(Product $product){
        $product->delete();
        return redirect()->route('admin.product.index');
    }
}
