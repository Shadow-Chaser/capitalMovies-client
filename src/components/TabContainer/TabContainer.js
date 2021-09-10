import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import DiscoverMovies from '../Movies/DiscoverMovies/DiscoverMovies';
import PopularMovies from '../Movies/PopularMovies/PopularMovies';
import LatestMovies from '../Movies/LatestMovies/LatestMovies';
import FavoriteMovies from '../Movies/FavoriteMovies/FavoriteMovies';


const TabContainer = () => {
    return (
        <Tabs isFitted variant="enclosed" colorScheme="green">
            <TabList>
                <Tab _selected={{ color: "white", bg: "#008080", fontWeight: 'bolder' }}>Popular</Tab>
                <Tab _selected={{ color: "white", bg: "#008080", fontWeight: 'bolder' }}>Latest</Tab>
                <Tab _selected={{ color: "white", bg: "#008080", fontWeight: 'bolder' }}>Favorites</Tab>
            </TabList>
            <TabPanels>
                <TabPanel >
                    <PopularMovies />
                </TabPanel>
                <TabPanel>
                    <LatestMovies />
                </TabPanel>
                <TabPanel>
                    <FavoriteMovies />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default TabContainer;