import React from 'react';
import MainLayout from '../../Layout/MainLayout';
import Dashboard from '../../Layout/Dashboard';
import RootLayout from '../../Layout/RootLayout';

const Index = () => {
    return (
        <div>
            {/* <MainLayout>
                <Dashboard/>
            </MainLayout> */}
        <RootLayout>
            <Dashboard/>
        </RootLayout>
        </div>
    );
};

export default Index;
