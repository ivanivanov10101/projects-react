import Link from "next/link";

const buttons = [
  "Home", "Blog"
]

const Header = ({ button, title }) => {
  return (
    <header className="mb-16 mx-auto before:absolute before:inset-0 before:h-52 before:z-[-2] before:bg-[url('/header.png')] before:bg-cover w-8/12 h-56 pt-8">
      <div className="justify-between flex">
        <img className="h-fit -ml-14" src="/logo.svg" alt="Company Logo"/>
        <nav className="[&>*:not(:last-child)]:mr-8 -mr-6 flex h-fit text-white text-xl font-semibold">
          { buttons.map((option, key) => (
              <Link className={button === option ? "border-b-2 border-b-social-orange" : " "} href={option === buttons[0] ? "/" : `/${option}`} key={key}>
                {option}
              </Link>
            )) }
        </nav>
      </div>
      <h1 className="font-bold mt-5 text-[48px] text-white text-center">{title}</h1>
    </header>
  );
}


export default Header;
