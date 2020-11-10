<template>
  <div id="wrapper" class="home">
        <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Heading -->
            <div class="sidebar-heading">
                Dashboard
            </div>
            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
                <router-link to="/dashborad1">
                    <a class="nav-link" href="#">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard 1</span></a>
                </router-link>
            </li>

            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
                <router-link to="/dashborad2">
                    <a class="nav-link" href="#">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard 2</span></a>
                </router-link>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">

            <div class="sidebar-heading">
                My Contents
            </div>

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseMyCont1"
                    aria-expanded="true" aria-controls="collapseMyCont1">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>My Contents 1</span>
                </a>
                <div id="collapseMyCont1" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <router-link to="/mycontents11"><a class="collapse-item" href="#">1-1 datatable</a></router-link>
                        <router-link to="/mycontents12"><a class="collapse-item" href="#">1-2 chart</a></router-link>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseMyCont2"
                    aria-expanded="true" aria-controls="collapseMyCont2">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>My Contents 2</span>
                </a>
                <div id="collapseMyCont2" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <router-link to="/mycontents21"><a class="collapse-item" href="#">2-1</a></router-link>
                        <router-link to="/mycontents22"><a class="collapse-item" href="#">2-2</a></router-link>
                    </div>
                </div>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">

            <!-- Sidebar Toggler (Sidebar) -->
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content" >

                <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    <!-- Sidebar Toggle (Topbar) -->
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>



                    <!-- Topbar Navbar -->
                    <ul class="navbar-nav ml-auto">

                        <div class="topbar-divider d-none d-sm-block"></div>

                    </ul>

                </nav>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <router-view/>

                <!-- /.container-fluid -->
                <a class="scroll-to-top rounded" href="#page-top">
                    <i class="fas fa-angle-up"></i>
                </a>

            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2020</span>
                    </div>
                </div>
            </footer>
            <!-- End of Footer -->

        </div>
        <!-- End of Content Wrapper -->
  </div>
</template>

<script>
//jQueryを利用するために必要（他に方法ないのかな？）
import jQuery from 'jquery'
let $ = jQuery

// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
    //Dashboard1,Dashboard2
  },
  mounted: function(){
    console.log('Home:mounted')
    //サイドメニューの折り畳みが動かないのでsb-admin-2.jsからコピー
    $("#sidebarToggle, #sidebarToggleTop").on('click', function() {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");

        // if ($(".sidebar").hasClass("toggled")) {
        //     $('.sidebar .collapse').collapse('hide');
        // }
    })
  },
  methods:{
    myMethod1: function () {
        console.log('Home:myMethod1')
    }
  }  
}
</script>
