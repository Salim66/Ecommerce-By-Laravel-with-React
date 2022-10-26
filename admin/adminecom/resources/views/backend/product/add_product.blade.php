@extends('admin.admin_master')

@section('admin')
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<div class="page-wrapper">
    <div class="page-content">

        <!--breadcrumb-->
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="breadcrumb-title pe-3">eCommerce</div>
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Add New Product</li>
                    </ol>
                </nav>
            </div>
        </div>
        <!--end breadcrumb-->

      <div class="card">
          <div class="card-body p-4">
              <h5 class="card-title">Add New Product</h5>
              <hr>
               <div class="form-body mt-4">
                <form action="{{ route('store.product') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="row">
                        <div class="col-lg-8">
                        <div class="border border-3 p-4 rounded">
                            <div class="mb-3">
                                <label for="inputProductTitle" class="form-label">Product Title</label>
                                <input type="text" name="title" class="form-control" id="inputProductTitle">
                            </div>
                            <div class="mb-3">
                                <label for="inputProductCode" class="form-label">Product Code</label>
                                <input type="text" name="product_code" class="form-control" id="inputProductCode">
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Product Thamnail</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="file" class="form-control" name="image" id="image" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <img id="previewImg" src="{{ URL::to('upload/no_image.jpg')  }}" width="110" height="110">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Image One</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="file" class="form-control" name="image_one" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Image Two</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="file" class="form-control" name="image_two" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Image Three</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="file" class="form-control" name="image_three" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Image Four</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="file" class="form-control" name="image_four" />
                                </div>
                            </div>

                            <div class="mb-3">
                                <label for="inputProductDescription" class="form-label">Short Description</label>
                                <textarea name="short_description" class="form-control" id="inputProductDescription" rows="3"></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="mytextarea" class="form-label">Long Description</label>
                                <textarea name="long_description" id="mytextarea" name="mytextarea">Hello, World!</textarea>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="border border-3 p-4 rounded">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label for="inputPrice" class="form-label">Price</label>
                                    <input type="number" name="price" class="form-control" id="inputPrice">
                                </div>
                                <div class="col-md-6">
                                    <label for="inputCompareatprice" class="form-label">Special Price</label>
                                    <input type="number" name="special_price" class="form-control" id="inputCompareatprice">
                                </div>
                                <div class="col-12">
                                    <label for="inputProductType" class="form-label">Category</label>
                                    <select name="category" class="form-select" id="inputProductType">
                                        <option>--Select--</option>
                                        @foreach($categories as $category)
                                        <option value="{{ $category->category_name }}">{{ $category->category_name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="col-12">
                                    <label for="inputProductType" class="form-label">Sub-Category</label>
                                    <select name="subcategory" class="form-select" id="inputProductType">
                                        <option>--Select--</option>
                                        @foreach($subcategories as $scategory)
                                        <option value="{{ $scategory->subcategory_name }}">{{ $scategory->subcategory_name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="col-12">
                                    <label for="inputVendor" class="form-label">Brand</label>
                                    <select name="brand" class="form-select" id="inputVendor">
                                        <option>--Select--</option>
                                        <option value="Apple">Apple</option>
                                        <option value="Tony">Tony</option>
                                        <option value="OPPO">OPPO</option>
                                        <option value="WALTON">WALTON</option>
                                        <option value="MOTROLA">MOTROLA</option>
                                        <option value="Nokia">Nokia</option>
                                        <option value="Canon">Canon</option>
                                        <option value="Top Ten">Top Ten</option>
                                        <option value="SpaceWood">SpaceWood</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <label for="inputCollection" class="form-label">Size</label>
                                    <input type="text" name="size" class="form-control" data-role="tagsinput" value="S,M,L,XL">
                                </div>
                                <div class="col-12">
                                    <label for="inputCollection" class="form-label">Color</label>
                                    <input type="text" name="color" class="form-control" data-role="tagsinput" value="Red,Green,Black">
                                </div>
                                <div class="col-12">
                                    <div class="form-check">
                                        <input name="remark" class="form-check-input" type="checkbox" value="" id="FEATURED">
                                        <label class="form-check-label" for="FEATURED">FEATURED</label>
                                    </div>
                                    <div class="form-check">
                                        <input name="remark" class="form-check-input" type="checkbox" value="" id="NEW">
                                        <label class="form-check-label" for="NEW">NEW</label>
                                    </div>
                                    <div class="form-check">
                                        <input name="remark" class="form-check-input" type="checkbox" value="" id="COLLECTION">
                                        <label class="form-check-label" for="COLLECTION">COLLECTION</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="d-grid">
                                        <button type="submit" class="btn btn-primary">Add new</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--end row-->
                </form>
            </div>
          </div>
      </div>
    </div>
</div>
<script type="text/javascript">
    $(document).ready(function(){
        $("#image").change(function(e){
            let reader = new FileReader();
            reader.onload = function(e){
                $('#previewImg').attr('src', e.target.result);
            }
            reader.readAsDataURL(e.target.files[0]);
        });
    });
</script>
<script src='https://cdn.tiny.cloud/1/vdqx2klew412up5bcbpwivg1th6nrh3murc6maz8bukgos4v/tinymce/5/tinymce.min.js' referrerpolicy="origin">
</script>
<script>
    tinymce.init({
      selector: '#mytextarea'
    });
</script>
@endsection
