'use client';

import './about-us.component.scss';
import {useState} from 'react';
import {aboutUs} from '../../../../public/static-data/static-data';
import {InView} from 'react-intersection-observer';
import classNames from 'classnames';
import {store} from '@/store/store.config';
import {setActiveSection} from '@/store/store.reducer';


const AboutUsComponent = () => {

   const [animate, setAnimate] = useState<boolean>(false);

   const {template} = aboutUs;

    return (
        <InView threshold={0.4}>
            {({inView, ref}) => {

                if(inView) setAnimate(true);

                if(inView) store.dispatch(setActiveSection('aboutus'));

                const imageClass = classNames({
                    'aboutus-card-image': true,
                    'image-animate': animate
                });

                const textClass = classNames({
                    'aboutus-card-text' : true,
                    'text-animate-about' : animate
                });



                return (
                    <section className='aboutus' id='about-us' ref={ref}>
                        <div className={'container'}>
                            <div className={'row'}>
                                <div className={'col-12'}>
                                    <div className={'aboutus-card'}>
                                        <img src={'/images/rocket.svg'} className={imageClass} alt='rocket'/>
                                        <div className={textClass}>
                                            <p className={'aboutus-card-text__title'}>
                                                Haqqımızda
                                            </p>
                                            <p className={'aboutus-card-text__description'} dangerouslySetInnerHTML={{__html : template}}/>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );


            }}


        </InView>
    );
};

export default AboutUsComponent;