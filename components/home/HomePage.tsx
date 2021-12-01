import About from "./About";
import Collaborations from "./Collaborations";
import SignUp from "./SignUp";
export default function HomePage() {
  const SLIDE_COUNT = 10;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <>
      <About />
      <Collaborations />
      <SignUp />
    </>
  );
}
