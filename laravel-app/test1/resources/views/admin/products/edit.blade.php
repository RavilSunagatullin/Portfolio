@extends('layout.app')
@section('content')
    
     <a href="{{route("admin.index")}}" class="border bg px-10 fz-32 text-center">Admin panel</a>
            
                <form action="{{route('admin.product.update', $product->id)}}" method="post" class="mw-500 mx-auto">
                @csrf
                @method('patch')
                <h1 class="px-10 fz-20 border">Форма продукта: {{$product->title}}</h1>
                <div class="column px-10 border">  
                    <label for="title">Назвние</label>
                    <input id="title" type="text" name="title" value="{{ $product->title}}">
                </div>
                <div class="column px-10 border">
                 <label for="text"> Текст</label>
                 <textarea id="text" name="text" style="max-height:300px">{{$product->text}}</textarea>
                </div>
                 <div class="column px-10 border">  
                    <label for="price">Цена</label>
                    <input id="price" type="text" name="price" value="{{$product->price}}">
                </div>
                 <div class="column px-10 border">  
                    <label for="qty">Кол-во</label>
                    <input id="qty" type="text" name="qty" value="{{$product->qty}}">
                </div>
                 <div class="column">
                    <button type="submit" class="px-10 text-center">отправить</button>
                </div>
                </form>

@endsection
