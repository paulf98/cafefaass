import { storyblokEditable } from '@storyblok/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function SubmenuItem({ blok }: any) {
	const router = useRouter();

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
				'btn btn-ghost w-full normal-case justify-start',
				isActive && 'bg-gray-200',
			].join(' ')}>
			{blok.name}
		</Link>
	);
}
