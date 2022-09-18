

// create class component
class AppURL {
    static baseURL = "http://localhost:8000/api";
    static visitorDetails = this.baseURL+"/get-visitor";
    static postContact = this.baseURL+"/post-contact";
    static AllSiteInfo = this.baseURL+"/get-site-info";
}

// export default AppURL
export default AppURL;