import OpeningHours from "./OpeningHours";

/**
 * Sidebar component that shows news
 * Is hidden on mobile
 */
export default function Sidebar() {
  return (
    <aside className='hidden border-r fixed lg:flex flex-col gap-8 w-80 max-w-xs h-screen p-8'>
      <OpeningHours />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.53827604156!2d7.651195376380364!3d49.17137167863021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47967cc70b77a245%3A0x472a6f80d4ebc4b!2sCaf%C3%A9-Konditorei-B%C3%A4ckerei%20Faass!5e0!3m2!1sen!2sde!4v1682246643381!5m2!1sen!2sde" className="border-0 flex rounded-md shadow-md" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </aside>
  );
}
