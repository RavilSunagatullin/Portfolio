<?php

namespace App\Http\Controllers\Admin\Tag;

use App\Models\Tag;

class EditTagController
{
    public function edit(Tag $tag){
        return view('admin.tags.edit', compact('tag'));
    }
}
