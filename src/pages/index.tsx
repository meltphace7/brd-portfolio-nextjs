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
        <title>Brock Dallman Web Developer Official Site</title>
        <meta
          name="description"
          content="Brock Dallman's official web development portfolio site"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#76e8fc" />
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
        <div className={classes.background}></div>
      </main>
    </>
  );
}
