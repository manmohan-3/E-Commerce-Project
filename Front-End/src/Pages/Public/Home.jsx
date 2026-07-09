//SHIVAAAAHHH
import HeroSection from "../../Components/HeroSection";
import Category from "./CategoryCard";


function Home(){
    return(<>
        <HeroSection/>
        <div className="container mt-5">
            <h2 className="text-center mb-4">Shop by category</h2>
            <Category title="Electrical"/>
            <Category title="Lighting"/>
            <Category title="Motors"/>
            <Category title="Batteries"/>
            <Category title="Switches"/>
            <Category title="Tools"/>
        </div>
    </>)
}
export default Home;