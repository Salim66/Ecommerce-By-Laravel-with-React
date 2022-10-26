@extends('admin.admin_master')

@section('admin')
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<div class="page-wrapper">
    <div class="page-content">
        <!--breadcrumb-->
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="breadcrumb-title pe-3">Edit Site Info</div>
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Site Info</li>
                    </ol>
                </nav>
            </div>
        </div>
        <!--end breadcrumb-->
        <div class="container">
            <div class="main-body">
                <div class="row">
                    <div class="col-lg-12">
                        <form action="{{ route('siteinfo.update') }}" method="POST">
                            @csrf
                            <input type="hidden" name="id" value="{{ $data->id }}">
                            <div class="card">
                                <div class="card-body">

                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">About</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <textarea name="about" id="mytextarea" name="mytextarea">{{ $data->about }}</textarea>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Refund Policy</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <textarea name="refund" id="mytextarea1" name="mytextarea">{{ $data->refund }}</textarea>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">How To Purchase</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <textarea name="purchase_guide" id="mytextarea2" name="mytextarea">{{ $data->purchase_guide }}</textarea>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Privacy Policy</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <textarea name="privacy" id="mytextarea3" name="mytextarea">{{ $data->privacy }}</textarea>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Address</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <textarea name="address" id="mytextarea4" name="mytextarea">{{ $data->address }}</textarea>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">google_app_link</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="text" name="google_app_link" class="form-control" value="{{ $data->google_app_link }}" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">google_app_link</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="text" name="ios_app_link" class="form-control" value="{{ $data->ios_app_link }}" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">facebook_link</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="text" name="facebook_link" class="form-control" value="{{ $data->facebook_link }}" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">twitter_link</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="text" name="twitter_link" class="form-control" value="{{ $data->twitter_link }}" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">instagram_link</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="text" name="instagram_link" class="form-control" value="{{ $data->instagram_link }}" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">copyright_text</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="text" name="copyright_text" class="form-control" value="{{ $data->copyright_text }}" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-3"></div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="submit" class="btn btn-primary px-4" value="Update" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src='https://cdn.tiny.cloud/1/vdqx2klew412up5bcbpwivg1th6nrh3murc6maz8bukgos4v/tinymce/5/tinymce.min.js' referrerpolicy="origin">
</script>
<script>
    tinymce.init({
      selector: '#mytextarea',
    });
    tinymce.init({
      selector: '#mytextarea1',
    });
    tinymce.init({
      selector: '#mytextarea2',
    });
    tinymce.init({
      selector: '#mytextarea3',
    });
    tinymce.init({
      selector: '#mytextarea4',
    });
</script>
@endsection
