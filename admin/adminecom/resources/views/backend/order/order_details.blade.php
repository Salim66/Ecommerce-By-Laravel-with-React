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
                    <div class="col-lg-6">
                        <ul class="list-group">
                            <li class="list-group-item"><strong class="text-dark">Product Name: </strong> {{ $data->product_name }}</li>
                            <li class="list-group-item"><strong class="text-dark">Product Code: </strong> {{ $data->product_code }}</li>
                            <li class="list-group-item"><strong class="text-dark">Product Size: </strong> {{ $data->size }}</li>
                            <li class="list-group-item"><strong class="text-dark">Product Color: </strong> {{ $data->color }}</li>
                            <li class="list-group-item"><strong class="text-dark">Quantity: </strong> {{ $data->quantity }}</li>
                            <li class="list-group-item"><strong class="text-dark">Unit Price: </strong> {{ $data->unit_price }}</li>
                            <li class="list-group-item"><strong class="text-dark">Total Price: </strong> {{ $data->total_price }}</li>
                            <li class="list-group-item"><strong class="text-dark">User Name: </strong> {{ $data->name }}</li>
                            <li class="list-group-item"><strong class="text-dark">User Email: </strong> {{ $data->email }}</li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <ul class="list-group">
                            <li class="list-group-item"><strong class="text-dark">Payment Method: </strong> {{ $data->payment_method }}</li>
                            <li class="list-group-item"><strong class="text-dark">Delivery Address: </strong> {{ $data->delivery_address }}</li>
                            <li class="list-group-item"><strong class="text-dark">City: </strong> {{ $data->city }}</li>
                            <li class="list-group-item"><strong class="text-dark">Delivery Charge: </strong> {{ $data->delivery_charge }}</li>
                            <li class="list-group-item"><strong class="text-dark">Order Date: </strong> {{ $data->order_date }}</li>
                            <li class="list-group-item"><strong class="text-dark">Order Time: </strong> {{ $data->order_time }}</li>
                            <li class="list-group-item"><strong class="text-dark">Order Status: </strong> <span style="border-radius: 6px;" class="py-1 px-2 text-white bg-danger">{{ $data->order_status }}</span></li>

                            @if($data->order_status == "Pending")
                                <a href="" class="btn btn-success d-block">Processing Order</a>
                                @elseif($data->order_status == "Processing")
                                <a href="" class="btn btn-success d-block">Complete Order</a>
                            @endif

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
