import Image from "next/image"
import techItem from '@/assets/tech-item.svg'

export const TechnologiesSection = () => {
  return (
    <div className='h-32 border-t border-b border-[#FFFFFF40] flex items-center justify-between lg:px-0 px-8'>

      <span>Flutter</span>

      <Image
        src={techItem}
        alt="Tech Item"
        width={50}
        height={50}
        className="h-5 w-5"
      />

      <span>iOS</span>

      <Image
        src={techItem}
        alt="Tech Item"
        width={50}
        height={50}
        className="h-5 w-5"
      />

      <span>Android</span>

      <Image
        src={techItem}
        alt="Tech Item"
        width={50}
        height={50}
        className="h-5 w-5 lg:block hidden"
      />

      <span className="lg:inline hidden">Playstore</span>
    </div>
  )
}
