import About from "./components/About";
import NameHolder from "./components/NameHolder";
import TopMenu from "./components/TopMenu";

export default function Home() {
  return (
    <div>
      <TopMenu />
      <div className="grid grid-cols-2 gap-4 px-24 py-12">
        <div className="flex flex-col content-end items-end	gap-20">
          <NameHolder />
          <About />
          <div>rwtergdfgfd</div>
        </div>
        <div>sdfsdfsdfsdfsfsdfsfsdfsdf</div>
      </div>
    </div>
  );
}
