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
                <Tab>Discover</Tab>
                <Tab>Popular</Tab>
                <Tab>Latest</Tab>
                <Tab>Favorites</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <DiscoverMovies />
                </TabPanel>
                <TabPanel>
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