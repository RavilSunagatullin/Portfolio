<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(){
        return view("auth.login");
    }
    public function postLogin(Request $request){
        $data = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($data)) {
            $request->session()->regenerate();

            return redirect()->route('home');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }
    public function register(){
        return view("auth.register");
    }
    public function postRegister(Request $request){
    $data =  $request ->validate([
        'name'=>['required','string'],
        'email'=>['required','string'],
        'password'=>['required','string'],
    ]);
    $user = User::create($data);

    event(new Registered($user));

    Auth::login($user);
    return redirect()->route('home');
    }
    public function logout(Request $request){
        Auth::logout();
        return redirect()->route('welcome');
    }
    public function profile(){
        $user = Auth::user();
        $products = Product::all();
        return view('profile', compact('user', "products"));
    }
}
