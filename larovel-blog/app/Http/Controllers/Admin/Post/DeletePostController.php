<?php

namespace App\Http\Controllers\Admin\Post;

use App\Models\Post;


class DeletePostController extends BasePostController
{
    public function delete(Post $post){
            $post->delete();
            return redirect()->route('admin.post.index');
    }
}
