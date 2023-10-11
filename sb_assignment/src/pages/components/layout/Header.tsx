import Link from "next/link";

interface HeaderProps {
    activeNav: string;
    title?: string
}

const navOptions = [
    "home", "blog"
]

const Header = ({ activeNav, title }: HeaderProps) => (
    <header
        className="w-9/12 h-52 pt-8 mb-16 mx-auto before:block before:absolute before:inset-0 before:h-52 before:z-[-1] before:bg-[url('/header.png')] before:bg-cover">
        <div className="flex flex-row justify-between max-w-6xl mx-auto">
            <img className="h-fit" src="/logo.svg" alt="Company Logo"/>
            <nav className="flex h-fit text-white text-lg font-semibold [&>*:not(:first-of-type)]:ml-8 [&>*]:block [&>*]:w-fit">
                {
                    navOptions.map(option => (
                        <Link
                            className={activeNav === option ? "border-b-2 border-b-primary-orange" : ""}
                            href={option === navOptions[0] ? "/" : `/${option}`}
                        >
                            {option.charAt(0).toUpperCase() + option.substring(1)}
                        </Link>
                    ))
                }
            </nav>
        </div>

        {
            title &&
          <h1 className="text-[48px] text-white text-center font-bold mt-6">
              {title}
          </h1>
        }
    </header>
);

export default Header;
