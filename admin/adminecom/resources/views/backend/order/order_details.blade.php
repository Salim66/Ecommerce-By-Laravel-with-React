@extends('admin.admin_master')

@section('admin')
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<div class="page-wrapper">
    <div class="page-content">
        <!--breadcrumb-->
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="breadcrumb-title pe-3">Order Details</div>
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Invoice No: <strong class="text-danger">{{ $data->invoice_no }}</strong></li>
                    </ol>
                </nav>
            </div>
        </div>
        <!--end breadcrumb-->
        <div class="container">
            <div class="main-body">
                <div class="row">
                    <div class="col-lg-4">
                        <ul class="list-group">
                            <li class="list-group-item">1</li>
                            <li class="list-group-item">1</li>
                            <li class="list-group-item">1</li>
                            <li class="list-group-item">1</li>
                        </ul>
                    </div>
                    <div class="col-lg-8">
                        <ul class="list-group">
                            <li class="list-group-item">1</li>
                            <li class="list-group-item">1</li>
                            <li class="list-group-item">1</li>
                            <li class="list-group-item">1</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
