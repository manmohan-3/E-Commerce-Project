import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css"

function Login() {
    const Navigate = useNavigate();
    const [formData, setformData] = useState({ LoginId: "", Password: "" });

    return (<>
        <div className="login-container">
            <h2>LOGIN HERE</h2>
            <form>

                <div className="form-group">
                    <label htmlFor="LoginId">Email or Mobile Number:</label>
                    <input id="LoginId" type="text" value={formData.LoginId} placeholder="Enter Your Email or Mobile Number" onChange={(props) => setformData({ ...formData, LoginId: props.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Enter Password:</label>
                    <input id="password" type="password" value={formData.Password} placeholder="Enter Password" onChange={(props) => setformData({ ...formData, Password: props.target.value })} />
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