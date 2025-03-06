'use client';

import * as animationData from '@/assets/icons/flow.json';
// import Lottie from 'lottie-react';
import dynamic from 'next/dynamic';
//
const Lottie = dynamic(() => import('lottie-react'), {
    ssr: false,
    loading: () => <div style={{height: '100vh'}}></div>
});


import './sunhero.component.scss';
import {CenterLogo} from '@/assets/icons/centerlogo';

const SunheroComponent = () => {


    return (
        <div className={'sunhero'}>
            <div className={'sun-with-lottie'}>
                <Lottie animationData={animationData} loop={true}/>
            </div>
            <div className={'sun-static'}>
                <img src={'images/sun_static.png'} alt='sun'/>
            </div>
            <div className={'sunhero-logo'}>
                <CenterLogo/>
            </div>
        </div>
    );
};

export default SunheroComponent;