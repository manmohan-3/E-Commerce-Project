//SHIVAAAAAHHHH

package servlet;

import java.io.IOException;
import dto.User;
import dao.UserDAO;
import javax.servlet.ServletException;
import java.sql.Date;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/signup")
public class SignupServlet extends HttpServlet {
    @Override
protected void doOptions(HttpServletRequest request,HttpServletResponse response)throws ServletException, IOException {

    response.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setStatus(HttpServletResponse.SC_OK);
}

    protected void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
        try{
        System.out.println("SignupServlet called");
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "*");
        User user = new User();
        System.out.println("user_name = " + request.getParameter("user_name"));
        System.out.println("born_date = " + request.getParameter("born_date"));
        System.out.println("mobile_number = " + request.getParameter("mobile_number"));
        System.out.println("email = " + request.getParameter("email"));
        System.out.println("formtype = " + request.getParameter("formtype"));
        user.setusername(request.getParameter("user_name"));
        user.setdob(Date.valueOf(request.getParameter("born_date")));
        user.setmobile(request.getParameter("mobile_number"));
        user.setemail(request.getParameter("email"));
        user.setpassword(request.getParameter("password"));
        user.setcity(request.getParameter("city_name"));
        user.setstate(request.getParameter("state_name"));
        user.setcountry(request.getParameter("country"));
        user.setpincode(request.getParameter("pincode"));

        user.setuserType(request.getParameter("formtype"));
        user.setcompanyName(request.getParameter("company_name"));
        user.setpanNumber(request.getParameter("pancard"));
        user.setbankName(request.getParameter("bank_name"));
        user.setaccountNumber(request.getParameter("account_number"));
        user.setifscCode(request.getParameter("ifsc_code"));
        user.setupiId(request.getParameter("upi_id"));
        user.setstoreName(request.getParameter("store_name"));
        user.setstoreDescription(request.getParameter("store_details"));
        user.setwebsiteUrl(request.getParameter("web_url"));
        UserDAO userdao = new UserDAO();
        boolean result = userdao.registerUser(user);
        if (result) {
            response.getWriter().println("Register Success");
        } else {
            response.getWriter().println("Register Failed");
        }
        }catch(Exception e){e.printStackTrace();}
    }
}