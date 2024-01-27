<?php

namespace App\Http\Controllers\Admin\Tag;

use App\Models\Tag;

class IndexTagController
{
    public function index(){
        $tags = Tag::all();
        return view('admin.tags.index', compact('tags'));
    }
}
