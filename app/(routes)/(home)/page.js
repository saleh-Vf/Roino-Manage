// import Menu from "Components/menu";
// import Footer from "Components/footer";
// import Experience from 'Components/home/experience';
// import Slider from "Components/home/slider";
// import Summary from "Components/home/summary";
// import Features from "Components/home/features";
// import IntroFeatures from "Components/home/introFeatures";
// import Stats from "Components/home/stats";
// import Services from "Components/home/services";
// import AboutUs from "@/app/components/home/aboutUs";
import dynamic from "next/dynamic";

const Menu = dynamic(()=> import('Components/menu') , {loading: () => <p>Loading...</p>});
const Footer = dynamic(()=> import('Components/footer') , {loading: () => <p>Loading...</p>});
const Experience = dynamic(()=> import('Components/home/experience') , {loading: () => <p>Loading...</p>});
const Slider = dynamic(()=> import('Components/home/slider') , {loading: () => <p>Loading...</p>});
const Summary = dynamic(()=> import('Components/home/summary') , {loading: () => <p>Loading...</p>});
const Features = dynamic(()=> import('Components/home/features') , {loading: () => <p>Loading...</p>});
const IntroFeatures = dynamic(()=> import('Components/home/introFeatures') , {loading: () => <p>Loading...</p>});
const Stats = dynamic(()=> import('Components/home/stats') , {loading: () => <p>Loading...</p>});
const Services = dynamic(()=> import('Components/home/services') , {loading: () => <p>Loading...</p>});
const AboutUs = dynamic(()=> import('@/app/components/home/aboutUs') , {loading: () => <p>Loading...</p>});



const Home = () => {
    return (
        <>
            <Menu/>
            <Summary/>
            <Features/>
            <IntroFeatures/>
            <Stats/>
            <Experience />
            <Slider />
            <Services />
            
            <AboutUs />
            <Footer/>
        </>
        
    )
}

export default Home;