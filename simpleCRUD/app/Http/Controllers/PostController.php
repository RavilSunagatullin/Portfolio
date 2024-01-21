<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function createPost(Request $request){
        $incomingField = $request->validate([
            'title'=>'required',
            'body'=>'required',
        ]);
        $incomingField['title'] = strip_tags($incomingField['title']);
        $incomingField['body'] = strip_tags($incomingField['body']);
        $incomingField['user_id'] = auth()->id();
        Post::create($incomingField);
        return redirect('/');
    }
    public function showEditScreen(Post $post){
        if(auth()->user()->id !== $post['user_id']){
            return redirect('/');
        }
        return view('edit-post', ['post'=>$post]);

    }
    public function updatePost(Post $post,Request $request){
        if(auth()->user()->id !== $post['user_id']){
            return redirect('/');
        }
        $incomingField = $request->validate([
            'title'=>'required',
            'body'=>'required',
        ]);
        $incomingField['title'] = strip_tags($incomingField['title']);
        $incomingField['body'] = strip_tags($incomingField['body']);

        $post->update($incomingField);
        return redirect('/');
    }
    public function  deletePost(Post $post){
        if(auth()->user()->id !== $post['user_id']){
            return redirect('/');
        }
        $post->delete();
        return redirect('/');
    }
}
