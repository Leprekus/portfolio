import { Button, LinkButton } from "./ui/button";

const items = [ 'Home', 'Blog', 'Resume', 'Contact', 'Utils' ];
export default function Navbar() {
	return <nav className="flex flex-wrap gap-2 md:flex-nowrap md:gap-4 min-w-full border-b-2 border-black bg-white p-4 justify-center">
		{items.map((it, i) => <LinkButton href={it.toLowerCase()} key={`nav-button-${i}`}>{ it }</LinkButton>)}	
	</nav>
}

