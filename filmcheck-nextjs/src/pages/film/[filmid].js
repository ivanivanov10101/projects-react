import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from "next/link"

const Filmid = ({ movie }) =>{
    return(
        <div className="col-3 p-15">
            <div className="movies__card">
                <div className="movies__card__img">
                    <LazyLoadImage src={movie.image} alt={movie.image}/>
                </div>
                <div className="movies__card__layer">
                    <div className="movies__card__layer__content">
                        <div className="movies__card__layer__content__movie">
                            {movie.name}
                        </div>
                    </div>
                </div>
                <div className="movies__card__info">
                    <div className="movies__card__info__text">
                        <Link className='btn-white' href={`/film/${movie.id}`}>View</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filmid;
