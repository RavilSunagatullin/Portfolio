@extends('layout.app')
@section('content')
<div class="row">
    <h1 class="border px-10 fz-32 text-center">Добро пожаловать {{$user->name}}</h1>
    @if(Auth::user()->is_admin)
    <a href="{{route('admin.index')}}" class="border bg px-10 fz-32 text-center">Admin Panel</a>
    @endif
    <form method="POST" action="{{ route('logout') }}" class="border text-center">
    @csrf
    <a class="bg fz-32" :href="route('logout')"
            onclick="event.preventDefault();
                        this.closest('form').submit();">
       Выйти
    </a>
</form>

</div>

<div class="column " style="width:100%">
<h2 class="fz-20">Продукты</h2>
    <div class="row">
     @foreach ($products as $product)
        <div class="card column">
                <h1 class="fz-20 px-10">{{$product->title}}</h1>
                <p class="fz-16 px-10"style="flex:1"
                    >{{$product->text}}</p
                >
                <a href="{{route('eshop.product.show', $product->id)}}" class="border px-10">Купить за {{$product->price}}</a>
            </div>
    @endforeach
    </div>
   
</div>
@endsection