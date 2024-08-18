import { TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip'
import Link from 'next/link'
import React, { ReactElement } from 'react'

type Props = {
 link:string,
 text: string,
 Icon: React.ComponentType<any>
}

function BtnNav({link, text, Icon }: Props) {
 return (
  <>
   <TooltipTrigger asChild>
    <Link
     href={link}
     className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-slate-50"
     prefetch={false}
    >
     <Icon className="h-5 w-5 " />
     <span className="sr-only">{text}</span>

    </Link>
   </TooltipTrigger>
   <TooltipContent side="right">{text}</TooltipContent>
  </>
 )
}

export default BtnNav