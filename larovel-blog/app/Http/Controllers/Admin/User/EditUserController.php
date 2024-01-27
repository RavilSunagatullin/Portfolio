<?php

namespace App\Http\Controllers\Admin\User;

use App\Models\User;

class EditUserController
{
    public function edit(User $user){
        $roles= User::getRoles();
        return view('admin.users.edit', compact('user', 'roles'));
    }
}
