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
            <Lottie animationData={animationData} loop={true}/>
            <div className={'sunhero-logo'}>
                <CenterLogo/>
            </div>
        </div>
    );
};

export default SunheroComponent;