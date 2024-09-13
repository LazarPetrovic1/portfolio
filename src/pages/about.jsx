import { AnimatedPage } from "../components";
import { aw, di, prime, vrize, centific } from '../assets/logos';
import { AboutSection } from "../styled";
import { scrollerBottomPushBack } from "../utils";
import {
  aboutAriaLabelledBy1,
  imageAriaLabelledBy1,
  aboutAriaLabelledBy3,
  imageAriaLabelledBy3,
  aboutAriaLabelledBy4,
  imageAriaLabelledBy4,
  aboutAriaLabelledBy5,
  imageAriaLabelledBy5
} from '../utils';

function About() {
  return (
    <AnimatedPage>
      <article className="text-holder scroller" style={{ maxHeight: scrollerBottomPushBack, paddingRight: '1.5rem' }}>
        <h1 tabIndex={-1} aria-labelledby="It all went like this...">It all went like this...</h1>

        <AboutSection>
          <div>
            <img tabIndex={-1} aria-labelledby={imageAriaLabelledBy1} src={di} alt="Digital Infinity D.O.O." height={280} width={280} />
          </div>

          <div tabIndex={-1} aria-labelledby={aboutAriaLabelledBy1}>
            My humble beginnings started in 2015 - when I moved away from my parents' house to Novi Sad, where I got my first job. <br />
            I had only ever written code at home and had only made simple projects by that point, and only using the technologies I had familiarized myself with by then. Those were the basic vanilla technologies (HTML, CSS & JS), as well as React on the front-end and Express with MongoDB on the backend - a MERN developer. I learned how to use Vue at this company, which will prove itself fairly useful in the near-future.<br />
            As for the clients, I worked on a food-delivery app based in the select few states & cities in the US using React on the client-side with MobX as a state manager. We used JIRA to keep track of our assignments and GitHub as the VCS.<br />
            The other client I have worked for is in the industrial machine manufacturing. I was tasked with stylistically revamping their web application, which they used to advertise their products and themselves. This app was relatively simple compared to our clients overseas - comparable to a portfolio project (kind of like this one) with a products page, with just a couple of routes and modern-at-the-time styling, given the fact that their previous web app update had been in roughly 2016 - 3 years prior.<br />
            Finally, I had my big break when I was tasked with helping out on <a href="https://www.sounder.ai/" target="_blank" rel="noreferrer">Sounder.fm (now Sounder.ai)</a>. I wasted no time getting to understand the code, features and functionalities. I worked on authentication and authorization, optimized upload and processing speeds as well as added a payment system, via Visa or MasterCard (sidenote: They might even accept crypto at this point in time, but I haven't really kept in touch with the app's current state).
            The company and I decided to part ways in June, 2017.
          </div>
        </AboutSection>

        <AboutSection>
          <div tabIndex={-1} aria-labelledby={aboutAriaLabelledBy3}>
            Not being the one to rest on my laurels, I decided to stick to software engineering, as the work is something I am most familiar and comfortable with.<br />
            I got my next engineering gig the next month, as a fullstack developer. This company used Vue and Nuxt for their client-side needs and a more versatile server-side with either Express or NestJS w/ TypeScript and TypeORM or MikroORM to deal with the database transactions. PostgreSQL was used as the default database.<br />
            This organization employed a single-digit number of people, including me. While seeming small and humble on the outside, this could not be further from the truth. Each and every single one of the technical people were at the top of their game, given the fact that they have decided to go with the less traditional technologies and still managed to carve quite a niche for themselves. The projects were quite overwhelming for a single person to handle.<br />
            They worked in the CAD (computer-assisted-dispatch) industry, or rather, their clients did. It was partially Austrian-owned. The emphasis here was much less on how the code was written and much more on how it was structured.<br />
            The first app I worked on was called ELS (Einsatzleitsystem - "Operations control system" in English) and was meant to be used by contractors in Austria. The users could log into the app (registration was done via admin panel, which I did not work on), create, list, update, delete and call contacts saved, file reports with the government and other affiliated private persons, use the built-in GPS to navigate to the nearest relevant authorities, ask for assistance on the road (e.g. truck drivers) and a lot more features I have since forgotten about.<br />
            This was a software application, using Electron for the windows, Vue for the client-side and Express with PostgreSQL for the server.side.<br />
            The other application I worked on was called AlarmBot. The app was a client and payment tracking application for contractors and anyone who had business dependents (e.g. employers, landlords, other companies / business organizations). Aside from that, it was also an automated dispatcher, which had a fixed phone number and could be called and talked to. The program would then redirect the call to the correct person depending on the situations and circumstances described therein. Originally conceived as a phone app, it used NativeScript & Vue for UI and Express and PostgreSQL for the server-side.<br />
            The company and I split up during the onslaught of the COVID-19 pandemic - particularly I, who left for a different job, which was more in line with my main technology stack up to that point.
          </div>
          <div tabIndex={-1} aria-labelledby={imageAriaLabelledBy3}>
            <img src={aw} alt="Autview" height={300} width={300} />
          </div>
          
        </AboutSection>

        <AboutSection>
          <div tabIndex={-1} aria-labelledby={imageAriaLabelledBy4}>
            <img src={prime} height={255} width={255} alt="Prime Software" />
          </div>
          <div tabIndex={-1} aria-labelledby={aboutAriaLabelledBy4}>
            By Feb 2020, I had officially graduated the "being junior developer" phase and was given more autonomy in my work.<br />
            This company was much more versatile with their tech stack and used Java, C#, Node and Python on the server-side, with React & Next, Vue and Angular for the front-end.<br />
            I started off by maintaining the internal administrative system with React and Next - quite a standard practice for the newly initiated - and quickly shifted to maintaining the company's recruitment tools for developers. This included improving the styles and optimizing the fetch requests to make fewer API calls and maintaining the online code-editor and console as well (for coding assignments).<br />
            After this had been completed, I was assigned to a client who had something of a social-media video-sharing application, reminiscent of OnlyFans (granted, this did not age well, but I'm still keeping it).<br />
            They used React and Next for the user-facing production application and Vue and Nuxt for the administrator panel. You can imagine the features...<br />
            Having seen quite a bit and still eager and hungry for a more various diet and feeling more confident in my abilities, I had decided to pursue a different opportunity, this time as a senior developer.
          </div>
        </AboutSection>

        <AboutSection>
          <div tabIndex={-1} aria-labelledby={aboutAriaLabelledBy5}>
            In June 2021, I found a job as a senior developer and was put on a project in less than 24 hours after signing the contract. That's what I'm talking about.<br />
            I was tasked with working on and overlooking the enrollment and appointment-making applications for a US healthcare service provider.<br />
            The application used React for client-side, Java and NextGen on the server-side.<br />
            Aside from React and Redux and react-router-dom as standard packages, we also used JotForms to display the legal documents and allow users (or rather force users) to accept them before going further.<br />
            Once the project was completed, I was tasked with testing the application with Selenium / Java, so we could see whether the application would break with negative testing input and how to rediagnose and fix the problem if that were to be the case.<br />
            Having completed that, I was assigned with working on a medical application for data scientists in React, and testing it with react-testing-library. This application was extremely data-heavy, and working with inputs, generating tables and graphs, calculating percentages and persisting the data was a daily occurrence. The emphasis was not on understanding the technology, but rather working with large amounts of data. I would say more that I could, but the NDA is still in effect and the project's governing body quite litigious.<br />
            Since the days were getting ever longer, and I ever slower, due to burnout, I took my remaining PTO until the end of the year, and handed in my letter of resignation shortly thereafter.
          </div>
          <div tabIndex={-1} aria-labelledby={imageAriaLabelledBy5}>
            <img src={vrize} height={220} width={220} alt="VRize" />
          </div>
        </AboutSection>

        <AboutSection>
          <div tabIndex={-1} aria-labelledby={imageAriaLabelledBy4}>
            <img src={centific} height={220} width={220} alt="Prime Software" />
          </div>
          <div tabIndex={-1} aria-labelledby={aboutAriaLabelledBy4}>
            Feeling refreshed and ready for further challenges, I pressed onward. To start the new year off, I took a Senior Frontend position at Centific Inc. This company, or corporation rather, is unlike anything I've ever seen - this organization has it all; from in-house developers, to competent HR teams, multiple payroll administrators, translators for any single language you can think of, a dedicated AI section, a DevOps team and everything else under the Sun.<br />
            I am currently working on a whole slew of different Microsoft projects - some internal, some external. The most important work I've done relates to accessibility of their newest user-facing product - the operating system Windows 11, which boasts 2 new accessibility features - namely the Narrator, which reads the UI for visually-impaired users and Voice Access, which allows for hands-free use of a computer device.<br />
            Given that these projects are quite complicated - more complicated than anything I will probably ever face again, most of my work contains of catching and remedying bugs and mistakes, improving accessibility/inclusivity for all users and cutting down on load times.<br />
            Whatever is caught, however, has to go through the appropriate chain of command to be taken care of, so constant communication and pinging, hours-long meetings and syncronization with other coworkers are the rule rather than the exception here.
          </div>
        </AboutSection>
      </article>
    </AnimatedPage>
  )
}

export default About;