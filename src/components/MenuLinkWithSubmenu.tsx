import { StoryblokComponent } from '@storyblok/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const MenuLinkWithSubmenu = ({ blok }: any) => {
	const router = useRouter();

	const isActive = router.asPath.startsWith(
		'/' + blok.items[0].link.cached_url
	);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='relative' onClick={() => setIsOpen(!isOpen)}>
			<div
				className={[
					'btn btn-ghost h-12 flex justify-between md:justify-center items-center font-semibold normal-case',
					isActive && 'bg-gray-200',
				].join(' ')}>
				{blok.name} <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
			</div>
			{isOpen && (
				<ul className='md:absolute md:top-12 ml-6 md:ml-0 flex flex-col md:w-40 !mt-0 !p-0 bg-white md:rounded-xl md:border md:shadow-md'>
					{blok.items.map((nestedBlok: any) => (
						<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
					))}
				</ul>
			)}
		</div>
	);
};
export default MenuLinkWithSubmenu;
