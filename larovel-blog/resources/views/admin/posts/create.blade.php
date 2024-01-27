@extends('admin.layouts.main')
@section('content')
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Create posts</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Dashboard v1</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <!-- Small boxes (Stat box) -->
                <div class="row">
                    <div class="col-9">
                        <form action="{{route('admin.post.store')}}" method="post" enctype="multipart/form-data">
                            @csrf
                            <div class="card card-primary">
                                <div class="card-header">
                                    <h3 class="card-title">Create form</h3>
                                </div>
                                <div class="card-body">
                                    <div class="form-group w-50">
                                        <label for="postTitle">Post title</label>
                                        <input type="text" class="form-control" id="postTitle"
                                               placeholder="Enter title" name="title" value="{{old('title')}}">
                                        @error('title')
                                        <div class="text-danger mt-2">Error, {{$message}}</div>
                                        @enderror
                                    </div>
                                    <div class="form-group w-50">
                                        <label for="select-category">Select category</label>
                                        <select name="category_id" id="select-category" class="form-control">
                                            @foreach($categories as $category)
                                                <option value="{{$category->id}}" {{$category->id == old('category_id')? 'selected': ''}}>{{$category->title}}</option>
                                            @endforeach
                                        </select>
                                        @error('category_id')
                                        <div class="text-danger mt-2">Error, {{$message}}</div>
                                        @enderror
                                    </div>
                                    <div class="form-group w-50">
                                        <label for="select-tags">Tags</label>
                                        <select class="select2" name="tag_ids[]" multiple="multiple" data-placeholder="Select tags" id="select-tags" style="width: 100%;">
                                            @foreach($tags as $tag)
                                                <option {{is_array(old('tag_ids')) && in_array($tag->id, old('tag_ids')) ? 'selected': ''}} value="{{$tag->id}}">{{$tag->title}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="form-group w-50">
                                        <label for="exampleInputFile">File preview</label>
                                        <div class="input-group">
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="previewFile"
                                                       name="preview_image">
                                                <label class="custom-file-label" for="previewFile">Choose file</label>
                                            </div>
                                            <div class="input-group-append">
                                                <span class="input-group-text">Upload</span>
                                            </div>
                                        </div>
                                        @error('preview_image')
                                        <div class="text-danger mt-2">Error, {{$message}}</div>
                                        @enderror
                                    </div>
                                    <div class="form-group w-50">
                                        <label for="exampleInputFile">File main photo</label>
                                        <div class="input-group">
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="previewFile"
                                                       name="main_image">
                                                <label class="custom-file-label" for="previewFile">Choose file</label>
                                            </div>
                                            <div class="input-group-append">
                                                <span class="input-group-text">Upload</span>
                                            </div>
                                        </div>
                                        @error('main_image')
                                        <div class="text-danger mt-2">Error, {{$message}}</div>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label for="summernote">Content edit</label>
                                        <textarea id="summernote" name="content">{{old('content')}}</textarea>
                                        @error('content')
                                        <div class="text-danger mt-2">Error, {{$message}}</div>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- ./col -->
                </div>
                <!-- /.row -->

            </div><!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
@endsection
