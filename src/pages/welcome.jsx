import { AnimatedPage } from "../components";

const center = { textAlign: "center" };

function Welcome() {
  return (
    <AnimatedPage>
      <div className="text-holder">
        <h1 style={center}>Hello, my name is Lazar.</h1>
        <h2 style={center}>Welcome to my website.</h2>
      </div>
    </AnimatedPage>
  )
}

export default Welcome;