<div class="sidebar-wrapper" data-simplebar="true">
    <div class="sidebar-header">
        <div>
            <img src="{{ asset('backend/assets') }}/images/logo-icon.png" class="logo-icon" alt="logo icon">
        </div>
        <div>
            <h4 class="logo-text">Recoo Shop</h4>
        </div>
        <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
        </div>
    </div>
    <!--navigation-->
    <ul class="metismenu" id="menu">
        <li>
            <a href="{{ route('dashboard') }}">
                <div class="parent-icon"><i class='bx bx-home-circle'></i>
                </div>
                <div class="menu-title">Dashboard</div>
            </a>
        </li>
        <li class="menu-label">Manage Site</li>
        <li>
            <a href="javascript:;" class="has-arrow">
                <div class="parent-icon"><i class='bx bx-cart'></i>
                </div>
                <div class="menu-title">Category</div>
            </a>
            <ul>
                <li> <a href="{{ route('get.all.category') }}"><i class="bx bx-right-arrow-alt"></i>All Category</a>
                </li>
                <li> <a href="{{ route('add.category') }}"><i class="bx bx-right-arrow-alt"></i>Add Category</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="javascript:;" class="has-arrow">
                <div class="parent-icon"><i class='bx bx-bookmark-heart'></i>
                </div>
                <div class="menu-title">Sub-Category</div>
            </a>
            <ul>
                <li> <a href="{{ route('get.all.subcategory') }}"><i class="bx bx-right-arrow-alt"></i>All Sub-Category</a>
                </li>
                <li> <a href="{{ route('add.subcategory') }}"><i class="bx bx-right-arrow-alt"></i>Add Sub-Category</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="javascript:;" class="has-arrow">
                <div class="parent-icon"><i class='bx bx-donate-blood'></i>
                </div>
                <div class="menu-title">Product</div>
            </a>
            <ul>
                <li> <a href="{{ route('get.all.product') }}"><i class="bx bx-right-arrow-alt"></i>All Product</a>
                </li>
                <li> <a href="{{ route('add.product') }}"><i class="bx bx-right-arrow-alt"></i>Add Product</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="javascript:;" class="has-arrow">
                <div class="parent-icon"><i class='bx bx-repeat'></i>
                </div>
                <div class="menu-title">Slider</div>
            </a>
            <ul>
                <li> <a href="{{ route('get.all.slider') }}"><i class="bx bx-right-arrow-alt"></i>All Slider</a>
                </li>
                <li> <a href="{{ route('add.slider') }}"><i class="bx bx-right-arrow-alt"></i>Add Slider</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="{{ route('all.contact') }}">
                <div class="parent-icon"><i class='bx bx-message-square-edit'></i>
                </div>
                <div class="menu-title">All Contact Message</div>
            </a>
        </li>
        <li>
            <a href="{{ route('all.review') }}">
                <div class="parent-icon"><i class='bx bx-grid-alt'></i>
                </div>
                <div class="menu-title">All Review</div>
            </a>
        </li>
        <li>
            <a href="{{ route('site.info') }}">
                <div class="parent-icon"><i class='bx bx-support'></i>
                </div>
                <div class="menu-title">Site Info</div>
            </a>
        </li>

        <li class="menu-label">Manage Order</li>
        <li>
            <a href="javascript:;" class="has-arrow">
                <div class="parent-icon"><i class='bx bx-repeat'></i>
                </div>
                <div class="menu-title">Orders</div>
            </a>
            <ul>
                <li> <a href="{{ route('pending.orders') }}"><i class="bx bx-right-arrow-alt"></i>Pending Order</a>
                </li>
                <li> <a href="{{ route('pending.orders') }}"><i class="bx bx-right-arrow-alt"></i>Processing Order</a>
                </li>
                <li> <a href="{{ route('pending.orders') }}"><i class="bx bx-right-arrow-alt"></i>Complete Order</a>
                </li>
            </ul>
        </li>
    </ul>
    <!--end navigation-->
</div>
