import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { mainText, socialLinks } from '@/lib/texts'

interface Props {
    MainRef: React.MutableRefObject<null>
}

const Main = ({ MainRef }: Props) => {
    return (
        <section className='padding relative isolate flex min-h-[calc(100vh-1rem)] w-full items-center overflow-hidden pb-20 pt-32 lg:pb-24 lg:pt-24' id='Home' ref={MainRef}>
            <div className='grid-surface pointer-events-none absolute inset-0 -z-10 opacity-70' />
            <div className='hero-orb -left-32 top-32 -z-10 h-72 w-72 bg-accent/15' />
            <div className='hero-orb right-0 top-1/3 -z-10 h-96 w-96 bg-indigo-500/10 [animation-delay:-4s]' />
            <div className='mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20'>
                <div className='flex flex-col items-center gap-7 text-center lg:items-start lg:text-left'>
                    <div className='flex items-center gap-3 rounded-md border border-border/70 bg-card/60 px-4 py-2 text-xs text-muted-foreground backdrop-blur'>
                        <span className='h-2 w-2 animate-pulse rounded-full bg-emerald-400' />
                        Available for select projects
                    </div>
                    <h1 className='max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.08em] md:text-7xl lg:text-8xl'>{mainText.h1}</h1>
                    <p className='max-w-xl text-base leading-7 text-muted-foreground lg:text-lg'>{mainText.h2}</p>
                </div>
                <div className='relative mx-auto flex w-full max-w-md flex-col gap-4 lg:mx-0'>
                    <div className='pointer-events-none absolute -inset-5 rounded-2xl border border-accent/10' />
                    <div className='relative z-10 rounded-xl border border-border/70 bg-card/80 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl'>
                        <div className='rounded-lg border border-border/60 bg-secondary/70 p-5 font-mono text-sm shadow-inner'>
                            <div className='mb-8 flex items-center gap-2 border-b border-border/60 pb-4'>
                                <span className='h-2.5 w-2.5 rounded-full bg-red-400' /><span className='h-2.5 w-2.5 rounded-full bg-yellow-400' /><span className='h-2.5 w-2.5 rounded-full bg-green-400' />
                                <span className='ml-auto text-[10px] text-muted-foreground'>arnold.dev / home</span>
                            </div>
                            <p className='text-muted-foreground'><span className='text-accent'>const</span> developer = {'{'}</p>
                            <p className='pl-5 text-foreground'>Name: <span className='text-accent'>&quot;Arnold Nillas&quot;</span>,</p>
                            <p className='pl-5 text-foreground'>Focus: <span className='text-accent'>&quot;Useful Service&quot;</span>,</p>
                            <p className='pl-5 text-foreground'>Stack: <span className='text-accent'>&quot;Web + Software&quot;</span>,</p>
                            <p className='pl-5 text-foreground'>Available: <span className='text-emerald-400'>True</span></p>
                            <p className='text-muted-foreground'>{'}'}<span className='ml-2 animate-pulse text-accent'>▋</span></p>
                        </div>
                        <div className='flex items-center justify-between px-2 pb-1 pt-4 text-xs text-muted-foreground'>
                            <span>Scroll to explore</span><FontAwesomeIcon icon={faArrowDown} width={13} height={13} className='animate-bounce text-accent' />
                        </div>
                    </div>
                    <div className='relative z-10 grid grid-cols-2 gap-3'>
                        <Button asChild className='h-12 rounded-md shadow-lg shadow-accent/20'>
                            <a href='#Contact' className='flex items-center gap-2'>
                                {mainText.button}<FontAwesomeIcon icon={faArrowRight} width={13} height={13} className='' />
                            </a>
                        </Button>
                        <Button asChild variant='outline' className='h-12 rounded-md gap-3'>
                            <Link href={socialLinks[1].link} target='_blank'>
                                <FontAwesomeIcon icon={faGithub} width={16} height={16} className='' /> Github
                            </Link>
                        </Button>
                    </div>
                    <div className='relative z-10 grid grid-cols-2 divide-x divide-border rounded-lg border border-border/70 bg-card/60 p-4 text-center backdrop-blur'>
                        <div><p className='text-2xl font-black'>3+</p><p className='text-xs text-muted-foreground'>Years learning</p></div>
                        <div><p className='text-2xl font-black'>4+</p><p className='text-xs text-muted-foreground'>Projects shipped</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main
