'use client';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from '@/store/store.config';
import NavbarComponent from '@/core/layouts/root/components/navbar/navbar.component';
import FooterComponent from '@/core/layouts/root/components/footer/footer.component';

const RootLayoutComponent = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            <Provider store={store}>
                <NavbarComponent/>
                    {children}
                <FooterComponent/>
            </Provider>
        </>
    );
};


export default RootLayoutComponent;

