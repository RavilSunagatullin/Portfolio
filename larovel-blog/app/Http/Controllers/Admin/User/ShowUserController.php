<?php

namespace App\Http\Controllers\Admin\User;

use App\Models\User;

class ShowUserController
{
    public function show(User $user){
        return view('admin.users.show', compact('user'));
    }
}
