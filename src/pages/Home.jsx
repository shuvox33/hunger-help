import Banner from "../components/Banner";
import FeatureFoods from "../components/FeatureFoods";
import Lottie from 'lottie-react';
import animationData from '../../public/Animation.json';
import animation1Data from '../../public/Animation 1.json';


const Home = () => {
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
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary ">Get Started</button>
                    </div>
                </div>
            </div>
            <div className=" max-w-7xl mx-auto  mt-20">
                <div className="flex flex-row-reverse">
                    <div className="w-1/2 ">
                        <Lottie className="h-[400px] " animationData={animation1Data} />
                    </div>
                    <div className="w-1/2 flex flex-col  justify-center">
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary ">Get Started</button>
                    </div>
                </div>
            </div>

            

        </div>
    );
};

export default Home;