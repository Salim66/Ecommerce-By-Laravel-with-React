@extends('admin.admin_master')

@section('admin')
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<div class="page-wrapper">
    <div class="page-content">
        <!--breadcrumb-->
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="breadcrumb-title pe-3">Pending Order</div>
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Orders</li>
                    </ol>
                </nav>
            </div>
        </div>
        <!--end breadcrumb-->
        <div class="container">
            <div class="main-body">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card radius-10">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <h5 class="mb-0">Pending Order</h5>
                                    </div>
                                    <div class="font-22 ms-auto"><i class="bx bx-dots-horizontal-rounded"></i>
                                    </div>
                                </div>
                                <hr>
                                <div class="table-responsive">
                                    <table class="table align-middle mb-0">
                                        <thead class="table-light">
                                            <tr>
                                                <th>SL</th>
                                                <th>Product Name</th>
                                                <th>Invoice No</th>
                                                <th>Quantity</th>
                                                <th>Total Price</th>
                                                <th>Order Date</th>
                                                <th>Order Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach ($all_data as $data)
                                                <tr>
                                                    <td>{{ $loop->index + 1 }}</td>
                                                    <td>{{ $data->product_name }}</td>
                                                    <td>{{ $data->invoice_no }}</td>
                                                    <td>{{ $data->quantity }}</td>
                                                    <td>{{ $data->total_price }}</td>
                                                    <td>{{ $data->order_date }}</td>
                                                    <td class="text-danger">{{ $data->order_status }}</td>
                                                    <td>
                                                        <a href="{{ route('delete.contact', $data->id) }}" class="btn btn-danger" id="delete">Details</a>
                                                    </td>
                                                </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {{ $all_data->links('vendor.pagination.custom') }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
