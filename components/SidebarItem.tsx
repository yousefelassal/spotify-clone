import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

export default function SidebarItem({icon: Icon, label, active, href}: {icon: IconType, label: string, active: boolean, href: string}) {
  return (
    <Link 
        href={href}
        className={twMerge(`
            flex flex-row h-auto items-center gap-x-4 w-full text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1
        `, active && 'text-white')}
    >
        <Icon size={26} />
        <span className="truncate w-full">{label}</span>
    </Link>
  )
}
