import { storyblokEditable } from '@storyblok/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MenuLink = ({ blok }: any) => {
	const router = useRouter();
	// need to prepend a slash to the cached_url, otherwise the comparison will fail
	const isActive = router.asPath === '/' + blok.link.cached_url;
	return (
		<Link
			href={blok.link.cached_url}
			{...storyblokEditable(blok)}
			onClick={() => {
				// close the drawer by clicking the checkbox element with ID: mobile-menu-drawer
				const checkbox = document.getElementById(
					'mobile-menu-drawer'
				) as HTMLInputElement;
				checkbox.checked = false;
			}}
			className={[
				'btn btn-ghost normal-case justify-start lg:justify-center',
				isActive && 'bg-gray-200',
			].join(' ')}>
			{blok.name}
		</Link>
	);
};
export default MenuLink;
