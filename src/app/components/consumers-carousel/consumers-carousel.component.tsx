import './consumers-carousel.component.scss';
import Marquee from 'react-fast-marquee';
import ConsumerCarouselCardComponent from '@/app/components/consumer-carousel-card/consumer-carousel-card.component';
import {consumers} from '../../../../public/static-data/static-data';

const ConsumersCarouselComponent = () => {


    return (
        <div className='carousel-container'>
            <Marquee autoFill={true} speed={40}>
                {consumers.map((consumerPhoto, i) => (
                    <ConsumerCarouselCardComponent image={consumerPhoto} key={i}/>
                ))
                }


                {/*<ConsumerCarouselCardComponent image={'images/pasha.png'}/>*/}
                {/*<ConsumerCarouselCardComponent image={'images/kapitalbank.png'}/>*/}
                {/*<ConsumerCarouselCardComponent image={'images/etn.png'}/>*/}
            </Marquee>
        </div>
    );

};

export default ConsumersCarouselComponent;