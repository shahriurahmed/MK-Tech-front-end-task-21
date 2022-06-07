import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

const Home = () => {
    return (
        <div className='px-5'>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
        </div>
    );
};

export default Home;