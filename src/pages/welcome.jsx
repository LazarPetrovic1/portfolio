import { AnimatedPage } from "../components";

const center = { textAlign: "center" };
const h1 = { fontSize: "3.5rem" };
const h2 = { fontSize: "2.75rem" };
const h3 = { fontSize: "1.5rem" };
const mb = { marginBottom: '1.5rem' };

const [h1Text, h2Text] = [
  "Hello, my name is Lazar.",
  "Welcome to my website."
]

function Welcome() {
  return (
    <AnimatedPage>
      <div className="text-holder" role="tablist">
          <h1 tabIndex={0} role="tab" aria-labelledby={h1Text} style={{ ...center, ...h1 }}>{h1Text}</h1>
          <h2 role="tab" tabIndex={0} aria-labelledby={h2Text} style={{ ...center, ...h2, ...mb }}>{h2Text}</h2>
          <h3
            role="tab"
            tabIndex={0}
            style={{ ...center, ...h3, maxWidth: '1000px', margin: 'auto' }}
            aria-labelledby={`
              I'm a Senior Front-End engineer with a couple of years of experience working for a number of different companies with vastly different work cultures.
              And I post some videos related to Web Development as a hobby.
              That's all there is to it!.
            `}
          >
            I'm a Senior Front-End engineer with a couple of years of experience working for a number of different companies with vastly different work cultures.
            <br />
            And I post some videos related to Web Development as a hobby.
            That's all there is to it!.
          </h3>
      </div>
    </AnimatedPage>
  )
}

export default Welcome;