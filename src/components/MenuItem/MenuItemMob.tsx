import Link from 'next/link'
import React, { ReactHTMLElement } from 'react'

type Props = {
 link: string,
 text: string,
 Icon?: React.ComponentType<any>
 children?:React.ReactNode
 color?: string 
}

function MenuItemMob({ link, text, Icon, children }: Props) {
 return (
  <>
   <Link
    href={link}
    className="flex items-center gap-2.5 text-muted-foreground hover:text-slate-50"
    prefetch={false}
   >
   {Icon ? <Icon className="h-5 w-5 transition-all" /> : children }
    {text}
   </Link>
  </>
 )
}

export default MenuItemMob