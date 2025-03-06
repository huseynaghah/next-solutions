'use client';

import SunheroComponent from '@/app/components/sunhero/sunhero.component';
import './hero.component.scss';

import {InView} from 'react-intersection-observer';
import {store} from '@/store/store.config';
import {setActiveSection} from '@/store/store.reducer';
import {useEffect} from 'react';

const HeroComponent =  () => {

    useEffect(() => {
        document.body.style.overflowY = 'hidden';

        setTimeout(()=>{
            document.body.style.overflowY = 'scroll';
        }, 6800);
    }, []);

    return (

        <InView threshold={0.5}>

            {
                ({inView, ref}) => {

                    if (inView) store.dispatch(setActiveSection('main'));

                    return (
                        <section className='hero' id='main' ref={ref}>
                        <div className='container'>
                            <div className={'row justify-center'}>
                                <div className='col-lg-8 col-md-10 col-sm-12'>

                                    <SunheroComponent/>

                                    <div className={'hero-text'}>
                                        <p className={'hero-text__title'}>
                                            İdeyalarınızı Rəqəmsal Həllərə Çeviririk!
                                        </p>
                                        <p className={'hero-text__paragraph'}>
                                            Yaratdığımız innovativ həllər sayəsində müştərilərimiz məlumatları asanlıqla
                                            idarə edir, mürəkkəb prosesləri sadələşdirir və iş axınlarını effektiv
                                            şəkildə
                                            optimallaşdırırlar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    );
                }
            }
        </InView>
    );
};

export default HeroComponent;