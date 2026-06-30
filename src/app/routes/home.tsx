import BinaryBackground from "~/components/BinaryBackground";
import type { Route } from "./+types/home";
import NavBar from "~/components/navbar";
import Panel from "~/components/Parts/Panel";
import HomePanel from "~/components/HomePanel";
import AboutMe from "~/components/AboutMe";
import HobbiesGames from "~/components/Hobbies";
import { getOwnedGames } from "~/lib/steam.server";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }, { name: "description", content: "" }];
}
export async function loader({}: Route.LoaderArgs) {
  console.log("STEAM KEY:", process.env.STEAM_API_KEY);
  return getOwnedGames();
}

export default function Home() {
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
            <Panel>
              <p>Projects</p>
            </Panel>
          </section>
          <section id="hobbies-games">
            <HobbiesGames />
          </section>
        </div>
      </div>
    </div>
  );
}
