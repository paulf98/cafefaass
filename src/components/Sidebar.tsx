import { useState } from "react";
import OpeningHours from "./OpeningHours";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Image from "next/image";
/**
 * Sidebar component that shows news
 * Is hidden on mobile
 */
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button className={["lg:hidden fixed bottom-0.5 btn btn-secondary z-50 right-0 rounded-l-full rounded-r-none"].join(' ')}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <MdChevronRight /> : <MdChevronLeft />}
      </button>
      <aside className={['border-r fixed lg:flex flex-col gap-4 w-full overflow-y-auto lg:w-80 lg:max-w-xs p-6 bottom-0 top-16 bg-base-100 z-40', isOpen ? 'flex right-0' : 'hidden'].join(' ')}>
        <OpeningHours />
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.53827604156!2d7.651195376380364!3d49.17137167863021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47967cc70b77a245%3A0x472a6f80d4ebc4b!2sCaf%C3%A9-Konditorei-B%C3%A4ckerei%20Faass!5e0!3m2!1sen!2sde!4v1682246643381!5m2!1sen!2sde" className="border-0 flex rounded-md shadow-md" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <Image src="/Logo.png" alt="Logo" width={64} height={64} className="mx-auto" />
      </aside>
    </>
  );
}
