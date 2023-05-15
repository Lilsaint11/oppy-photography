import Hero from '../components/hero'
import Sections from '../components/sections';
import WhatToExpect from '../components/whatToExpect';

const Home = () => {
    return ( 
        <div className="flex flex-col  gap-10 justify-between mt-10">
            <Hero />
            <Sections />
            <WhatToExpect />
        </div>
     );
}
 
export default Home;