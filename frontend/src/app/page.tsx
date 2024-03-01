// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Posts from "./posts";
import Articles from "./articles";
import GetGames from "./games/page";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <GetGames />
      {/* <Posts />
      <Articles />
      <Footer /> */}
    </>
  );
}
