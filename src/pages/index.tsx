import Head from 'next/head'
import { Inter } from 'next/font/google'
import classes from '@/styles/Home.module.css'
import Navigation from '../components/Navigation';
import Header from "../components/Header";
import BioSection from '../components/BioSection';
import SkillsSection from "../components/Skills";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Brock Dallman</title>
        <meta name="description" content="Brock Dallman Web Developer Official Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${classes.main} ${inter.className}`}>
        <Navigation />
        <Header />
        <BioSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
