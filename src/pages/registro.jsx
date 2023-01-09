import Image from "next/image";
import {useState} from "react";
import {Transition} from '@headlessui/react';

import RegisterImage1 from '@/images/LlegaMas_Register.svg';
import RegisterImage2 from '@/images/LlegaMas_Investment.svg';
import RegisterImage3 from '@/images/LlegaMas_Analysis.svg';
import Layout from "@/components/Layout";
import Button from "@/components/Button";

export default function Registro() {

  const [formStep, setFormStep] = useState(0);
  const handleClick = () => {
    setFormStep(currentFormStep => ++currentFormStep)
  }

  const renderCurrentFormStep = () => {
    switch (formStep) {
      case 0:
        return (
          <>
            <h1 className='text-4xl md:text-5xl font-semibold text-center mb-20'>Comienza a recibir más respondiendo unas simples preguntas</h1>
            <Button onClick={handleClick} className='w-1/3'>Comenzar</Button>
          </>
        )
      case 1:
        return (
          <>
            <p className='text-3xl md:text-4xl font-semibold text-center'>Queremos saber de ti</p>
            <div className='flex w-full justify-around'>
              <div className='flex flex-col'>
                <label>Nombre:</label>
                <input/>
                <label>Primer apellido:</label>
                <input/>
                <label>Segundo apellido:</label>
                <input/>
              </div>
              <div className='flex flex-col'>
                <label>Número de celular:</label>
                <input/>
                <label>Estado civil:</label>
                <input/>
                <label>Dependientes ecónomicos</label>
                <input/>
              </div>
            </div>
            <Button onClick={handleClick}>Siguiente</Button>
          </>
        )
      case 2:
        return (
          <>
            <p className='text-3xl md:text-4xl font-semibold text-center'>Queremos saber de ti</p>
            <div className='flex w-full justify-around'>
              <div className='flex flex-col'>
                <label>Nombre:</label>
                <input/>
                <label>Primer apellido:</label>
                <input/>
                <label>Segundo apellido:</label>
                <input/>
              </div>
              <div className='flex flex-col'>
                <label>Número de celular:</label>
                <input/>
                <label>Estado civil:</label>
                <input/>
                <label>Dependientes ecónomicos</label>
                <input/>
              </div>
            </div>
            <Button onClick={handleClick}>Siguiente</Button>
          </>
        )

    }
  }

  return (
    <Layout title='Envía más dinero a tu familia' description='Ofrecemos préstamos amigables a personas que envían remesas regularmente a sus familias.'>
      <div className='h-screen bg-gradient-to-tl from-white to-toasted-marshmallow flex flex-col items-center justify-center'>
        <button className='absolute top-96 left-52' onClick={() => setFormStep(currentFormStep => --currentFormStep)}>Atrás</button>
        <div className={formStep === 0 ? 'h-1/2 flex flex-col justify-center items-center pt-40' : 'h-3/5 flex flex-col justify-center items-center pt-40'}>
          {renderCurrentFormStep()}
        </div>
        <div className={formStep === 0 ? 'transition-all h-2/5 w-3/5 md:w-1/2 lg:w-1/3' : 'h-2/5 translate-y-10 w-3/5 md:w-1/2 lg:w-1/3 scale-50 transition-all'}>
          <Transition show={formStep === 0 || formStep === 1} enter='transition-opacity duration-150 delay-150 absolute' leave='transition-opacity duration-150 absolute' enterFrom='opacity-0' enterTo='opacity-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
            <Image priority src={RegisterImage1} alt='Usuario completando el proceso de registro.' />
          </Transition>
          <Transition show={formStep === 2} enter='transition-opacity duration-150 delay-150 absolute' leave='transition-opacity duration-150 absolute' enterFrom='opacity-0' enterTo='opacity-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
            <Image src={RegisterImage2} alt='Usuario completando el proceso de registro.' />
          </Transition>
          <Transition show={formStep === 3} enter='transition-opacity duration-150 delay-150 absolute' leave='transition-opacity duration-150 absolute' enterFrom='opacity-0' enterTo='opacity-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
            <Image src={RegisterImage3} alt='Usuario completando el proceso de registro.' />
          </Transition>
          {/*  Aquí un transition para que las imagenes aunque sean pequeñas vayan cambiando*/}
        </div>
      </div>
    </Layout>
  )
}