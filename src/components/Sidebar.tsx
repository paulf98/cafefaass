import OpeningHours from "./OpeningHours";

/**
 * Sidebar component that shows news
 * Is hidden on mobile
 */
export default function Sidebar() {
	return (
		<aside className='hidden bg-rose-100 lg:flex flex-col gap-8 w-80 max-w-xs min-h-screen p-8'>
				<OpeningHours />
		</aside>
	);
}
