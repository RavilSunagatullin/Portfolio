@extends('layout.app')
@section('content')
    <h1 class="border px-10 fz-32 text-center">Admin panel</h1>
    <div class="row">
        <a href="{{route('admin.product.index')}}" class="border bg px-10 fz-32 text-center">Товары</a>
        <a href="{{route('admin.user.index')}}" class="border bg px-10 fz-32 text-center">Пользователи</a>
        <a href="{{route('admin.statistics.index')}}" class="border bg px-10 fz-32 text-center">Статистика</a>
    </div>
@endsection