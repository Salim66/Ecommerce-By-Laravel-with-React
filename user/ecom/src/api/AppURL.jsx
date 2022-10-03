

// create class component
class AppURL {
    static baseURL = "http://localhost:8000/api";
    static visitorDetails = this.baseURL+"/get-visitor";
    static postContact = this.baseURL+"/post-contact";
    static AllSiteInfo = this.baseURL+"/get-site-info";
    static AllCategoryDetails = this.baseURL+"/all-category";

    static productListByRemark(remark){
        return this.baseURL+"/product-list-by-remark/"+remark;
    }

    static productListByCategory(category){
        return this.baseURL+"/product-list-by-category/"+category;
    }

    static productListBySubCategory(category, subcategory){
        return this.baseURL+"/product-list-by-subcategory/"+category+"/"+subcategory;
    }

    static AllSlider = this.baseURL+"/all-slider";

    static productDetails(code){
        return this.baseURL+"/product-details/"+code;
    }

    static NotificationHistory = this.baseURL+"/notification";

    static productBySearch(searchKey){
        return this.baseURL+"/search/"+searchKey;
    }

    static userLogin = this.baseURL+"/login";
    static userData = this.baseURL+"/user";
    static userRegister = this.baseURL+"/register";
    static userForgetPassword = this.baseURL+"/forget-password";
    static userResetPassword = this.baseURL+"/reset-password";

    static similarProduct(code){
        return this.baseURL+"/similar/"+code;
    }

    static reviewList(code){
        return this.baseURL+"/reviewlist/"+code;
    }

    static addToCart = this.baseURL+"/addtocart";
    static cartCount(product_code){
        return this.baseURL+"/cartcount/"+product_code;
    }

    static addToFavourite(product_code, email){
        return this.baseURL+"/favourite/"+product_code+"/"+email;
    }

    static favouriteList(email){
        return this.baseURL+"/favouritelist/"+email;
    }

}

// export default AppURL
export default AppURL;