import { StoryblokComponent } from '@storyblok/react';
import { useRouter } from 'next/router';

const MenuLinkWithSubmenu = ({ blok }: any) => {
	const router = useRouter();

	const isActive = router.asPath.startsWith(
		'/' + blok.items[0].link.cached_url
	);

	return (
		<ul className='menu menu-horizontal p-0 normal-case h-12'>
			<li className='flex-row justify-center items-center'>
				<details>
					<summary
						className={[
							'h-12 flex justify-center items-center font-semibold',
							isActive && 'bg-gray-200',
						].join(' ')}>
						{blok.name}
					</summary>
					<ul
						className='flex flex-col w-40 !mt-0 !p-0 border bg-base-100'
						// close the details element when a link is clicked
						onClick={() => {
							const details = document.querySelector('details[open]');
							if (details) {
								details.removeAttribute('open');
							}
						}}>
						{blok.items.map((nestedBlok: any) => (
							<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
						))}
					</ul>
				</details>
			</li>
		</ul>
	);
};
export default MenuLinkWithSubmenu;
