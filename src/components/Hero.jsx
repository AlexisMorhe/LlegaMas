import Image from "next/image";
import HeroImage from '@/images/LlegaMas_Hero.svg';

export default function Hero() {
  return (
    <div className='bg-gradient-to-b h-[80vh] w-full px-96 flex justify-around items-center from-toasted-marshmallow to-white'>
      <h1 className='font-outfit font-bold text-5xl w-1/3'>Te ayudamos a que te <span className='font-grace text-rainforest pl-1 font-normal leading-relaxed'>llegue más </span> con cada remesa</h1>
      <div className='w-1/2'>
        <Image priority src={HeroImage} alt='Obtén un préstamo desde tu celular' />
      </div>
    </div>
  )
}