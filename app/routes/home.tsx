import { useEffect } from "react";
import { useLocation } from "react-router";
import type { Route } from "./+types/home";

//background
import BinaryBackground from "~/components/BinaryBackground";

//components
import NavBar from "~/components/Navbar";
import HomePanel from "~/components/HomePanel";
import AboutMe from "~/components/AboutMe";
import HobbiesGames from "~/components/Hobbies";
import ProjectExperienceTerminal from "~/components/Projects";
import HobbiesBooks from "~/components/HobbiesBooks";
import UnderInquisitorialSeal from "~/components/Parts/Unavailable";
import ContactForm from "~/components/ContactForm";
import HobbiesTvShows from "~/components/HobbiesTvShows";

//steam api
import { getOwnedGames } from "~/lib/steam.server";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }, { name: "description", content: "" }];
}
export async function loader({}: Route.LoaderArgs) {
  //console.log("STEAM KEY:", process.env.STEAM_API_KEY);
  return getOwnedGames();
}

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      // slight delay so the section has actually rendered/laid out
      const timeout = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [location]);

  return (
    <div id="layout-box" className="flex flex-col flex-1">
      <NavBar />
      <div id="main-page" className="h-full w-full">
        <BinaryBackground />
        <div className="flex flex-col gap-1 pb-8">
          <section id="home" className="pt-24">
            <HomePanel />
          </section>
          <section id="about">
            <AboutMe />
          </section>
          <section id="projects">
            <ProjectExperienceTerminal />
          </section>
          <section id="hobbies-games">
            <HobbiesGames />
          </section>
          <section id="hobbies-books">
            <HobbiesBooks />
          </section>
          <section id="hobbies-tv">
            <HobbiesTvShows />
          </section>
          <section id="contact">
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  );
}
