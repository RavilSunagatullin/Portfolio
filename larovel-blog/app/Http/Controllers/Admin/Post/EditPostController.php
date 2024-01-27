<?php

namespace App\Http\Controllers\Admin\Post;


use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;


class EditPostController extends BasePostController
{
    public function edit(Post $post){
        $categories = Category::all();
        $tags = Tag::all();
        return view('admin.posts.edit', compact('post', 'categories', 'tags'));
    }
}
