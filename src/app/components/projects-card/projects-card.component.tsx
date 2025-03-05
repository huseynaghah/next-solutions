import './projects-card.component.scss';
import {IProjectCard} from '@/app/components/projects-card/project-card';


const ProjectCardComponent = ({title, definition, image} : IProjectCard) => {
    return (
        <div className={'col-xl-6 bg-child'}>
            <div className={'projects-wrapper-card'}>
                <img className={'projects-wrapper-card__image'} src={image} alt={'projects'} />
                <div className={'projects-wrapper-card__content'}>
                    <div className={'projects-wrapper-card__content__stone'}></div>
                    <div className={'projects-wrapper-card__content__typo'}>
                        <p className={'projects-wrapper-card__content__typo-title'}>
                            {title}
                        </p>
                        <p className={'projects-wrapper-card__content__typo-description'}>
                            {definition}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCardComponent;