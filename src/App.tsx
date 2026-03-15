import Hero from "./components/Hero";
import Story from "./components/Story";
import Details from "./components/Details";
import Countdown from "./components/Countdown";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ scrollBehavior: "smooth" }}>
      <Nav />
      <Hero />
      <Story />
      <Details />
      <Countdown />
      <Schedule />
      <Gallery />
      <RSVP />
      <Footer />
    </div>
  );
}
