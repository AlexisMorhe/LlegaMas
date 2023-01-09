import Button from "@/components/Button";

export default function Contact() {
  return (
    <div id='#contacto' className='w-full px-40 h-screen pt-52 flex justify-around items-center'>
      <div className='h-4/5 w-1/4'>
        <p className='font-semibold text-4xl mb-10'>¡Comienza a recibir más!</p>
        <p className='text-xl leading-relaxed'>Rellena el formulario y te contactaremos.</p>
      </div>
      <div className='flex h-4/5 text-xl w-2/3 justify-around'>
        <div className='flex flex-col h-5/6 justify-between'>
          <div>
            <div className='flex flex-col mb-14'>
              <label>Nombre:</label>
              <input className='py-2 px-2 outline-none border-b-4 border-rainforest'/>
            </div>
            <div className='flex flex-col mb-14'>
              <label>Telefono:</label>
              <input type='number' className='py-2 px-2 outline-none border-b-4 border-rainforest'/>
            </div>
            <div className='flex flex-col'>
              <label>Correo:</label>
              <input type='email' className='py-2 px-2 outline-none border-b-4 border-rainforest'/>
            </div>
          </div>
          <Button>Enviar mensaje</Button>
        </div>
        <div className='h-5/6 w-1/2 flex flex-col justify-between'>
          <label className='mb-2'>Mensaje:</label>
          <textarea className='outline-none p-2 w-full h-full resize-none border-b-4 border-b-4 border-rainforest'/>
        </div>
      </div>
    </div>
  )
}