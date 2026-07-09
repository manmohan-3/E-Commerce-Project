import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

function Signup() {
    const [formType, setformType] = useState('')
    const Navigate=useNavigate()
    const handlenavigate=()=>{
        Navigate("/login")
    }
    return (<>
        <form>
            <table>
                <tr>
                    <td><label htmlFor="">Enter Your Name:</label></td>
                    <td><input type="text" placeholder="Enter your name" /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Enter Date of Birth:</label></td>
                    <td><input type="date" /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Enter Mobile number:</label></td>
                    <td><input type="number" placeholder="Enter the mobile number" /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Enter the email:</label></td>
                    <td><input type="email" placeholder="Enter the email" /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Set the password:</label></td>
                    <td><input type="password" placeholder="Set a strong password" /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Enter City name:</label></td>
                    <td><input type="text" placeholder="Enter the city name" /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Enter State:</label></td>
                    <td><input type="text" placeholder="Enter state name" /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Enter Country:</label></td>
                    <td><input type="text" placeholder="Enter COuntry Name" /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Enter the Pincode:</label></td>
                    <td><input type="number" placeholder="enter your pincode" /></td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <select name="" id="" onChange={(e)=>setformType(e.target.value)}>
                            <option value="">CHOOSE THE OPTION</option>
                            <option value="customer">Customer</option>
                            <option value="vendor">Vendor</option>
                        </select>
                    </td>
                </tr>
                {formType == 'vendor' && (<>
                    <tr>
                        <td><label htmlFor="">Enter Company name:</label></td>
                        <td><input type="text" placeholder="Enter company name" /></td></tr>
                    <tr>
                        <td><label htmlFor="">Enter PanCard:</label></td>
                        <td><input type="text" placeholder="Enter pancard number" /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Enter bank name:</label></td>
                        <td><input type="text" placeholder="Enter bank name" /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Enter bank account number:</label></td>
                        <td><input type="text" placeholder="Enter accouont number" /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Enter IFSC code:</label></td>
                        <td><input type="text" placeholder="Enter ifsc code" /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Enter upi Id:</label></td>
                        <td><input type="text" placeholder="Enter upi id" /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Enter store name:</label></td>
                        <td><input type="text" placeholder="Store name" /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Enter Store Details:</label></td>
                        <td><input type="text" placeholder="Enter Store details" /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Web URL:</label></td>
                        <td><input type="text" placeholder="Company web URL" /></td>
                    </tr>

                </>)}
                <tr>
                    <td><button  onClick={handlenavigate}>Login</button></td>
                    <td><button>Signup</button></td>
                </tr>
            </table>
        </form>
    </>)
}
export default Signup;