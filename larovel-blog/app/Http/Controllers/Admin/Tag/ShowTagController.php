<?php

namespace App\Http\Controllers\Admin\Tag;

use App\Models\Tag;

class ShowTagController
{
    public function show(Tag $tag){
        return view('admin.tags.show', compact('tag'));
    }
}
