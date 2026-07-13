//SHIVAAAHHH
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Signup.css";
function Signup() {
    const [signupData, setsignupData] = useState({
        user_name: "", Born_date: "", Mobile_number: "", Email: "", Password: "", City_name: "", State_name: "",
        Country: "", Pincode: "", formtype: "", Company_name: "", Pancard: "", Bank_name: "", Account_number: "", Ifsc_code: "",
        upi_id: "", Store_name: "", Store_details: "", Web_url: ""
    })
    const handleChange = (event) => {
        setsignupData({ ...signupData, [event.target.name]: event.target.value })
    }
    const handleSignup=()=>{
        event.preventDefault();
    }
    return (<>
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <div className="form-group">
                    <label htmlFor="user_name">Enter your name:</label>
                    <input type="text" id="user_name" name="user_name" value={signupData.user_name} onChange={handleChange} placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label htmlFor="Born_date">Choose Date of Birth:</label>
                    <input type="date" id="Born_date" name="Born_date" value={signupData.Born_date} onChange={handleChange} placeholder="MM/DD/YYYY" />
                </div>
                <div className="form-group">
                    <label htmlFor="Mobile_number">Enter Mobile Number:</label>
                    <input type="number" id="Mobile_number" name="Mobile_number" value={signupData.Mobile_number} onChange={handleChange} placeholder="Enter Mobile number" />
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Enter Email:</label>
                    <input type="email" id="Email" name="Email" value={signupData.Email} onChange={handleChange} placeholder="Enter Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Set a Strong Password:</label>
                    <input type="password" id="Password" name="Password" value={signupData.Password} onChange={handleChange} placeholder="Set password" />
                </div>
                <div className="form-group">
                    <label htmlFor="City_name">Enter city name:</label>
                    <input type="text" name="City_name" id="City_name" value={signupData.City_name} onChange={handleChange} placeholder="Choose city" />
                </div>
                <div className="form-group">
                    <label htmlFor="State_name">Enter State Name:</label>
                    <input type="text" name="State_name" id="State_name" value={signupData.State_name} onChange={handleChange} placeholder="Enter State Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="Country">Enter Country:</label>
                    <input type="text" name="Country" value={signupData.Country} id="Country" onChange={handleChange} placeholder="Enter country name" />
                </div>
                <div className="form-group">
                    <label htmlFor="Pincode">Enter Pincode:</label>
                    <input type="number" name="Pincode" id="Pincode" value={signupData.Pincode} onChange={handleChange} placeholder="Enter pincode" />
                </div>
                <div className="form-group">
                    <select name="formtype" id="formtype" value={signupData.formtype} onChange={handleChange}>
                        <option value="">CHOOSE TYPE</option>
                        <option value="Public">Public</option>
                        <option value="Vendor">Vendor</option>
                    </select>
                </div>
                {signupData.formtype === "Vendor" && (<>
                    <h2 className="vendor-heading">Vendor Type</h2>
                    <div className="form-group">
                        <label htmlFor="Company_name">Enter the of Company:</label>
                        <input type="text" name="Company_name" id="Company_name" value={signupData.Company_name} onChange={handleChange} placeholder="Enter company name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Pancard">Enter PanCard:</label>
                        <input type="text" name="Pancard" id="Pancard" value={signupData.Pancard} onChange={handleChange} placeholder="Enter PanCard Number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Bank_name">Enter Name of Bank:</label>
                        <input type="text" id="Bank_name" name="Bank_name" value={signupData.Bank_name} onChange={handleChange} placeholder="Enter Bank Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Account_number">Account Number:</label>
                        <input type="number" name="Account_number" id="Account_number" value={signupData.Account_number} onChange={handleChange} placeholder="Enter Account number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Ifsc_code">Enter Ifsc Code:</label>
                        <input type="text" id="Ifsc_code" name="Ifsc_code" value={signupData.Ifsc_code} onChange={handleChange} placeholder="Enter Ifsc Code" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Upi_id">Enter Upi id:</label>
                        <input type="text" id="Upi_id" name="Upi_id" value={signupData.Upi_id} onChange={handleChange} placeholder="Enter UPI ID" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Store_name">Enter Store Name:</label>
                        <input type="text" name="Store_name" id="Store_name" value={signupData.Store_name} onChange={handleChange} placeholder="Enter your store name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Store_details">Enter Store Details:</label>
                        <input type="text" name="Store_details" id="Store_details" value={signupData.Store_details} onChange={handleChange} placeholder="Enter store details" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Web_url">Enter Website url:</label>
                        <input type="text" id="Web_url" name="Web_url" value={signupData.Web_url} onChange={handleChange} placeholder="Enter your website url" />
                    </div>

                </>)}
                <button type="submit" className="signup-btn">SignUp</button>
                <div className="login-link">
                    <Link to="/login">Already a user</Link>
                </div>
            </form>
        </div>
    </>)
}
export default Signup;