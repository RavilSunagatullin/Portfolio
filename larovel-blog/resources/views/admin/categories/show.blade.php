@extends('admin.layouts.main')
@section('content')
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Category: {{$category->title}}</h1>
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
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Category table</h3>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body table-responsive p-0">
                                <table class="table table-hover text-nowrap">

                                    <tbody>
                                    <tr>
                                        <td>ID</td>
                                        <td>{{$category->id}}</td>
                                    </tr>
                                    <tr>
                                        <td>Title</td>
                                        <td>{{$category->title}}</td>
                                    </tr>
                                    <tr>
                                        <td>Created</td>
                                        <td>{{$category->created_at}}</td>
                                    </tr>
                                    <tr>
                                        <td>Updated</td>
                                        <td>{{$category->updated_at}}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Actions
                                        </td>
                                        <td>
                                            <a href="{{route('admin.category.edit', $category->id)}}"
                                               class="btn btn-primary mr-3"><i
                                                    class="fas fa-regular fa-pen mr-2"></i>Edit</a>
                                            <form action="{{route('admin.category.delete', $category->id)}}"
                                                  method="post" class="btn btn-danger">
                                                @csrf
                                                @method('delete')
                                                <button type="submit" class="no-std__btn">
                                                    <i class="fas fa-solid fa-eraser mr-2" role="button"></i>Delete
                                                </button>
                                            </form>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.card-body -->
                        </div>
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
