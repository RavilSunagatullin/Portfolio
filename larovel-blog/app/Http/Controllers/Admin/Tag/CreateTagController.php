<?php

namespace App\Http\Controllers\Admin\Tag;



use App\Models\Tag;

class CreateTagController
{
    public function create(){
        return view('admin.tags.create');
    }
}
