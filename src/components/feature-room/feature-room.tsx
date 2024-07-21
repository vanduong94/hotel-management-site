import { Room } from '@/app/models/room'
import React, { FC } from 'react'

type Props = {
  featuredRoom: Room
}

const FeatureRoom: FC<Props> = ({featuredRoom}) => {
  return (
    <section>
      FeatureRoom
    </section>
  )
}

export default FeatureRoom