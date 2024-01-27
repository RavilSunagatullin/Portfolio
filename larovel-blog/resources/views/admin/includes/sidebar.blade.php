<!-- Sidebar -->
<div class="sidebar">
    <!-- Sidebar Menu -->
    <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas nav-icon fa-regular fa-user "></i>
                    <p>
                        User
                        <i class="fas fa-angle-left right"></i>
                    </p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <a href="{{route('admin.user.index')}}" class="nav-link">
                            <i class="fas fa-regular fa-eye nav-icon"></i>
                            <p>Show users</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="{{route('admin.user.create')}}" class="nav-link">
                            <i class="fas fa-regular fa-plus nav-icon"></i>
                            <p>Create users</p>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas nav-icon fa-regular fa-clipboard "></i>
                    <p>
                        Post
                        <i class="fas fa-angle-left right"></i>
                    </p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <a href="{{route('admin.post.index')}}" class="nav-link">
                            <i class="fas fa-regular fa-eye nav-icon"></i>
                            <p>Show posts</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="{{route('admin.post.create')}}" class="nav-link">
                            <i class="fas fa-regular fa-plus nav-icon"></i>
                            <p>Create posts</p>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas nav-icon fa-regular fa-list "></i>
                    <p>
                        Category
                        <i class="fas fa-angle-left right"></i>
                    </p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <a href="{{route('admin.category.index')}}" class="nav-link">
                            <i class="fas fa-regular fa-eye nav-icon"></i>
                            <p>Show categories</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="{{route('admin.category.create')}}" class="nav-link">
                            <i class="fas fa-regular fa-plus nav-icon"></i>
                            <p>Create categories</p>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas nav-icon fa-regular fa-tag "></i>
                    <p>
                        Tag
                        <i class="fas fa-angle-left right"></i>
                    </p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <a href="{{route('admin.tag.index')}}" class="nav-link">
                            <i class="fas fa-regular fa-eye nav-icon"></i>
                            <p>Show tags</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="{{route('admin.tag.create')}}" class="nav-link">
                            <i class="fas fa-regular fa-plus nav-icon"></i>
                            <p>Create tags</p>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
    <!-- /.sidebar-menu -->
</div>
<!-- /.sidebar -->
