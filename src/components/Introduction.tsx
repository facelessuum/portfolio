import { introductionText, mainText, socialLinks } from '@/lib/texts';
import Image from 'next/image';
import React from 'react'
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { Label } from './ui/label';
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  IntroductionRef: React.MutableRefObject<null>;
}

const Introduction = ({ IntroductionRef }: Props) => {

  const { paragraphs } = introductionText.text

  return (
    <div className='flex padding flex-col items-center gap-12 py-24 md:gap-16 lg:min-h-screen lg:justify-center lg:py-28' id='Introduction' ref={IntroductionRef}>
      <div className='w-full max-w-7xl space-y-3'>
        <span className='section-kicker'>A little about me</span>
        <h1 className='section-title'>{introductionText.h1}</h1>
      </div>
      <div className='w-full max-w-7xl flex flex-col gap-10 md:flex-row md:items-center md:gap-10 lg:grid lg:grid-cols-[minmax(280px,0.9fr)_1px_minmax(0,1.1fr)] lg:items-stretch lg:gap-14'>
        <div className='relative mx-auto w-full max-w-[420px] md:mx-0 lg:max-w-none lg:self-center'>
          <div className='absolute -inset-3 rounded-2xl border border-accent/30' />
          <Image src={'/icons/avatar.jpg'} width={600} height={600} className='relative aspect-square w-full rounded-xl object-cover' alt='Profile' />
          <div className='absolute bottom-4 left-4 rounded-xl border border-white/15 bg-black/55 px-4 py-3 text-white backdrop-blur-md'>
            <p className='text-sm font-semibold'>Arnold Nillas</p>
            <p className='text-xs text-white/60'>Developer · Problem Solver</p>
          </div>
        </div>
        <Separator className='hidden h-full min-h-[420px] lg:block' orientation='vertical' />
        <div className='flex w-full flex-col gap-5 text-sm text-muted-foreground lg:py-2'>
          <div>
            <Label className='text-xl lg:text-2xl text-foreground'>{introductionText.text.h1}</Label>
            <Separator className='w-24 lg:w-28 h-[3px] rounded-full bg-primary' />
          </div>
          <p data-aos="fade-in" data-aos-duration={1000}>{paragraphs.p1}</p>
          <p data-aos="fade-in" data-aos-duration={1500}>{paragraphs.p2}</p>
          <p data-aos="fade-in" data-aos-duration={2000}>{paragraphs.p3}</p>
          <p data-aos="fade-in" data-aos-duration={2500}>{paragraphs.p4}</p>

          <div className='grid max-w-md grid-cols-1 gap-4 border-y border-border/70 py-5 sm:grid-cols-3 sm:gap-3 sm:text-left'>
            <div><p className='text-xl font-black text-foreground'>6+</p><p className='text-xs text-muted-foreground'>Projects</p></div>
            <div><p className='text-xl font-black text-foreground'>3+</p><p className='text-xs text-muted-foreground'>Years Learning</p></div>
            <div><p className='text-xl font-black text-foreground'>∞</p><p className='text-xs text-muted-foreground'>Curiosity</p></div>
          </div>

          <div className='mt-auto flex items-center flex-col gap-5 sm:flex-row md:flex-col xl:flex-row  w-full'>
            <div className='flex items-center gap-5 w-full sm:w-auto'>
              <Button asChild className='w-full'>
                <ScrollLink to='Contact' href='#Contact' smooth={true} duration={1500}>
                  {mainText.button}
                </ScrollLink>
              </Button>
              <Button asChild className='w-full' variant={'secondary'}>
                <a href="/arnoldresume.pdf" download={'arnold_resume'}>
                  Download CV
                </a>
              </Button>
            </div>
            <ul className='flex items-center gap-5 text-foreground'>
              {socialLinks.map(link => (
                <Link href={link.link} target='_blank' key={link.link}>
                  <Button variant={'ghost'} className='px-3'>
                    <FontAwesomeIcon icon={link.icon} width={18} height={18} className='text-lg' />
                  </Button>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
