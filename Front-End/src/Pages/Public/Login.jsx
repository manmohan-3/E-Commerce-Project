import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Login.css"

function Login() {
    const Navigate = useNavigate();
    const [error, seterror] = useState({ Email: "", Password: "" });

    const [formData, setformData] = useState({ Email: "", Password: "" });
    const handleChange=(event)=>{
        setformData({...formData,[event.target.name]:event.target.value}),
        seterror({...error,[event.target.name]:""})
    }
    const handleLogin = async (event) => {

        event.preventDefault();
        const newErrors = {
            Email: "", Password: ""
        }
        if (formData.Email.trim() === "") {
            newErrors.Email = "Enter LoginId";
        }
        else if(!/^[A-Za-z0-9_$]+@[A-Za-z]+\.[A-Za-z]{2,}$/.test(formData.Email)){newErrors.Email="Enter a valid email id";}
        if (formData.Password.trim() === "") {
            newErrors.Password = "Enter Password";

        }
        if (newErrors.Email || newErrors.Password) {
            seterror(newErrors);
            return;
        }
        //here FormData is built-in javascript function and login data is reference..
        const loginData=new FormData();
        loginData.append("email",formData.Email);
        loginData.append("password",formData.Password);
        try{
            const response=await axios.post("http://localhost:8080/WebContent/login",loginData); 
            console.log(response.data);
            if(response.data.trim()==="login success"){Navigate("/");}
            else{alert("Enter valid Email and password");}
        }catch(error){console.log(error);}
        console.log(formData);
    }

    return (<>
        <div className="login-container">
            <h2>LOGIN HERE</h2>
            <form onSubmit={handleLogin}>

                <div className="form-group">
                    <label htmlFor="Email">Email or Mobile Number:</label>
                    <input name="Email" id="Email" type="text" value={formData.Email} placeholder="Enter Your Email" 
                    onChange={handleChange} />
                    <p className="error">{error.Email}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Enter Password:</label>
                    <input name="Password" id="password" type="password" value={formData.Password} placeholder="Enter Password" 
                    onChange={handleChange} />
                    <p className="error">{error.Password}</p>
                </div>
                <button className="login-btn" type="submit">Login</button>
                <div className="signup-link">
                    <Link to="/signup">Not a user?</Link>
                </div>
            </form>
        </div>
    </>)
}
export default Login;