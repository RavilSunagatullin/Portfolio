<?php

namespace App\Http\Controllers\Admin\Post;


use App\Models\Post;


class ShowPostController extends BasePostController
{
    public function show(Post $post){
        return view('admin.posts.show', compact('post'));
    }
}
