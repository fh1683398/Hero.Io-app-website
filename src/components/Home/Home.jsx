import React from 'react';
import Header from '../Header/Header';
import Statics from '../Statics/Statics';
import Footer from '../Footer/Footer';
import TrendingApps from '../All Apps/TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const appsData = useLoaderData()

    return (
        <div>
            <Header></Header>
            <Statics></Statics>
            <TrendingApps appsData={appsData}></TrendingApps>
        </div>
    );
};

export default Home;