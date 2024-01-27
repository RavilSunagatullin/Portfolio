<?php

namespace App\Http\Controllers\Admin\User;

use App\Models\User;

class DeleteUserController
{
    public function delete(User $user){
        $user->delete();
        return redirect()->route('admin.user.index');
    }
}
