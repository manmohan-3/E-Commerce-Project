//SHIVAAAAHHHHHH                              

package dao;

import dto.User;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import util.DBConnection;

public class UserDAO {
    public boolean registerUser(User user){
        Connection con=null;
        PreparedStatement ps=null;
        try {
        con = DBConnection.getConnection();
        String sql="insert into users(username,dob,mobile,email,password,city,state,pincode,country,user_type,company_name,pan_number,bank_name,account_number,ifsc_code,upi_id,store_name,store_description,website_url) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        ps =con.prepareStatement(sql);
        ps.setString(1, user.getusername());
        ps.setDate(2,user.getdob());
        ps.setString(3, user.getmobile());
        ps.setString(4,user.getemail());
        ps.setString(5, user.getpassword());
        ps.setString(6,user.getcity());
        ps.setString(7, user.getstate());
        ps.setString(8, user.getpincode());
        ps.setString(9,user.getcountry());
        ps.setString(10,user.getuserType());
        ps.setString(11,user.getcompanyName());
        ps.setString(12, user.getpanNumber());
        ps.setString(13,user.getbankName());
        ps.setString(14, user.getaccountNumber());
        ps.setString(15, user.getifscCode());
        ps.setString(16, user.getupiId());
        ps.setString(17, user.getstoreName());
        ps.setString(18,user.getstoreDescription());
        ps.setString(19, user.getwebsiteUrl());
        int row=ps.executeUpdate();
        if(row>0){
            return true;
        }else{
            return false;
        }
        } catch (SQLException e){
            e.printStackTrace();
            return false;
        }finally{
            try {
                if(ps!=null){ps.close();}
                if(con!=null){con.close();}
                
            } catch (SQLException e) {e.printStackTrace();
            }
        }


    }
}