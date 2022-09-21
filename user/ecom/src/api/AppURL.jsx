

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

}

// export default AppURL
export default AppURL;