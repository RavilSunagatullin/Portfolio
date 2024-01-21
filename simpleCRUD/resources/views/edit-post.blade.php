<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Edit Post</h1>
    <form action="/edit-post/{{$post->id}}" method="post">
        @csrf
        @method('Put')
        <div>
            <label for="title">Your title</label>
            <input type="text" id="title" name="title" placeholder="title" value="{{$post->title}}">
        </div>
        <div>
            <label for="body">Your Password</label>
            <textarea id="body" name="body" placeholder="post content...">{{$post->body}}</textarea>
        </div>
        <button type="submit">Save changes</button>
    </form>
</body>
</html>

