import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='max-w-[1320px] mx-auto'>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default MainLayout;