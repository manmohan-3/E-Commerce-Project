//SHIVAAAAAHHHH

package servlet;
import java.io.IOException;
import dto.User;
import dao.UserDAO;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class SignupServlet extends HttpServlet{
    protected void dopost(HttpServletRequest req,HttpServletResponse res)throws ServletException,IOException{
        User user=new User();
    }
}