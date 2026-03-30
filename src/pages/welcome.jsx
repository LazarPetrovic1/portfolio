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
            I'm a Senior Frontend & Full-Stack Engineer with 8+ years of experience building scalable SaaS platforms using React, Next.js,
            TypeScript, Node.js and Electron.js. Proven track record delivering high-performance, accessible, and AI-powered web applications in Agile
            environments. Experienced in architecting distributed systems, optimizing frontend performance, and driving measurable
            improvements in user engagement, system reliability, and development velocity.
          `}
        >
          I'm a Senior Frontend & Full-Stack Engineer with 8+ years of experience building scalable SaaS platforms using React, Next.js,
          TypeScript, Node.js and Electron.js. Proven track record delivering high-performance, accessible, and AI-powered web applications in Agile
          environments. Experienced in architecting distributed systems, optimizing frontend performance, and driving measurable
          improvements in user engagement, system reliability, and development velocity.
        </h3>
      </div>
    </AnimatedPage>
  )
}

export default Welcome;