<?php

namespace App\Http\Controllers\Admin\Category;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class DeleteCategoryController extends Controller
{
    public function delete(Category $category){
            $category->delete();
            return redirect()->route('admin.category.index');
    }
}
