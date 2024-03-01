import About from "./components/About";
import Capabilities from "./components/Capabilities";
import NameHolder from "./components/NameHolder";
import TopMenu from "./components/TopMenu";
import localFont from 'next/font/local'
import Work from "./components/Work";

// If loading a variable font, you don't need to specify the font weight
const kodeMono = localFont({ src: '../../public/fonts/KodeMono-VariableFont_wght.ttf' })

export default function Home() {
  return (
    <div>
      <TopMenu />
      <div className="grid grid-cols-2 gap-4 px-24 py-12 gap-x-16">
        <div className="flex flex-col content-end items-end	gap-20">
          <NameHolder />
          <About />
          <Work />
        </div>
        <Capabilities />
      </div>
      <footer className={`${kodeMono.className} text-center bg-black text-white py-1 rounded-t-3xl`}>
        @2024 Apoorv Singh
      </footer>
    </div>
  );
}
