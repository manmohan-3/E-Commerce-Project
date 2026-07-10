//SHIVAAAHHHH
import CategoryCard from "./CategoryCard"


function Categories(){
    const categoriesList=["Electrical","Lightning","Motor","Batteries","Switches","Tools"];
    return(<>
        <section className="container my-5">
            <h2 className="text-center mb-4">Shop By Category</h2>
            <div className="row">
                
                    {categoriesList.map((category) => (
                        <div className="col-md-4 mb-4">
                            <CategoryCard title={category}/>
                        </div>
                    ))}
                
                
            </div>
        </section>
   </> )
}
export default Categories;