import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
const MenuLink = ({blok}: any) => (
    <Link href={blok.link.cached_url} {...storyblokEditable(blok)} className="btn btn-ghost normal-case">
        {blok.name}
    </Link>
)
export default MenuLink