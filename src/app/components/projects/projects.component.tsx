'use client';
import dynamic from 'next/dynamic';
import './projects.component.scss';
import {InView} from 'react-intersection-observer';
import * as animationData from '../../../assets/icons/flow2.json';
import ProjectsCardComponent from '@/app/components/projects-card/projects-card.component';
import {ArrowDown} from '@/assets/icons/arrows';
import classNames from 'classnames';
import {store} from '@/store/store.config';
import {setActiveSection} from '@/store/store.reducer';
import {useCallback, useRef, useState} from 'react';
import {projects} from '../../../../public/static-data/static-data';
import {rotate} from 'next/dist/server/lib/squoosh/impl';



const Lottie = dynamic(() => import('lottie-react'), {
    ssr: false
});


const ProjectsComponent = () => {

    const [dataIndex, setDataIndex] = useState<number>(2);

    const reformData = useCallback((arr: any)=> {
        const reformedArray = arr.reduce((acc: any, _: any, i: any) => {
            if (i % 2 === 0) acc.push(arr.slice(i, i + 2));
            return acc;
        }, []);
        //

        return reformedArray.slice(0, dataIndex);
    }, [dataIndex]);

    const wrapperRef = useRef<HTMLDivElement>(null);

    const increaseIndex = useCallback(() => {
        if(dataIndex >= projects.length/2) {
            setDataIndex(2);
            wrapperRef.current?.scrollIntoView();
        }else{
            setDataIndex(dataIndex+1);
        }

    }, [dataIndex]);

    const reformedData = reformData(projects);




    const [animate, setAnimate] = useState<boolean>(false);
    return (

        <InView threshold={0.05}>
            {({inView, ref}) => {

                if (inView) setAnimate(true);

                if (inView) store.dispatch(setActiveSection('projects'));

                const wrapperClass = classNames({
                    'projects-wrapper': true,
                    'wrapper-animate': animate
                });

                const titleClass = classNames({
                    'projects-wrapper-title': true,
                    'title-description-animate': animate
                });

                const descriptionClass = classNames({
                    'projects-wrapper-description': true,
                    'title-description-animate': animate

                });

                const rowClass = classNames({
                    'row': true,
                    'bg-cont': true,
                    'row-animate': animate
                });


                return (

                    <section className='projects' id='projects' ref={ref}>
                        <div className={wrapperClass} ref={wrapperRef}>

                            <div className={'container'}>
                                <h1 className={titleClass}>
                                    Layihələr
                                </h1>
                                <div className={'row'}>
                                    <div className={'col-lg-8'}>
                                        <p className={descriptionClass}>
                                            Müxtəlif sahələr üzrə həyata keçirdiyimiz uğurlu layihələr, innovativ
                                            texnologiyalar və yaradıcılıq əsasında qurulmuş həllər təqdim edir. Hər
                                            bir
                                            layihəmiz müştərilərimizin ehtiyaclarına uyğun olaraq hazırlanır və
                                            proseslərin
                                            effektiv idarə olunmasını təmin edir.
                                        </p>
                                    </div>
                                </div>

                                {
                                    reformedData.map((project: any, i: number) => {


                                        return (

                                            <div className={rowClass} key={i}>
                                                <div
                                                    className={(i & 1) === 0 ? 'projects-background projects-background-even' : 'projects-background projects-background-odd'}>
                                                    <Lottie animationData={animationData} loop={true}/>
                                                </div>
                                                <ProjectsCardComponent
                                                    definition={project[0].definition}
                                                    title={project[0].title} image={project[0].image}/>
                                                {
                                                    project.length === 2 ?
                                                        <ProjectsCardComponent
                                                            definition={project[1].definition}
                                                            title={project[1].title} image={project[1].image}/>
                                                        :
                                                        <></>
                                                }
                                            </div>
                                        );
                                    })
                                }

                                <div className={'row'}>
                                    <div className={'col-12'}>
                                        <div className={'projects-more'} onClick={increaseIndex}>
                                            <span style={dataIndex >= projects.length/2 ? {transform: 'rotate(180deg)'}: {}}>
                                                <ArrowDown/>
                                            </span>
                                            <p className={'projects-more-typo'}>
                                                {dataIndex >= projects.length/2 ? 'Azalt' : 'Daha çox' }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            }}
        </InView>
    )
        ;
};

export default ProjectsComponent;