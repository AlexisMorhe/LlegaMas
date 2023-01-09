import Head from "next/head";
import Header from "./Header";
import Footer from './Footer';

export default function HomeLayout({title, description, children}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description}/>
        <meta name='author' content='Llega Más'/>
        <meta charSet='UTF-8'/>
        <meta name='robots' content='index, follow'/>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
        <meta name='og:url' content='https://www.llegamas.com/'/>
        <meta name='og:type' content='website'/>
        <meta name='og:locale' content='es_MX'/>
        <meta name='og:site_name' content='Llega Más'/>
        <meta name='og:title' content='Envía más dinero a tu familia'/>
        <meta name='og:description' content='Ofrecemos préstamos amigables a personas que envían remesas regularmente a sus familias.'/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="msapplication-TileColor" content="#fff9eb"/>
        <meta name="theme-color" content="#fff9eb"/>
      </Head>
      <main className='text-clock-chimes-thirteen font-outfit'>
        <Header/>
        <>{children}</>
        <Footer/>
      </main>
    </>
  )
}