import {useNavigate} from "react-router-dom";
import Link from "next/link"
import Image from "next/image";

const Header = ({heading, paragraph, children, image}) => {

    // const navigate = useNavigate()
    // const goToHome = () =>{
    //     navigate('/');
    // }
    return(
        <div className="header">
            <div className="container">
                <div className="header__logo">
                  <Link href="/"><Image src={"/logo.png"} width={100} height={100} alt="logo-image" /></Link>
                  {/*onClick={goToHome}*/}
                </div>
            </div>
            <div className="header__image">
                {image ? <Image src={image} alt={image}/> : <Image src={"/img.avif"} priority width={0} height={0} style={{ width: '100%', height: 'auto' }} alt="poster" /> }
            </div>
            <div className='header__contents'>
                <div className='container'>
                    <div className='header__contents__text'>
                        <div className='header__contents__text__child'>
                            <h1 className='header__contents__text__child__h1'>{heading}</h1>
                            <p className='header__contents__text__child__p'>{paragraph}</p>
                            <div className='header__contents__text__child__link'>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;

