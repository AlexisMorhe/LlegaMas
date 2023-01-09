import Image from "next/image";
import HeroImage from '@/images/LlegaMas_Portfolio.svg';

export default function Hero() {
  return (
    <div className='bg-gradient-to-b h-[calc(100vh-6rem)] py-32 lg:py-0 w-full flex justify-center items-center from-toasted-marshmallow to-white'>
      <div className='w-full lg:w-5/6 xl:w-4/5 2xl:w-3/4 pt-24 h-full flex flex-col lg:flex-row justify-around items-center'>
        <h1 className='font-outfit font-bold text-4xl md:text-5xl w-full text-center px-4 lg:px-0 lg:text-left lg:w-1/3'>Te ayudamos a que <strong className='font-grace text-rainforest pl-1 font-normal leading-relaxed'>llegue más </strong> con cada remesa</h1>
        <div className='w-4/5 md:w-3/5 lg:w-1/2'>
          <Image priority src={HeroImage} alt='Obtén un préstamo desde tu celular' />
        </div>
      </div>
    </div>
  )
}