import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Banner from '../../components/Banner/Banner'
import TabContainer from '../../components/TabContainer/TabContainer';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <TabContainer />
        </div>
    );
};

export default Home;