import './navbar.component.scss';
import {Logo} from '@/assets/icons/logo';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Drawer} from 'antd';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import {useStore} from '@/store/store.config';


const NavbarComponent = () => {

    const activeSectionString = useStore('activeSection');

    console.log('activeSectionString', activeSectionString);

    const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

    const openMobileNav = () => {
        setMobileNavOpen(true);
    };

    const closeMobileNav = () => {
        setMobileNavOpen(false);
    };

    return (
        <header>
            <nav className='navbar'>
                <div className='container navbar-container'>
                    <div className='navbar--content'>
                        <div className='navbar--content__logo'>
                            <Logo/>
                        </div>
                        <div className='navbar--content__links'>
                            <a href={'#main'} className={activeSectionString === 'main' ? 'link-active' : ''}>Əsas səhifə</a>
                            <a href={'#consumers'} className={activeSectionString === 'consumers' ? 'link-active' : ''}>Müştərilərimiz</a>
                            <a href={'#projects'} className={activeSectionString === 'projects' ? 'link-active' : ''}>Layihələr</a>
                            <a href={'#about-us'} className={activeSectionString === 'aboutus' ? 'link-active' : ''}>Haqqımızda</a>
                            <a href={'#comments'}  className={activeSectionString === 'comments' ? 'link-active' : ''}>Rəylər</a>
                            <a href={'#contact'} className={activeSectionString === 'contact' ? 'link-active' : ''}>Əlaqə</a>
                        </div>
                        <div className='navbar--content__mobile' onClick={openMobileNav}>
                            <FontAwesomeIcon icon={faBars} color={'#05082C'}/>
                        </div>
                    </div>
                </div>
            </nav>
            <Drawer open={mobileNavOpen} className='drawer' onClose={closeMobileNav} closeIcon={<FontAwesomeIcon icon={faArrowRight} fontSize={'20px'} color={'#DD2121'} />}>
                <div className='navbar--content__links__mobile'>
                    <a href={'#main'} className={activeSectionString === 'main' ? 'link-active' : ''} onClick={closeMobileNav}>Əsas səhifə</a>
                    <a href={'#consumers'}
                       className={activeSectionString === 'consumers' ? 'link-active' : ''} onClick={closeMobileNav}>Müştərilərimiz</a>
                    <a href={'#projects'}
                       className={activeSectionString === 'projects' ? 'link-active' : ''} onClick={closeMobileNav}>Layihələr</a>
                    <a href={'#about-us'}
                       className={activeSectionString === 'aboutus' ? 'link-active' : ''} onClick={closeMobileNav}>Haqqımızda</a>
                    <a href={'#comments'} className={activeSectionString === 'comments' ? 'link-active' : ''} onClick={closeMobileNav}>Rəylər</a>
                    <a href={'#contact'} className={activeSectionString === 'contact' ? 'link-active' : ''} onClick={closeMobileNav}>Əlaqə</a>
                </div>
            </Drawer>
        </header>
    );
};

export default NavbarComponent;