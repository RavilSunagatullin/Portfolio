@extends('layout.app')
@section('content')
    <a href="{{route("admin.index")}}" class="border bg px-10 fz-32 text-center">Admin panel</a>
    <table>
        <thead>
        <tr>
            <td>
                Имя <a href="{{ route('admin.user.index', ['sort' => 'name']) }}">сорт</a>
            </td>
            <td>
                Почта <a href="{{ route('admin.user.index', ['sort' => 'email']) }}">сорт</a>
            </td>
            <td>
                Дата регистрации <a href="{{ route('admin.user.index', ['sort' => 'created_at']) }}">сорт</a>
            </td>
        </tr>
        </thead>
        <tbody>
        @foreach ($users as $user )
            <tr>
                <td>{{$user->name}}</td>
                <td>{{$user->email}}</td>
                <td>{{$user->created_at}}</td>
            </tr>
        @endforeach
        </tbody>
    </table>
@endsection
