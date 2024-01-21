<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

@auth
<p>congratulations</p>
<form action="/logout" method="post">
    @csrf
    <button type="submit">exit</button>
</form>
<div style="border:2px solid #333; color:#333">
    <h2>Create new post</h2>
    <form action="/create-post" method="post">
        @csrf
        <div>
            <label for="title">Your title</label>
            <input type="text" id="title" name="title" placeholder="title">
        </div>
        <div>
            <label for="body">Your Password</label>
            <textarea id="body" name="body" placeholder="post content..."></textarea>
        </div>
        <button type="submit">Save post</button>
    </form>
</div>
<div style="border:2px solid #333; color:#333">
    <h2>My posts</h2>
    @foreach($posts as $post)
        <div style="border:2px solid #333; color:#333">
            <h3>{{$post['title']}} by {{$post->user->name}}</h3>
            <p>{{$post['body']}}</p>
            <p><a href="/edit-post/{{$post->id}}">edit post</a></p>
            <form action="/delete-post/{{$post->id}}" method="post">
                @csrf
                @method('Delete')
                <button type="submit">Delete</button>
            </form>
        </div>
    @endforeach
</div>

@else
    <div style="border:2px solid #333; color:#333">
        <h2>Register</h2>
        <form action="/register" method="post">
            @csrf
            <div>
                <label for="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="name">
            </div>
            <div>
                <label for="email">Your Email</label>
                <input type="text" id="email" name="email" placeholder="email">
            </div>
            <div>
                <label for="password">Your Password</label>
                <input type="password" id="password" name="password" placeholder="password">
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    <div style="border:2px solid #333; color:#333">
        <h2>Log in</h2>
        <form action="/login" method="post">
            @csrf
            <div>
                <label for="loginname">Your Name</label>
                <input type="text" id="loginname" name="loginname" placeholder="name">
            </div>
            <div>
                <label for="loginpassword">Your Password</label>
                <input type="password" id="loginpassword" name="loginpassword" placeholder="password">
            </div>
            <button type="submit">Log in</button>
        </form>
    </div>
</body>

@endauth


</html>
