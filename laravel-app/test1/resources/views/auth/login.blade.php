@extends('layout.app')
@section('content')

            <a href="/" class="px-10 border bg text-center">
                    На главную
            </a>
            
                <form action="{{route('post.login')}}" method="post" class="mw-500 mx-auto">
                @csrf
                <h1 class="px-10 fz-20 border">Форма входа</h1>
                <div class="column px-10 border">  
                <label email for="email">email</label>
                  <input id="email" type="email" name="email" value="{{ old('email') }}">
                </div>
                <div class="column px-10 border">
                 <label for="password"> Пароль</label>
                 <input id="password" type="password" name="password" value="{{old('password')}}">
                </div>
                 <div class="column">
                    <button type="submit" class="px-10 text-center">отправить</button>
                </div>
                </form>

@endsection