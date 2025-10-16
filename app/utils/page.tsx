import { Button, LinkButton } from "@/components/ui/button";
import { utilsContent } from "@/skeleton/utils";
import Image from "next/image";
import Link from "next/link";
export default function Utils() {
	return <div className='w-full p-3 flex flex-col items-center justify-center gap-4'>
		<h1 className='font-bold text-3xl'>{utilsContent.title}</h1>
		<p className='text-sm text-gray-700'>{utilsContent.description}</p>
		
		<ul>
		{utilsContent.utils.map((u, i) => 
			<li key={`util-${i}`} className='h-86 w-64 border-2 border-black'>
			<div className='w-64 h-48 relative'>
			{u.image_url ? (
				<Image
				src={u.image_url}
				alt={u.title}
				fill
				className="object-cover"
				/>
              		) : (
			<div className="absolute inset-0 bg-black flex items-center justify-center text-xs uppercase tracking-[0.3em] text-white">
			  Preview Coming Soon
			</div>)}
			</div>
			<div className='px-2 flex flex-col items-center'>
			<p className='font-sm font-semibold'>{u.title}</p>
			<p className='text-xs/6 font-mono text-gray-700'>{u.description}</p>
			<LinkButton target="_blank" href={u.project_url} className='align-self-center'>View</LinkButton>
			</div>
			</li>
		)}	
		</ul>
	</div>;

}
