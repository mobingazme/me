import React from 'react'
import SectionOne from '../module/SectionOne'
import Skills from '../module/Skills'
import WorkSamples from '../module/WorkSamples'
import SkillSlider from '../module/slider/SkillSlider'
import Abute from '../module/Abute'
function HomePage() {
  return (
    <div className='bg-A'>
      <SectionOne />
      <Abute />
      <SkillSlider />
      <Skills />
      <SkillSlider />
      <WorkSamples />
    </div>
  )
}

export default HomePage