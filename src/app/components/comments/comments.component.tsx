'use client';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';


import './comments.component.scss';
import CommentsCardComponent from '@/app/components/comments-card/comments-card.component';
import {InView} from 'react-intersection-observer';
import {store} from '@/store/store.config';
import {setActiveSection} from '@/store/store.reducer';

import {comments} from '../../../../public/static-data/static-data';

const CommentsComponent = () => {


    return (

        <InView threshold={0.5}>

            {
                ({inView, ref}) => {

                    if (inView) store.dispatch(setActiveSection('comments'));

                    return (
                        <section className={'comments'} id='comments' ref={ref}>

                            <div className={'comments-heading'}>
                                <p className={'comments-heading-text'}>
                                    Müştərilərimizin bizim haqqımızda dedikləri
                                </p>
                            </div>

                            <div className={'comments-slider'}>
                                <Swiper
                                    centeredSlides={true}
                                    spaceBetween={60}
                                    slidesPerView={'auto'}
                                    loop={true}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    speed={1000}
                                    modules={[Autoplay]}
                                    className='comments-slider-main'
                                >
                                    {
                                        comments.map((user, i) => {
                                            return (
                                                <SwiperSlide key={i}>
                                                    <CommentsCardComponent
                                                        key={i + 'a'}
                                                        comment={user.comment}
                                                        photo={user.photo}
                                                        position={user.position}
                                                        name={user.name}
                                                        surname={user.surname}
                                                    />
                                                </SwiperSlide>
                                            );
                                        })
                                    }
                                    {/*// <SwiperSlide key={1}>*/}
                                    {/*//     <CommentsCardComponent/>*/}
                                    {/*// </SwiperSlide>*/}
                                    {/*// <SwiperSlide key={2}>*/}
                                    {/*//     <CommentsCardComponent/>*/}
                                    {/*// </SwiperSlide>*/}
                                    {/*// <SwiperSlide key={3}>*/}
                                    {/*//     <CommentsCardComponent/>*/}
                                    {/*// </SwiperSlide>*/}
                                    {/*// <SwiperSlide key={3}>*/}
                                    {/*//     <CommentsCardComponent/>*/}
                                    {/*// </SwiperSlide>*/}
                                </Swiper>
                            </div>

                        </section>
                    );
                }
            }
        </InView>
    );
};

export default CommentsComponent;