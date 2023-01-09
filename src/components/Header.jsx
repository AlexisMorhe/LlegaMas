import {useEffect, useState} from "react";
import {FiMenu} from "react-icons/fi";
import {IoClose} from "react-icons/io5";

import {useRouter} from "next/router";
import Image from "next/image";
import Link from "next/link";

import NavLink from "@/components/NavLink";
import Button from "@/components/Button";
import Logo from '@/images/LlegaMas_Logo.svg';

const navigation = [
  { name: 'Inicio', href: '/'},
  { name: '¿Cómo Funciona?', href: '/como-funciona'}
];

export default function Header() {

  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (openMenu) {
      setOpenMenu(!openMenu)
    }
  }, [router.query])

  return (
    <>
      <header className='w-full h-24 px-5 md:pr-0 pt-1 flex justify-between md:justify-center lg:justify-around items-center backdrop-blur-md fixed z-20'>
        <div className='flex justify-between w-1/4 md:w-3/5'>
          <div className='pt-3 pr-5 block md:hidden'>
            <FiMenu onClick={() => setOpenMenu(openMenu => !openMenu)} size={25} />
          </div>
          <div className='transition-all hover:scale-110 flex items-center'>
            <Link href='/'><Image width={20} src={Logo} alt='Logo del sitio' priority/></Link>
            <p className='font-outfit font-bold text-lg md:text-2xl ml-2'>Llega Más</p>
          </div>
          <nav className='hidden md:flex justify-around items-center w-52 md:w-80 mr-0 lg:mr-12'>
            {navigation.map((item, index) => <NavLink key={index} href={item.href} pathname={router.pathname}>{item.name}</NavLink>)}
          </nav>
        </div>
        <div className='w-1/3 sm:w-1/2 md:w-80 flex justify-around items-center'>
          <div><NavLink href='/login'>Iniciar sesión</NavLink></div>
          <Button href='/registro'>Regístrate</Button>
        </div>
      </header>
      <div className={openMenu ? 'block fixed overflow-y-clip z-20 w-full h-full flex flex-col bg-sky-700'
        : 'hidden'}>
        <div className='h-24 w-full flex items-center justify-start pt-1 pl-4'>
          <IoClose onClick={() => setOpenMenu(menu => !menu)} size={30} />
        </div>
        <div className='flex flex-col md:hidden justify-around text-lg items-center pt-10 w-full'>
          {navigation.map((item, index) => <NavLink mobile={true} key={index} href={item.href} pathname={router.pathname}>{item.name}</NavLink>)}
          <div className='w-5/6 pt-16 h-52 flex flex-col justify-around'>
            <Button size='medium' color='white' variant='outline' href='/registro'>Registrate como cliente</Button>
            <Button size='medium' color='rainforest' href='/registro-agente'>Registrate como abogado</Button>
          </div>
        </div>
      </div>
    </>
  )
}