import React from 'react'
import ClientComponent from './client-component'
import { heading1, section2 } from './server-component'

type Props = {}

const HeroSection = () => {
  return (
    <ClientComponent section2={section2} heading1={heading1}/>
  )
}

export default HeroSection