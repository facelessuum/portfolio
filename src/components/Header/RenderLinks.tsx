'use client'

import { Icon } from '@/components/ui/icon'
import { faArrowUpRightFromSquare, faBars } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'
import { navigation } from '@/lib/texts'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetTrigger, SheetClose } from '../ui/sheet'

export default function RenderLinks({ activeLink }: { activeLink: string }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
        {navigation.map(link => <a key={link.id} href={`#${link.id}`} aria-current={activeLink === link.id ? 'location' : undefined} className="text-sm text-muted-foreground hover:text-foreground [&[aria-current='location']]:text-accent">{link.label}</a>)}
      </nav>
      <div className="flex items-center gap-3">
        <Button asChild variant="outline" className="group h-10 px-4"><a href="#Contact">Let’s talk <span aria-hidden="true" className="ml-4 text-accent transition-colors duration-200 group-hover:text-accent-foreground"><Icon icon={faArrowUpRightFromSquare} width={14} height={14} aria-hidden="true" /></span></a></Button>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild><Button variant="ghost" className="md:hidden" aria-label="Open navigation"><span aria-hidden="true"><Icon icon={faBars} width={14} height={14} aria-hidden="true" /></span></Button></SheetTrigger>
          <SheetContent className="flex flex-col gap-7">
            <SheetTitle>Explore the portfolio</SheetTitle>
            <SheetDescription>Meet Arnold and explore his work.</SheetDescription>
            <nav aria-label="Mobile navigation" className="flex flex-col gap-6">
              {navigation.map(link => <SheetClose asChild key={link.id}><a href={`#${link.id}`} aria-current={activeLink === link.id ? 'location' : undefined} className="text-sm text-muted-foreground hover:text-foreground [&[aria-current='location']]:text-accent">{link.label}</a></SheetClose>)}
              <SheetClose asChild><a href="#Contact" className="text-sm text-muted-foreground hover:text-foreground [&[aria-current='location']]:text-accent">Contact</a></SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
