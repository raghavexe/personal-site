import BinaryBackground from "~/components/BinaryBackground";
import type { Route } from "./+types/home";
import NavBar from "~/components/navbar";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }, { name: "description", content: "" }];
}

export default function Home() {
  return (
    <div id="layout-box" className="flex flex-col flex-1">
      <NavBar />
      <div id="main-page" className="h-full w-full">
        <BinaryBackground />
        <section></section>
        <section></section>
        <section></section>
      </div>
    </div>
  );
}
