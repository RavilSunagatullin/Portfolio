@extends('layout.app')
@section('content')
        <table>
        <thead>
            <tr>
                <td>Название</td>
                <td>Текст</td>
                <td>Цена</td>
                <td></td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{$product->title}}</td>
                <td>{{$product->text}}</td>
                <td>{{$product->price}}</td>
                <td><button class="bg border px-10">кнопка</button></td>
            </tr>
            
        </tbody>
            </table>
@endsection
