import './consumer-carousel-card.component.scss';

const ConsumerCarouselCardComponent =  ({image}: { image: string }) => {
    return (
        <div className='consumer-carousel-card'>
            <img src={image} alt={'logo'} />
        </div>
    );
};

export default ConsumerCarouselCardComponent;