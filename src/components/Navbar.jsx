import { Link } from "react-router-dom"

const navLinks = [
    {
        name: "Home",
        link: "/",
        id: 1
    },
    {
        name: "About",
        link: "/about",
        id: 2
    },
    {
        name: "Products",
        link: "/products",
        id: 3
    }
]

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between bg-violet-300 border-b-2 p-5 border-neutral-500">
            <h1 className="font-medium"><Link to="/">E-Commerce</Link></h1>
            <ul className="flex gap-5">
                {navLinks.map(({id, link, name}) => (
                    <li key={id}>
                        <Link to={link}>{name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar