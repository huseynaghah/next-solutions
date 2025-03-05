// 'use client';

import HeroComponent from '@/app/components/hero/hero.component';
import ConsumersComponent from '@/app/components/consumers/consumers.component';
import ProjectsComponent from '@/app/components/projects/projects.component';
import AboutUsComponent from '@/app/components/about-us/about-us.component';
import CommentsComponent from '@/app/components/comments/comments.component';
import 'swiper/css';
import 'swiper/css/bundle';
import ContactComponent from '@/app/components/contact/contact.component';


const Home = async () => {

    return (
        <main>
            {/*<AosInitComponent/>*/}
            {/*<OpeningAnimation/>*/}
            <HeroComponent/>
            <ConsumersComponent/>
            <ProjectsComponent/>
            <AboutUsComponent/>
            <CommentsComponent/>
            <ContactComponent/>
        </main>
    );
};

export default Home;