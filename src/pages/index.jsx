import Layout from '@/components/HomeLayout';
import Hero from '@/components/Hero';
import PrimaryFeatures from "@/components/PrimaryFeatures";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <Layout title='Envía más dinero a tu familia' description='Ofrecemos préstamos amigables a personas que envían remesas regularmente a sus familias.'>
      <Hero/>
      <PrimaryFeatures/>
      <Contact/>
    </Layout>
  )
}
