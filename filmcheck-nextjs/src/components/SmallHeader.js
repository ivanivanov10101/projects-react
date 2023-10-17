import Link from "next/link";
import Image from "next/image";

const SmallHeader = ({image}) => {
  const state = {
    poster: './assets/images/img.avif',
    logo: './assets/images/logo.png'
  }

  return(
    <div className='small-header'>
      <div className='container'>
        <div className='small-header__logo'>
          <Link href="/"><Image src={"/logo.png"} width={100} height={100} alt="logo-image" /></Link>
        </div>
      </div>
      <div className='header__image'>
        {image ? <img src={image} alt={image}/> : <img src={state.poster} alt="poster" /> }
      </div>
    </div>
  )
}

export default SmallHeader;

