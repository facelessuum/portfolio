import { serviceTexts } from '@/lib/texts';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface Props {
  ServiceRef: React.MutableRefObject<null>;
}

const Service = ({ ServiceRef }: Props) => {

  const returnFade = (index: number) => {

    let fade: string

    if (index === 0) {
      fade = "fade-up-right"
    } else if (index === 1) {
      fade = "fade-up"
    } else {
      fade = "fade-up-left"
    }
    return fade
  }

  return (
    <div className='padding relative overflow-hidden bg-[#070d19] text-white flex items-center flex-col gap-12 py-24 lg:py-36' id='Service' ref={ServiceRef}>
      <div className='pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl' />
      <div className='w-full max-w-7xl space-y-2'>
        <span className='section-kicker'>How I can help</span>
        <h1 className='section-title'>{serviceTexts.h1}</h1>
        <p className='max-w-xl pt-3 text-white/55'>Thoughtful engineering, clear communication, and digital products that are built to last.</p>
      </div>
      <div className='flex w-full max-w-7xl items-stretch flex-col gap-5 justify-evenly md:flex-wrap xl:flex-nowrap md:flex-row'>
        {serviceTexts.services.map((service, index) => (
          <div className='group w-full sm:w-96 xl:w-full flex flex-col gap-5 rounded-xl border border-white/10 bg-white/[0.045] p-7 text-left shadow-2xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[0.08]' key={index} data-aos={returnFade(index)}>
            <div className='flex items-center justify-between'>
              <span className='text-xs font-bold tracking-widest text-cyan-300'>0{index + 1}</span>
              <FontAwesomeIcon icon={service.icon} width={24} height={24} className='text-2xl text-cyan-300 transition group-hover:scale-110' />
            </div>
            <h1 className='text-xl font-bold'>{service.title}</h1>
            <p className='text-sm leading-6 text-white/55'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Service
