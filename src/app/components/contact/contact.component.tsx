'use client';
import './contact.component.scss';
import classnames from 'classnames';
import {FacebookIcon, LinkedinIcon, XIcon} from '@/assets/icons/socials';
import {InView} from 'react-intersection-observer';
import classNames from 'classnames';
import {useState} from 'react';
import {store} from '@/store/store.config';
import {setActiveSection} from '@/store/store.reducer';
import {contact} from '../../../../public/static-data/static-data';


const ContactComponent = () => {

    const [animate, setAnimate] = useState<boolean>(false);

    const {address, phone, text, socials, email} = contact;

    return (

        <InView threshold={0.3} >

            {({inView, ref}) => {

                if(inView) setAnimate(true);

                if (inView) store.dispatch(setActiveSection('contact'));
                

                const contactClass = classnames({
                    'contact': true,
                    'contact-fade-animation': animate
                });

                const headingClass = classNames({
                    'contact-wrapper-content__heading': true,
                    'text-fade-up': animate,
                });

                const textClass = classNames({
                    'contact-wrapper-content__text': true,
                    'text-fade-up': animate
                });

                const detailClass = classNames({
                    'contact-wrapper-content__details': true,
                    'detail-fade-up': animate
                });

                const socialClass = classNames({
                    'contact-wrapper-content__social': true,
                    'social-fade-up': animate
                });

                return (
                    <section className={contactClass} id='contact' ref={ref}>
                        <div className={'contact-wrapper'}>
                            <div className={'container'}>
                                <div className={'row'}>
                                    <div className={'col-xl-6'}>
                                        <div className={'contact-wrapper-content'}>

                                            <p className={headingClass}>
                                                Əlaqə məlumatları
                                            </p>
                                            <p className={textClass}>
                                                {text}
                                            </p>
                                            <div className={detailClass}>
                                                <div>
                                                    <p className={'contact-wrapper-content__details_line1'}>
                                                        Ünvan
                                                    </p>
                                                    <p className={'contact-wrapper-content__details_line2'}>
                                                        {address}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className={'contact-wrapper-content__details_line1'}>
                                                        Telefon
                                                    </p>
                                                    <p className={'contact-wrapper-content__details_line2'}>
                                                        {phone}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className={'contact-wrapper-content__details_line1'}>
                                                        Email
                                                    </p>
                                                    <p className={'contact-wrapper-content__details_line2'}>
                                                        {email}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={socialClass}>
                                                <a href={socials.facebook} target='_blank'>
                                                    <FacebookIcon/>
                                                </a>
                                                <a href={socials.linkedin} target='_blank'>
                                                    <LinkedinIcon/>
                                                </a>
                                                <a href={socials.x} target='_blank'>
                                                    <XIcon/>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                    <div className={'col-xl-6 right-non-display'}>

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

export default ContactComponent;