@extends('layout.app')
@section('content')
    <div class="row">
        <a href="{{route("admin.index")}}" class="border bg px-10 fz-32 text-center">Admin panel</a>
    </div>
   <div class="row">
        <p class="px-10 border">Всего пользовыателей {{count($users)}}</p>
        <p class="px-10 border">Всего товаров {{count($products)}}</p>
   </div>
@endsection