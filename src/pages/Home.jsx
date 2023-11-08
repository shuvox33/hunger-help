import Banner from "../components/Banner";
import FeatureFoods from "../components/FeatureFoods";
import Lottie from 'lottie-react';
import animationData from '../../public/Animation.json';
import animation1Data from '../../public/Animation 1.json';
import { useEffect } from "react";


const Home = () => {
    useEffect(()=>{
        document.title = "Hunger-Help | Home"
    },[])
    return (
        <div>
            <Banner></Banner>
            <FeatureFoods></FeatureFoods>
            <div className=" max-w-7xl mx-auto  mt-20">
                <div className="flex ">
                    <div className="w-1/2 ">
                        <Lottie className="h-[400px] " animationData={animationData} />
                    </div>
                    <div className="w-1/2 flex flex-col  justify-center">
                        <h1 className="text-5xl font-bold">Share Your Meal!</h1>
                        <p className="py-6">Alleviating hungers burden, fostering strength and resilience in the community, through the simple act of sharing sustenance.</p>
                        <button className="btn btn-primary ">Connect Us</button>
                    </div>
                </div>
            </div>
            <div className=" max-w-7xl mx-auto  mt-20">
                <div className="flex flex-row-reverse">
                    <div className="w-1/2 ">
                        <Lottie className="h-[400px] " animationData={animation1Data} />
                    </div>
                    <div className="w-1/2 flex flex-col  justify-center">
                        <h1 className="text-5xl font-bold">Our Goad</h1>
                        <p className="py-6">our goal is to alleviate hunger and foster a sense of community by providing nourishing meals to those in need. We firmly believe that no one should go to bed hungry, and we are committed to making a positive impact in the lives of individuals and families facing food insecurity. Through our dedicated efforts and your support, we aim to create a sustainable and compassionate system that ensures access to wholesome meals for every member of our community. </p>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Home;