//SHIVAAAAHHHH

package util;

import java.sql.Connection;
import java.sql.DriverManager;
public class DBConnection{
    private static final String url="jdbc:mysql://localhost:3306/ECommerce";
    private static final String user_name="root";
    private static final String password="Manu@0924";
    public static Connection getConnection(){
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection=DriverManager.getConnection(url,user_name,password);
            return connection;
        }catch(Exception e){e.printStackTrace();}
        return null;
    }
}
