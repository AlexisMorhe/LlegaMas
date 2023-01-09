import Image from "next/image";
import Step1 from '@/images/LlegaMas_Analysis.svg';
import Step2 from '@/images/LlegaMas_Loan.svg';
import Step3 from '@/images/LlegaMas_Investment.svg'

const steps = [
  {
    title: 'Aplica en minutos',
    description: 'Comparte con nosotros tu historial de envíos de dinero. Pronto sabrás si aprobamos o no tu solicitud.',
    image: Step1,
    imageAlt: 'Persona realizando un análisis financiero.'
  },
  {
    title: 'Recibe tu préstamo',
    description: 'Recibe tu dinero en la misma ventanilla a la que acudes siempre o directamente a tu cuenta bancaria.',
    image: Step2,
    imageAlt: 'Persona recibiendo un préstamo desde su celular.'
  },
  {
    title: 'Recibe más',
    description: 'Paga tu préstamo y mejora tu calificación con nosotros, podrás ir aumentando los montos que recibes.',
    image: Step3,
    imageAlt: 'Persona creciendo un árbol de dinero.'
  }
]

export default function PrimaryFeatures() {
  return (
    <div id='#como-funciona' className='h-fit bg-white w-full flex flex-col items-center'>
      <h2 className='text-4xl font-semibold h-52'>Un préstamo con base en los envíos que recibes</h2>
      <div className='flex w-5/6 justify-between'>
        {steps.map((step, index) => {
          return (
            <div key={index} className='flex flex-col w-1/4 items-center justify-around h-[50vh]'>
              <Image src={step.image} alt={step.imageAlt} />
              <h3 className='text-2xl font-semibold'>{step.title}</h3>
              <p className='text-xl text-center leading-relaxed'>{step.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}