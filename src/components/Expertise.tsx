import { expertiseTexts } from '@/lib/texts'
import Image from 'next/image'
import SectionHeading from './SectionHeading'

export default function Expertise() {
  return (
    <section id="Expertise" className="w-[min(1184px,calc(100%-96px))] mx-auto max-md:w-[calc(100%-40px)] py-[104px] max-md:py-16">
      <SectionHeading number="03" label="My toolkit" title="The right tools for the job." description="A practical stack for building across the web, with room to keep learning." />
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 [&_li]:flex [&_li]:items-center [&_li]:gap-3 [&_li]:rounded-md [&_li]:border [&_li]:border-border [&_li]:bg-card [&_li]:p-4 [&_li]:text-xs [&_img]:h-7 [&_img]:w-7 [&_img]:shrink-0 [&_img]:object-contain">
        {expertiseTexts.skills.tech.skills.map(skill => <li key={skill.title}><Image src={skill.icon} alt="" width={28} height={28} /><span>{skill.title}</span></li>)}
      </ul>
      <div className="mt-9 flex flex-col gap-5 border-t pt-7 lg:flex-row lg:gap-12 [&_p]:shrink-0 [&_p]:text-xs [&_p]:text-muted-foreground [&_ul]:flex [&_ul]:flex-wrap [&_ul]:gap-x-6 [&_ul]:gap-y-3 [&_ul]:text-xs [&_li::before]:content-['+'] [&_li::before]:mr-2 [&_li::before]:text-accent"><p>Beyond the stack</p><ul>{expertiseTexts.skills.programming.skills.map(skill => <li key={skill.title}>{skill.title}</li>)}</ul></div>
    </section>
  )
}
