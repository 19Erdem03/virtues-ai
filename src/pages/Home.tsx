import { useEffect } from 'react';
import Hero from '../components/Hero';
import WhoWeWorkWith from '../components/WhoWeWorkWith';
import AutomationChanges from '../components/AutomationChanges';
import Contact from '../components/Contact';

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Hero />
      <WhoWeWorkWith />
      <AutomationChanges />
      <Contact />
    </>
  );
}
