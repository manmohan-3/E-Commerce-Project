import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css"

function Login() {
    const Navigate = useNavigate();
    const [error, seterror] = useState({ LoginId: "", Password: "" });

    const [formData, setformData] = useState({ LoginId: "", Password: "" });
    const handleChange=(event)=>{
        setformData({...formData,[event.target.name]:event.target.value}),
        seterror({...error,[event.target.name]:""})
    }
    const handleLogin = (event) => {

        event.preventDefault();
        const newErrors = {
            LoginId: "", Password: ""
        }
        if (formData.LoginId.trim() === "") {
            newErrors.LoginId = "Enter LoginId";
        }
        if (formData.Password.trim() === "") {
            newErrors.Password = "Enter Password";

        }
        if (newErrors.LoginId || newErrors.Password) {
            seterror(newErrors);
            return;
        }
        console.log(formData);
    }

    return (<>
        <div className="login-container">
            <h2>LOGIN HERE</h2>
            <form onSubmit={handleLogin}>

                <div className="form-group">
                    <label htmlFor="LoginId">Email or Mobile Number:</label>
                    <input name="LoginId" id="LoginId" type="text" value={formData.LoginId} placeholder="Enter Your Email or Mobile Number" 
                    onChange={handleChange} />
                    <p className="error">{error.LoginId}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Enter Password:</label>
                    <input name="Password" id="password" type="password" value={formData.Password} placeholder="Enter Password" 
                    onChange={handleChange} />
                    <p className="error">{error.Password}</p>
                </div>
                <button className="login-btn">Login</button>
                <div className="signup-link">
                    <Link to="/signup">Not a user?</Link>
                </div>
            </form>
        </div>
    </>)
}
export default Login;