import React from 'react'

interface ValueCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#0099FF] text-white p-6 rounded-lg flex flex-col items-center text-center">
      <div className="bg-white bg-opacity-10 p-4 rounded-lg mb-4">
        {icon}
      </div>
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  )
}