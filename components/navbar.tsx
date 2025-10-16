import { Button, LinkButton } from "./ui/button";

const items = [ 
	{ title: 'Home', path: '/' }, 
	{ title: 'Blog', path: '/blog', 
	{ title: 'Resume', path: '/resume' }, 
	{ title: 'Contact', path: '/contact' }, 
	{ title: 'Utils', path: '/utils' }
]
export default function Navbar() {
	return <nav className="flex flex-wrap gap-2 md:flex-nowrap md:gap-4 min-w-full border-b-2 border-black bg-white p-4 justify-center">
		{items.map((it, i) => <LinkButton href={it.path} key={`nav-button-${i}`}>{ it.title }</LinkButton>)}	
	</nav>
}

