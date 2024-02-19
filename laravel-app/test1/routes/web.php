<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ClientProductContrller;
use App\Http\Controllers\ProductContrller;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('eshop.index');
})->name('welcome');

Route::prefix('auth')->group(function () {
    Route::get('login', [AuthController::class,'login'])->name('login');
    Route::post('login', [AuthController::class,'postLogin'])->name('post.login');
    Route::post('logout', [AuthController::class,'logout'])->name('logout');

    Route::get('register', [AuthController::class,'register'])->name('register');
    Route::post('register', [AuthController::class,'postRegister'])->name('post.register');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/home', [AuthController::class,'profile'])->name('home');
    Route::get('/products/{product}', [ClientProductContrller::class,'show'])->name('eshop.product.show');
});

Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
    Route::get('/', [AdminController::class, 'index'])->name('admin.index');
    Route::prefix('/products')->group(function () {
        Route::get('/', [ProductContrller::class,'index'])->name('admin.product.index');
        Route::get('/create', [ProductContrller::class,'create'])->name('admin.product.create');
        Route::post('/store', [ProductContrller::class,'store'])->name('admin.product.store');
        // show route
        Route::get('/{product}/edit', [ProductContrller::class,'edit'])->name('admin.product.edit');
        Route::patch('/{product}/update', [ProductContrller::class,'update'])->name('admin.product.update');
        Route::delete('/{product}/delete', [ProductContrller::class,'delete'])->name('admin.product.delete');
    });
    Route::get('/users', [AdminController::class, 'user_index'])->name('admin.user.index');
    Route::get('/statistics', [AdminController::class,'statistics_index'])->name("admin.statistics.index");
});


