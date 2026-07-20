//SHIVAAAHHH
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./Signup.css";
function Signup() {
    const [signupData, setsignupData] = useState({
        user_name: "", Born_date: "", Mobile_number: "", Email: "", Password: "", City_name: "", State_name: "", Address:"", 
        Country: "", Pincode: "", formtype: "", Company_name: "", Pancard: "", Bank_name: "", Account_number: "", Ifsc_code: "",
        upi_id: "", Store_name: "", Store_details: "", Web_url: ""
    });
    const [error, seterror] = useState({
        user_name: "", Born_date: "", Mobile_number: "", Email: "", Password: "", City_name: "", State_name: "", Address:"",
        Country: "", Pincode: "", formtype: "", Company_name: "", Pancard: "", Bank_name: "", Account_number: "", Ifsc_code: "",
        upi_id: "", Store_name: "", Store_details: "", Web_url: ""
    });
    const handleChange = (event) => {
        setsignupData({ ...signupData, [event.target.name]: event.target.value }),
        seterror({...error,[event.target.name]:""})
    }
    const handleSignup=(event)=>{
        event.preventDefault();
        const newError={
        user_name: "", Born_date: "", Mobile_number: "", Email: "", Password: "", City_name: "", State_name: "", Address:"",
        Country: "", Pincode: "", formtype: "", Company_name: "", Pancard: "", Bank_name: "", Account_number: "", Ifsc_code: "",
        upi_id: "", Store_name: "", Store_details: "", Web_url: ""
        }
        if(signupData.user_name.trim()===""){newError.user_name="Enter your name";}
        else if(!/^[A-Za-z ]+$/.test(signupData.user_name)){newError.user_name="User name SHould have only alphbets"}
        if(signupData.Mobile_number.trim()===""){newError.Mobile_number="Enter mobile number";}
        else if(!/^[1-0]{10}+$/.test(signupData.Mobile_number)){newError.Mobile_number="Only number with 10 digits"}
        if(signupData.Email.trim()===""){newError.Email="Enter Email";}
        else if(!/^[A-Za-z0-9.%-_+]+@[A-za-z]+\.[A-za-z]{2,}$/.test(signupData.Email)){newError.Email="Use a valid Email"}
        if(signupData.Password.trim()===""){newError.Password="Enter Password";}
        else if(signupData.Password.length<8){newError.Password="Password must contain atleast 8 characters"}
        if(signupData.City_name.trim()===""){newError.City_name="Enter CIty name";}
        else if(!/^[A-Za-z]+$/.test(signupData.City_name)){newError.City_name="City name only with characters(a-z)"}
        if(signupData.State_name.trim()===""){newError.State_name="Enter State name";}
        else if(!/^[A-Za-z]+$/.test(signupData.State_name)){newError.State_name="State name only with characters(a-z)"}
        if(signupData.Address.trim()===""){newError.Address="Enter Address";}
        if(signupData.Country.trim()===""){newError.Country="Enter Country";}
        else if(!/^[A-Za-z]+$/.test(signupData.Country)){newError.Country="Country name with characters(a-z)"}
        if(signupData.Pincode.trim()===""){newError.Pincode="Enter pincode";}
        else if(!/[0-9]{6}$/.test(signupData.Pincode)){newError.Pincode="Pincode only with 6 digits"}
        if(signupData.formtype.trim()==="Vendor")
            {
                if(signupData.Company_name.trim()===""){newError.Company_name="Enter company name";}
                
                if(signupData.Pancard.trim()===""){newError.Pancard="Enter Pancard";}
                else if(!/^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/.test(signupData.Pancard)){newError.Pancard="Enter a valid pancard"}
                if(signupData.Bank_name.trim()===""){newError.Bank_name="Enter Bank name";}
                if(signupData.Account_number.trim()===""){newError.Account_number="Enter Account number";}
                else if(!/^[0-9]{9,18}$/.test(signupData.Account_number)){newError.Account_number="Enter bank number correctly"}
                if(signupData.Ifsc_code.trim()===""){newError.Ifsc_code="Enter Ifsc code";}
                else if(!/^[A-Za-z]{4}0[0-9]{6}$/.test(signupData.Ifsc_code)){newError.Ifsc_code="Enter a valid Ifsc code"}
                if(signupData.Store_name.trim()===""){newError.Store_name="Enter store name";}
                if(signupData.Store_details.trim()===""){newError.Store_details="Enter store details";}
            }
        if(newError.user_name||newError.Mobile_number||newError.Email||newError.Password||newError.City_name||newError.State_name||newError.Pincode
            ||newError.Address||newError.Country||newError.Company_name||newError.Pancard||newError.Bank_name||newError.Account_number||
            newError.Ifsc_code||newError.Store_name||newError.Store_details
        ){
            seterror(newError);
            return;
        }
        try{
            const response=axios.dopost("http://localhost:8080/ECommerce/signup",signupData);
            console.log(response.data);
        }
        catch(error){
            console.log(error);
        }


    }

    return (<>
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <div className="form-group">
                    <label htmlFor="user_name">Enter your name:</label>
                    <input type="text" id="user_name" name="user_name" value={signupData.user_name} onChange={handleChange} placeholder="Enter your name" />
                    <p className="error">{error.user_name}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="Born_date">Choose Date of Birth:</label>
                    <input type="date" id="Born_date" name="Born_date" value={signupData.Born_date} onChange={handleChange} placeholder="MM/DD/YYYY" />
                </div>
                <div className="form-group">
                    <label htmlFor="Mobile_number">Enter Mobile Number:</label>
                    <input type="number" id="Mobile_number" name="Mobile_number" value={signupData.Mobile_number} onChange={handleChange} placeholder="Enter Mobile number" />
                    <p className="error">{error.Mobile_number}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Enter Email:</label>
                    <input type="email" id="Email" name="Email" value={signupData.Email} onChange={handleChange} placeholder="Enter Email" />
                    <p className="error">{error.Email}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Set a Strong Password:</label>
                    <input type="password" id="Password" name="Password" value={signupData.Password} onChange={handleChange} placeholder="Set password" />
                    <p className="error">{error.Password}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="City_name">Enter city name:</label>
                    <input type="text" name="City_name" id="City_name" value={signupData.City_name} onChange={handleChange} placeholder="Choose city" />
                    <p className="error">{error.City_name}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="State_name">Enter State Name:</label>
                    <input type="text" name="State_name" id="State_name" value={signupData.State_name} onChange={handleChange} placeholder="Enter State Name" />
                    <p className="error">{error.State_name}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="Address">Type your full address:</label>
                    <textarea name="Address" id="Address" value={signupData.Address}  onChange={handleChange} placeholder="Full Address"></textarea>
                    <p className="error">{error.Address}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="Country">Enter Country:</label>
                    <input type="text" name="Country" value={signupData.Country} id="Country" onChange={handleChange} placeholder="Enter country name" />
                    <p className="error">{error.Country}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="Pincode">Enter Pincode:</label>
                    <input type="number" name="Pincode" id="Pincode" value={signupData.Pincode} onChange={handleChange} placeholder="Enter pincode" />
                    <p className="error">{error.Pincode}</p>
                </div>
                <div className="form-group">
                    <select name="formtype" id="formtype" value={signupData.formtype} onChange={handleChange}>
                        {/* <option value="">CHOOSE TYPE</option> */}
                        <option value="User">User</option>
                        <option value="Vendor">Vendor</option>
                    </select>
                </div>
                {signupData.formtype === "Vendor" && (<>
                    <h2 className="vendor-heading">Vendor Type</h2>
                    <div className="form-group">
                        <label htmlFor="Company_name">Enter the of Company:</label>
                        <input type="text" name="Company_name" id="Company_name" value={signupData.Company_name} onChange={handleChange} placeholder="Enter company name" />
                        <p className="error">{error.Company_name}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Pancard">Enter PanCard:</label>
                        <input type="text" name="Pancard" id="Pancard" value={signupData.Pancard} onChange={handleChange} placeholder="Enter PanCard Number" />
                        <p className="error">{error.Pancard}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Bank_name">Enter Name of Bank:</label>
                        <input type="text" id="Bank_name" name="Bank_name" value={signupData.Bank_name} onChange={handleChange} placeholder="Enter Bank Name" />
                        <p className="error">{error.Bank_name}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Account_number">Account Number:</label>
                        <input type="number" name="Account_number" id="Account_number" value={signupData.Account_number} onChange={handleChange} placeholder="Enter Account number" />
                        <p className="error">{error.Account_number}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Ifsc_code">Enter Ifsc Code:</label>
                        <input type="text" id="Ifsc_code" name="Ifsc_code" value={signupData.Ifsc_code} onChange={handleChange} placeholder="Enter Ifsc Code" />
                        <p className="error">{error.Ifsc_code}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Upi_id">Enter Upi id:</label>
                        <input type="text" id="Upi_id" name="Upi_id" value={signupData.Upi_id} onChange={handleChange} placeholder="Enter UPI ID" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Store_name">Enter Store Name:</label>
                        <input type="text" name="Store_name" id="Store_name" value={signupData.Store_name} onChange={handleChange} placeholder="Enter your store name" />
                        <p className="error">{error.Store_name}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Store_details">Enter Store Details:</label>
                        <input type="text" name="Store_details" id="Store_details" value={signupData.Store_details} onChange={handleChange} placeholder="Enter store details" />
                        <p className="error">{error.Store_details}</p>
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