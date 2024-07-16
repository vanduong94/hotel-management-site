import React from 'react'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <section className="flex px-4 items-center gap-12 container mx-auto">
      <div className="py-10 h-full">
        {/* Heading */}
        <h1 className="font-heading mb-6">Explore Our Exquisite Hotel</h1>
        <p className="text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg">
          Experience an Exquisite Hotel Immersed in Rich History and Timeless Elegance.
        </p>
        <button className="btn-primary"></button>
        {/* Room description */}
      </div>
      {/* Images */}
    </section>
  )
}

export default HeroSection