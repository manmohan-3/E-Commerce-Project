//SHIVAAAAHH

import java.sql.Connection;
import util.DBConnection;
public class Test{
    public static void main(String[] args){
        try{
            Connection con=DBConnection.getConnection();
            if(con!=null){
                System.out.print("YES");
            }
        }catch(Exception e){e.printStackTrace();};
    }
}