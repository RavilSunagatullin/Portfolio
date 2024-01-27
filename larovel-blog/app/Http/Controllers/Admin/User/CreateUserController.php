<?php

namespace App\Http\Controllers\Admin\User;



use App\Models\Tag;
use App\Models\User;

class CreateUserController
{
    public function create(){
        $roles= User::getRoles();
        return view('admin.users.create', compact('roles'));
    }
}
