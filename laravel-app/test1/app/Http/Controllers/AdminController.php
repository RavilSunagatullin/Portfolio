<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index(){
        // $data
        return view("admin.index");
    }
    public function user_index(Request $request){
        $sortColumn =$request->input('sort', 'id');
        $users = User::orderBy($sortColumn)->get();
        return view("admin.users.index", compact("users"));
    }
    public function statistics_index(){
        $users = User::all();
        $products = Product::all();
        return view("admin.statistics.index", compact("users", "products"));
    }
}
