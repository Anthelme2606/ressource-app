import PageLayout from "../layouts/PageLayout";
import "../assets/css/pages/home.css";
import Hero from "../partials/hero";
import Navbar from "../components/Navbar";
import EducationCards from "../components/cards/EducationCard";
const Home=()=>{
return (
    <PageLayout title="Home Page">
        <div className="page-container">
            <Navbar/>
            <Hero/>
            <EducationCards/>
        </div>
    </PageLayout>
);
}
export default Home;