import Button from "@/components/Button";

export default function Contact() {
  return (
    <div id='contacto' className='w-full px-0 lg:px-10 xl:px-40 bg-white h-[150vh] md:h-screen pt-24 lg:pt-52 flex flex-col lg:flex-row justify-start md:justify-around items-center'>
      <div className='h-1/4 sm:h-1/5 md:h-3/4 w-full lg:w-1/4 px-5 text-center lg:text-left'>
        <p className='font-semibold text-3xl lg:text-4xl mb-10'>¡Comienza a recibir más!</p>
        <p className='text-xl leading-relaxed'>Rellena el formulario y te contactaremos.</p>
      </div>
      <div className='flex h-3/4 text-xl w-full lg:w-2/3 flex-col-reverse lg:flex-row px-12 lg:px-0 justify-end lg:justify-around'>
        <div className='flex flex-col h-full lg:h-5/6 justify-start justify-between'>
          <div>
            <div className='flex flex-col mb-14'>
              <label>Nombre:</label>
              <input className='py-2 px-2 outline-none border-b-4 border-rainforest'/>
            </div>
            <div className='flex flex-col mb-14'>
              <label>Telefono:</label>
              <input type='number' className='py-2 px-2 outline-none border-b-4 border-rainforest'/>
            </div>
            <div className='flex flex-col mb-14'>
              <label>Correo:</label>
              <input type='email' className='py-2 px-2 outline-none border-b-4 border-rainforest'/>
            </div>
          </div>
          <Button>Enviar mensaje</Button>
        </div>
        <div className='h-44 mb-14 lg:mb-0 lg:h-5/6 w-full lg:w-1/2 flex flex-col justify-between'>
          <label className='mb-2'>Cuéntanos de ti:</label>
          <textarea placeholder='Me envían mi remesa cada semana, la uso para mis estudios...' className='outline-none py-2 w-full h-full resize-none border-b-4 border-b-4 border-rainforest'/>
        </div>
      </div>
    </div>
  )
}