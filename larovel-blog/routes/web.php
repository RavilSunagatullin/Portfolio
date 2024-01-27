<?php

use App\Http\Controllers\Admin\Category\CreateCategoryController;
use App\Http\Controllers\Admin\Category\DeleteCategoryController;
use App\Http\Controllers\Admin\Category\EditCategoryController;
use App\Http\Controllers\Admin\Category\IndexCategoryController;
use App\Http\Controllers\Admin\Category\ShowCategoryController;
use App\Http\Controllers\Admin\Category\StoreCategoryController;
use App\Http\Controllers\Admin\Category\UpdateCategoryController;

use App\Http\Controllers\Admin\Post\CreatePostController;
use App\Http\Controllers\Admin\Post\DeletePostController;
use App\Http\Controllers\Admin\Post\EditPostController;
use App\Http\Controllers\Admin\Post\IndexPostController;
use App\Http\Controllers\Admin\Post\ShowPostController;
use App\Http\Controllers\Admin\Post\StorePostController;
use App\Http\Controllers\Admin\Post\UpdatePostController;

use App\Http\Controllers\Admin\Tag\CreateTagController;
use App\Http\Controllers\Admin\Tag\DeleteTagController;
use App\Http\Controllers\Admin\Tag\EditTagController;
use App\Http\Controllers\Admin\Tag\IndexTagController;
use App\Http\Controllers\Admin\Tag\ShowTagController;
use App\Http\Controllers\Admin\Tag\StoreTagController;
use App\Http\Controllers\Admin\Tag\UpdateTagController;

use App\Http\Controllers\Admin\User\CreateUserController;
use App\Http\Controllers\Admin\User\DeleteUserController;
use App\Http\Controllers\Admin\User\EditUserController;
use App\Http\Controllers\Admin\User\IndexUserController;
use App\Http\Controllers\Admin\User\ShowUserController;
use App\Http\Controllers\Admin\User\StoreUserController;
use App\Http\Controllers\Admin\User\UpdateUserController;

use App\Http\Controllers\Main\IndexController;
use App\Http\Controllers\Admin\IndexAdminController;
use Illuminate\Support\Facades\Auth;
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

Route::get('/', [IndexController::class, 'index'])->name('index');
Route::middleware(['auth', 'admin', 'verified'])->prefix('admin')->group(function () {
    Route::get('/', [IndexAdminController::class, 'index'])->name('admin.index');
    Route::prefix('posts')->group(function () {
        Route::get('/', [IndexPostController::class, 'index'])->name('admin.post.index');
        Route::get('/create', [CreatePostController::class, 'create'])->name('admin.post.create');
        Route::post('/', [StorePostController::class, 'store'])->name('admin.post.store');
        Route::get('/{post}', [ShowPostController::class, 'show'])->name('admin.post.show');
        Route::get('/{post}/edit', [EditPostController::class, 'edit'])->name('admin.post.edit');
        Route::patch('/{post}', [UpdatePostController::class, 'update'])->name('admin.post.update');
        Route::delete('/{post}', [DeletePostController::class, 'delete'])->name('admin.post.delete');
    });
    Route::prefix('categories')->group(function () {
        Route::get('/', [IndexCategoryController::class, 'index'])->name('admin.category.index');
        Route::get('/create', [CreateCategoryController::class, 'create'])->name('admin.category.create');
        Route::post('/', [StoreCategoryController::class, 'store'])->name('admin.category.store');
        Route::get('/{category}', [ShowCategoryController::class, 'show'])->name('admin.category.show');
        Route::get('/{category}/edit', [EditCategoryController::class, 'edit'])->name('admin.category.edit');
        Route::patch('/{category}', [UpdateCategoryController::class, 'update'])->name('admin.category.update');
        Route::delete('/{category}', [DeleteCategoryController::class, 'delete'])->name('admin.category.delete');
    });
    Route::prefix('tags')->group(function () {
        Route::get('/', [IndexTagController::class, 'index'])->name('admin.tag.index');
        Route::get('/create', [CreateTagController::class, 'create'])->name('admin.tag.create');
        Route::post('/', [StoreTagController::class, 'store'])->name('admin.tag.store');
        Route::get('/{tag}', [ShowTagController::class, 'show'])->name('admin.tag.show');
        Route::get('/{tag}/edit', [EditTagController::class, 'edit'])->name('admin.tag.edit');
        Route::patch('/{tag}', [UpdateTagController::class, 'update'])->name('admin.tag.update');
        Route::delete('/{tag}', [DeleteTagController::class, 'delete'])->name('admin.tag.delete');
    });
    Route::prefix('users')->group(function () {
        Route::get('/', [IndexUserController::class, 'index'])->name('admin.user.index');
        Route::get('/create', [CreateUserController::class, 'create'])->name('admin.user.create');
        Route::post('/', [StoreUserController::class, 'store'])->name('admin.user.store');
        Route::get('/{user}', [ShowUserController::class, 'show'])->name('admin.user.show');
        Route::get('/{user}/edit', [EditUserController::class, 'edit'])->name('admin.user.edit');
        Route::patch('/{user}', [UpdateUserController::class, 'update'])->name('admin.user.update');
        Route::delete('/{user}', [DeleteUserController::class, 'delete'])->name('admin.user.delete');
    });
});
Auth::routes(['verify'=>true]);

