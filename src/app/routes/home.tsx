import BinaryBackground from "~/components/BinaryBackground";
import type { Route } from "./+types/home";
import NavBar from "~/components/Navbar";
import Panel from "~/components/Parts/Panel";
import HomePanel from "~/components/HomePanel";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }, { name: "description", content: "" }];
}

export default function Home() {
  return (
    <div id="layout-box" className="flex flex-col flex-1">
      <NavBar />
      <div id="main-page" className="h-full w-full">
        <BinaryBackground />
        <div className="flex flex-col gap-8 py-8">
          <section id="home">
            <HomePanel />
          </section>
          <section id="about">
            <Panel>
              <p>About me</p>
            </Panel>
          </section>
          <section id="projects">
            <Panel>
              <p>Projects</p>
            </Panel>
          </section>
          <section id="hobbies">
            <Panel>
              <p>Hobbies</p>
            </Panel>
          </section>
        </div>
      </div>
    </div>
  );
}
