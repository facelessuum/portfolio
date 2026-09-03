'use client'

import { expertiseTexts } from '@/lib/texts';
import React, { useState } from 'react'
import { Card, CardContent } from './ui/card';
import { Label } from './ui/label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

interface Props {
  ExpertiseRef: React.MutableRefObject<null>;
}

const Expertise = ({ ExpertiseRef }: Props) => {
  const [activeTab, setActiveTab] = useState<'tech' | 'programming'>('tech')
  const technicalSkills = expertiseTexts.skills.tech.skills
  const programmingSkills = expertiseTexts.skills.programming.skills

  return (
    <div className='padding relative overflow-hidden bg-secondary py-24 lg:py-36'>
      <div className='pointer-events-none absolute right-[-10rem] top-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl' />
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-10'>
        <div className='space-y-3'>
          <span className='section-kicker'>Tools I use</span>
          <h1 className='section-title'>{expertiseTexts.h1}</h1>
          <Separator className='h-[3px] w-20 rounded-full bg-accent' />
        </div>

        <div className='flex flex-col gap-6' ref={ExpertiseRef} id='Expertise'>
          <div className='flex w-fit rounded-md border border-border/70 bg-card/60 p-1'>
            <Button type='button' variant={activeTab === 'tech' ? 'default' : 'ghost'} className='rounded-md' onClick={() => setActiveTab('tech')}>
              Technical stack
            </Button>
            <Button type='button' variant={activeTab === 'programming' ? 'default' : 'ghost'} className='rounded-md' onClick={() => setActiveTab('programming')}>
              Problem-solving
            </Button>
          </div>

          {activeTab === 'tech' ? (
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {technicalSkills.map((skill, index) => (
                <Card key={skill.title} className='group border-border/70 bg-card/70 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl'>
                  <CardContent className='flex min-h-52 flex-col gap-4 p-6'>
                    <div className='flex items-center justify-between'>
                      <div className='flex h-12 w-12 items-center justify-center rounded-xl border border-border/70 bg-secondary p-2 transition group-hover:border-accent/50'>
                        <Image width={45} height={45} src={skill.icon} alt={skill.title} className={index === 0 || index === 1 || index > 8 ? 'rounded-full' : ''} />
                      </div>
                      <span className='text-xs font-mono text-muted-foreground/60'>0{index + 1}</span>
                    </div>
                    <Label className='text-lg md:text-xl'>{skill.title}</Label>
                    <p className='text-sm leading-6 text-muted-foreground'>{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className='grid gap-4 md:grid-cols-2'>
              {programmingSkills.map((skill, index) => (
                <Card key={skill.title} className='group border-border/70 bg-card/70 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl'>
                  <CardContent className='flex min-h-40 items-start justify-between gap-6 p-6'>
                    <div className='flex flex-col gap-2'>
                      <span className='text-xs font-mono text-accent'>0{index + 1}</span>
                      <Label className='text-xl'>{skill.title}</Label>
                      <p className='text-sm leading-6 text-muted-foreground'>{skill.description}</p>
                    </div>
                    <FontAwesomeIcon icon={skill.icon} width={30} height={30} className='mt-1 text-3xl text-accent transition group-hover:scale-110' />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Expertise
