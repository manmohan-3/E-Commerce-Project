import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate=useNavigate();
    const handlesignup=()=>{
        navigate("/signup")
    }
    return(<>
        <form action="">
            <table>
                <tr>
                    <td><label htmlFor="">Enter username:</label></td>
                    <td><input type="text" placeholder="Enter username"/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Enter password:</label></td>
                    <td><input type="password" placeholder="Enter the password" /></td>
                </tr>
                <tr>
                    <td><button>Login</button></td>
                    <td><button onClick={handlesignup}>Signup</button></td>
                </tr>

            </table>
        </form>
    </>)
}
export default Login;