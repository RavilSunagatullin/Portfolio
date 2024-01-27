<?php

namespace App\Http\Controllers\Admin\Category;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class EditCategoryController extends Controller
{
    public function edit(Category $category){
        return view('admin.categories.edit', compact('category'));
    }
}
