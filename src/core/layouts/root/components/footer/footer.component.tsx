import {FooterLogo} from '@/assets/icons/logo';
import './footer.component.scss';

const FooterComponent = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='footer-left'>
                            <FooterLogo/>
                            <p className={'footer-left-text all-rights-web'}>Copyright © NextSolutions LLC | All rights reserved.</p>
                        </div>
                    </div>
                    <div className='col-lg-2'>
                        <div className='footer-right footer-right-first'>
                            <a href='#'>Əsas səhifə</a>
                            <a href='#'>Müştərilərimiz</a>
                            <a href='#'>Layihələr</a>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='footer-right'>
                            <a href='#'>Haqqımızda</a>
                            <a href='#'>Rəylər</a>
                            <a href='#'>Əlaqə</a>
                            <p className={'footer-left-text all-rights-mobile'}>Copyright © NextSolutions LLC | All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;