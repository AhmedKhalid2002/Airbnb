import Banner from "./components/Banner/Banner";
import Explore from "./components/Explore/Explore";
import Footer from "./components/Footer/Footer";
import Greatest from "./components/Greatest/Greatest";
import Header from "./components/header/Header";
import Live from "./components/Live/Live";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
          <Banner/>
          <Explore/>
          <Live/>
          <Greatest img="/sea.jpg" LinkText='Get Inspire' title="The Greatest Outdoors" description="Whishlist curated by Airbnb"/>
      </main>
    </>
  );
}
