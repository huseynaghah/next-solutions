import './comments-card.component.scss';
import {ICommentsCard} from '@/app/components/comments-card/comments-card';
import {Triangles} from '@/assets/icons/arrows';


const CommentsCardComponent = ({name, surname, comment, position, photo} : ICommentsCard) => {

    return (
        <div className={'comments-card'}>
            <div className={'comments-card-photo'}>
                <img src={photo} className={'img-circle'} />
            </div>
            <div className={'comments-card-content'}>
                <p className={'comments-card-content__name'}>
                    {name}
                </p>
                <p className={'comments-card-content__name'}>
                    {surname}
                </p>
                <p className={'comments-card-content__position'}>
                    {position}
                </p>
                <div className={'comments-card-content__triangles'}>
                    <Triangles/>
                </div>
                <p className={'comments-card-content__message'}>
                    {comment}
                </p>
            </div>
        </div>
    );
};

export default CommentsCardComponent;