<?php

namespace App\Http\Controllers\Admin\User;

use App\Http\Requests\Admin\User\UpdateRequest;
use App\Models\User;


class UpdateUserController
{
    public function update(UpdateRequest $request, User $user){
        $data = $request->validated();
        $user->update($data);
        return view('admin.users.show', compact('user'));
    }
}
