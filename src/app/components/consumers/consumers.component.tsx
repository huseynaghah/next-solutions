'use client';

import './consumers.component.scss';
import Puzzle from '../../../assets/icons/puzzles';
import {InView} from 'react-intersection-observer';
import classNames from 'classnames';
import {useRef, useEffect, useState} from 'react';
import ConsumersCarouselComponent from '@/app/components/consumers-carousel/consumers-carousel.component';
import {store} from '@/store/store.config';
import {setActiveSection} from '@/store/store.reducer';



const ConsumersComponent = () => {



    const [windowInnerWidth, setWindowInnerWidth] = useState<number | null>(null);
    const headerRef =useRef<HTMLDivElement|null>(null);
    const carouselRef = useRef<any>(null);

    const setLeftToHeader= () =>{
        const element = headerRef.current;
        if (element) {
            const elementLeft = element.offsetLeft;
            const haveToLeft = (window.innerWidth - element.offsetWidth) / 2;
            const moveAmount = haveToLeft - elementLeft;
            element.style.transform = `translateX(${moveAmount}px) translateY(-100px)`;
        }
    };
    const setLeft= () =>{
        const cardElement = carouselRef.current?.previousElementSibling?.children[0].children[0];
        if(cardElement !== null && cardElement !== undefined) {
            const cardLeft : number = cardElement.offsetLeft;
            const cardWidth = cardElement.offsetWidth;
            const haveToValue =  cardLeft + (cardWidth / 2);
            carouselRef.current.style.transform = `translateX(${haveToValue}px)`;
            carouselRef.current.style.marginTop = '-271px';
            // carouselRef.current.style.left = `${haveToValue}px`;

        }
    };

    useEffect(() => {
        window.addEventListener('resize', ()=>{
            setWindowInnerWidth(window.innerWidth);
        });
    }, []);


    useEffect(() => {
        setLeft();
        setLeftToHeader();
    }, [windowInnerWidth]);


    const [animate, setAnimate] = useState<boolean>(false);


    return (
        <InView threshold={0.3} >
            {
                ({inView, ref}) => {

                    if(inView) setAnimate(true);

                    if (inView) store.dispatch(setActiveSection('consumers'));


                    const headerClass = classNames({
                        'consumers-content__header' : true,
                        'header-center-back' : animate
                    });

                    const cardClass = classNames({
                        'consumers-card' : true,
                        'card-move' : animate
                    });

                    const textClass = classNames({
                        'consumers-content__text' : true,
                        'text-move' : animate
                    });

                    const sliderClass = classNames({
                        'slider-container-part' : true,
                        'slider-make-visible' : animate
                    });
                    return (
                        <section className='consumers' ref={ref} id='consumers'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-xl-4 consumers-left-col'>
                                        <div className={cardClass}>
                                            <Puzzle/>
                                            <p className={'consumers-card__text'}>
                                                Ehtiyaclarınıza uyğun texnologiyalar
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-xl-8'>
                                        <div className={'consumers-content'}>
                                            <p className={headerClass} ref={headerRef}>
                                                Müştərilərimiz
                                            </p>
                                            <p className={textClass}>
                                                Yaratdığımız innovativ həllər sayəsində müştərilərimiz məlumatları
                                                asanlıqla
                                                idarə edir, mürəkkəb prosesləri sadələşdirir.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={sliderClass} ref={carouselRef}>
                                <ConsumersCarouselComponent/>
                            </div>
                        </section>
                    );
                }
            }
        </InView>
    );
};

export default ConsumersComponent;