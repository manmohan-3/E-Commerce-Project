//SHIVAAAAHHHH

package dto;

import java.sql.Date;
import java.sql.Timestamp;

public class User {
    private long userId;
    private String username;
    private Date dob;
    private String mobile;
    private String email;
    private String password;
    private String city;
    private String state;
    private String pincode;
    private String country;
    private String userType;
    private String companyName;
    private String panNumber;
    private String bankName;
    private String accountNumber;
    private String ifscCode;
    private String upiId;
    private String storeName;
    private String storeDescription;
    private String websiteUrl;
    private String vendorStatus;
    private double rating;
    private Timestamp createdAt;

    public User() {

    }

    // setter methods
    public void setuserId(long userId) {
        this.userId = userId;
    }

    public void setusername(String username) {
        this.username = username;
    }

    public void setdob(Date dob) {
        this.dob = dob;
    }

    public void setmobile(String mobile) {
        this.mobile = mobile;
    }

    public void setemail(String email) {
        this.email = email;
    }

    public void setpassword(String password) {
        this.password = password;
    }

    public void setcity(String city) {
        this.city = city;
    }

    public void setstate(String state) {
        this.state = state;
    }

    public void setpincode(String pincode) {
        this.pincode = pincode;
    }

    public void setcountry(String country) {
        this.country = country;
    }

    public void setuserType(String userType) {
        this.userType = userType;
    }

    public void setcompanyName(String companyName) {
        this.companyName = companyName;
    }

    public void setpanNumber(String panNumber) {
        this.panNumber = panNumber;
    }

    public void setbankName(String bankName) {
        this.bankName = bankName;
    }

    public void setaccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public void setifscCode(String ifscCode) {
        this.ifscCode = ifscCode;
    }

    public void setupiId(String upiId) {
        this.upiId = upiId;
    }

    public void setstoreName(String storeName) {
        this.storeName = storeName;
    }

    public void setstoreDescription(String storeDescription) {
        this.storeDescription = storeDescription;
    }

    public void setwebsiteUrl(String websiteUrl) {
        this.websiteUrl = websiteUrl;
    }

    public void setvendorStatus(String vendorStatus) {
        this.vendorStatus = vendorStatus;
    }

    public void setrating(double rating) {
        this.rating = rating;
    }

    public void setcreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    public long getuserId() {
        return userId;
    }

    public String getusername() {
        return  username;
    }

    public Date getdob() {
        return dob;
    }

    public String getmobile() {
        return mobile;
    }

    public String getemail() {
        return email;
    }

    public String getpassword() {
        return password;
    }

    public String getcity() {
        return city;
    }

    public String getstate() {
        return state;
    }

    public String getpincode() {
        return pincode;
    }

    public String getcountry() {
        return country;
    }

    public String getuserType() {
        return userType;
    }

    public String getcompanyName() {
        return companyName;
    }

    public String getpanNumber() {
        return panNumber;
    }

    public String getbankName() {
        return bankName;
    }

    public String getaccountNumber() {
        return accountNumber;
    }

    public String getifscCode() {
        return ifscCode;
    }

    public String getupiId() {
        return upiId;
    }

    public String getstoreName() {
        return storeName;
    }

    public String getstoreDescription() {
        return storeDescription;
    }

    public String getwebsiteUrl() {
        return websiteUrl;
    }

    public String getvendorStatus() {
        return vendorStatus;
    }

    public double getrating() {
        return rating;
    }

    public Timestamp getcreatedAt() {
        return createdAt;
    }
}