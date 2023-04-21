import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/Logo.svg';
import { MdArrowDropDown } from 'react-icons/md';

export default function Navigation({ children }: { children: React.ReactNode }) {
	return (
		<div className='drawer'>
			<input
				id='my-drawer-3'
				type='checkbox'
				className='drawer-toggle'
				aria-label='Toggle button'
			/>
			<div className='drawer-content'>
				<div className='w-full fixed navbar bg-white border-b-2'>
					<div className='flex-none lg:hidden'>
						<label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								className='inline-block w-6 h-6 stroke-current'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16M4 18h16'
								></path>
							</svg>
						</label>
					</div>
					<Link href={'/'} className='btn btn-ghost normal-case text-xl'>
						<Image src={Logo} alt='Cafe Faass' width={40} height={40} />{' '}
						<span className='ml-4'>Startseite</span>
					</Link>
					{/* DESKTOP NAVIGATION */}
					<div className='flex-none hidden lg:block ml-auto w-100'>
						<ul className='menu menu-horizontal bg-base-100 rounded-box p-2'>
							<li>
								<Link href={'/about'}>Über uns</Link>
							</li>
							<li tabIndex={0}>
								<span>
									Verein <MdArrowDropDown />
								</span>
								<ul className='rounded-box bg-white p-2 z-50'>
									<li>
										<Link href={'/verein/chronik'}>Chronik</Link>
									</li>
									<li>
										<Link href={'/verein/vorstand'}>Vorstand</Link>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<Link
						className='btn btn-primary ml-auto hidden lg:inline-flex'
						href={'/kontakt'}
					>
						Kontakt
					</Link>
				</div>
				<div className='mt-[82px]'>
					{children}
				</div>
			</div>
			<div className='drawer-side'>
				<label htmlFor='my-drawer-3' className='drawer-overlay'></label>
				{/* MOBILE NAVIGATION */}
				<ul className='menu w-52 bg-base-100 rounded-r-lg p-2'>
					<li>
						<Link href={'/about'}>Über uns</Link>
					</li>
					<li tabIndex={0}>
						<span>
							Veranstaltungen <MdArrowDropDown />
						</span>
						<ul className='rounded-box bg-base-100 p-2'>
							<li>
								<Link href={'/veranstaltungen/laufspass'}>Laufspass</Link>
							</li>
							<li>
								<Link href={'/veranstaltungen/traillauf'}>Traillauf</Link>
							</li>
							<li>
								<Link href={'/veranstaltungen/zeltlager'}>Zeltlager</Link>
							</li>
						</ul>
					</li>
					<li tabIndex={0}>
						<span>
							Verein <MdArrowDropDown />
						</span>
						<ul className='rounded-box bg-base-100 p-2'>
							<li>
								<Link href={'/verein/chronik'}>Chronik</Link>
							</li>
							<li>
								<Link href={'/verein/vorstand'}>Vorstand</Link>
							</li>
						</ul>
					</li>
					<li className='mt-auto'>
						<Link className='btn btn-primary ' href={'/kontakt'}>
							Kontakt
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}