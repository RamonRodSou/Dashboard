import { TooltipContent, TooltipTrigger, Tooltip } from '@radix-ui/react-tooltip'
import Link from 'next/link'
import React from 'react'

type Props = {
 link: string,
 text: string,
 Icon: React.ComponentType<any>
 color?: string
}

function MenuItem({ link, text, Icon, }: Props) {
 return (
  <Tooltip>
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
   <TooltipContent className=' text-amber-900' side="right">{text}</TooltipContent>
  </Tooltip>

 )
}

export default MenuItem