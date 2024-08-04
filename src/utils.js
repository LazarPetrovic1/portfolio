import * as blogimgs from './assets/projects/blogger';
import * as flourishimgs from './assets/projects/flourish-text-editor';
import * as photoimgs from './assets/projects/photo-app';
import * as impulseimgs from './assets/projects/impulse';
import * as playerimgs from './assets/projects/music-player'
import * as seezimgs from './assets/projects/seez-assignment'
import * as spyimgs from './assets/projects/raspberry-spy'

export const mapImages = (imgs) => Object.values(imgs).map(item => ({ original: item, thumbnail: item }));

const blogEntries = mapImages(blogimgs);
const flourishEntries = mapImages(flourishimgs);
const photoEntries = mapImages(photoimgs);
const impulseEntries = mapImages(impulseimgs);
const playerEntries = mapImages(playerimgs);
const seezEntries = mapImages(seezimgs);
const spyEntries = mapImages(spyimgs);

export const projectinformation = {
  blog: {
    title: "Vue Blog App",
    images: blogEntries,
    FE: "FE: Vue 2 (Vuex, vue-router)",
    BE: "BE: Express.js, PostgreSQL (w/ sockets)",
    features: [
      "authorization & authentication (login & register)",
      "input validation FE + BE",
      "CRUD for blog posts with an image upload",
      "filesystem: copying the file into a separate directory",
      "success and error snack messages",
      "comment system",
      "notification system with sockets",
      "changing user information",
      "changing password",
      "all non-public routes are protected and will throw a 401 Unauthorized error"
    ]
  },
  flourish: {
    title: "Flourish",
    images: flourishEntries,
    DE: "Desktop: Electron",
    FE: "FE: React",
    features: [
      "welcome screen",
      "open file",
      "open folder as project",
      "list files and directories on the left-hand side",
      "icons beside files with certain extensions",
      "open, edit, save and delete file",
      "history of previous projects (clicking one of them will open it as a project in a new instance of the editor)",
      "built-in commands for quick access to certain web apps on the internet (opens a new tab in a default browser and goes to the url)",
    ]
  },
  photoapp: {
    title: "Electron Camera App",
    images: photoEntries,
    DE: "Desktop: Electron",
    FE: "FE: HTML, CSS, JavaScript",
    features: [
      "requires camera privileges",
      "displays a camera feed and a button to snap a picture",
      "taking the picture saves it on the hard drive",
      "can change various different filters",
    ]
  },
  impulse: {
    title: "Impulse",
    images: impulseEntries,
    DE: "Desktop: Electron (Nextron)",
    FE: "FE: React (Next.js)",
    BE: "BE: v1: Express, MongoDB; v2: NestJS, PostgreSQL, TypeScript, mikro-orm",
    features: [
      "authorization & authentication (login & register)",
      "extensive settings customization (language, background, font, font-size, separate text& background-colours)",
      "animated canvas background",
      "ability to open a terminal (or cmd prompt in windows) & add quick access links",
      "custom titlebar, url bar and controls",
      "public-facing API",
      "built-in navigation shortcuts",
      "change password capabilities",
      "searching for people",
      "accessing other people's profile",
    ]
  },
  musicplayer: {
    title: "Music Player & File Viewer",
    images: playerEntries,
    DE: "Desktop: Electron",
    FE: "FE: React",
    features: [
      "file viewer",
      "music player",
      "canvas animations according to audio buffer data",
      "image viewer"
    ]
  },
  seezassignment: {
    title: "Seez Assignment",
    images: seezEntries,
    FE: "FE: React TypeScript",
    BE: "BE: NestJS, PostgreSQL, mikro-orm, TypeScript",
    features: [
      "admin and client panels on the front end",
      "authorization & authentication (login & register)",
      "ability to upload, read and remove images (as stored in a separate dir on BE)",
      "alert/logging/message system",
      "granular control over the application on the admin panel",
      "completed for an assignment as specified here:"
    ],
    links: [["https://seez.notion.site/Tech-Assessment-Full-Stack-Engineer-8125b365b3aa4bf6b6c091bad13c3d62", "Go to assignment"]]
  },
  raspberrySpy: {
    title: "Raspberry Spy",
    images: spyEntries,
    FE: "FE: Raspberry Pi model 3A+; Raspberry Pi modular camera v3; Kali Linux VM via Windows 10",
    BE: "BE: Raspberry PI OS (32-bit)",
    features: [
      "secure-shelling enabled (ssh)",
      "secure copy enabled (scp)",
      "can take images via terminal"
    ]
  }
}

export const scrollerBottomPushBack = "calc(100vh - 100px)";

export const aboutAriaLabelledBy1 = `
  My humble beginnings started in 2019 - when I moved away from my parents' house to Novi Sad, where I got my first job. 
  I had only ever written code at home and had only made simple projects by that point, and only using the technologies I had familiarized myself with by then. Those were the basic vanilla technologies (HTML, CSS & JS), as well as React on the front-end and Express with MongoDB on the backend - a MERN developer. I learned how to use Vue at this company, which will prove itself fairly useful in the near-future.
  As for the clients, I worked on a food-delivery app based in the select few states & cities in the US using React on the client-side with MobX as a state manager. We used JIRA to keep track of our assignments and GitHub as the VCS.
  The other client I have worked for is in the industrial machine manufacturing. I was tasked with stylistically revamping their web application, which they used to advertise their products and themselves. This app was relatively simple compared to our clients overseas - comparable to a portfolio project (kind of like this one) with a products page, with just a couple of routes and modern-at-the-time styling, given the fact that their previous web app update had been in roughly 2016 - 3 years prior.
  The company and I decided to part ways in May, 2020, during the onset of the COVID-19 pandemic.
`;

export const imageAriaLabelledBy1 = `Digital Infinity D.O.O. company logo`;

export const aboutAriaLabelledBy2 = `
  This is the place where I got used to chaos, struggle and pain, as we had to learn a lot in just 3 months.
  This included the entirety of how networks operate, how to use Debian-based systems (through Kali) and Red Hat Distributions (through CentOS). Aside from that, I was also educated in the use of network security management platforms for situational awareness; those being QRadar Analyst and QRadar Admin, as well as playing around with various different offensive-security tools Kali had to offer (WireShark, WebScarab, Maltego, nmap, whois & Metasploit).
  Needless to say, while learning how to hack while surrounded with like-minded people was quite fun, the stress was too real and the workload immense for the paygrade, so I decided to vacate the organization.
`;

export const imageAriaLabelledBy2 = `RCMT IT Europe company logo`;

export const aboutAriaLabelledBy3 = `
  After this, I decided to stick to software engineering, as the work is something I am more familiar and comfortable with.
  I got my next engineering gig in late-June 2021, as a fullstack developer. This company used Vue and Nuxt for their client-side needs and a more versatile server-side with either Express or NestJS w/ TypeScript and TypeORM or MikroORM to deal with the database transactions. PostgreSQL was used as the default database.
  This organization employed a single-digit number of people, including me. While seeming small and humble on the outside, this could not be further from the truth. Each and every single one of the technical people were at the top of their game, given the fact that they have decided to go with the less traditional technologies and still managed to carve quite a niche for themselves.
  They worked in the CAD (computer-assisted-dispatch) industry, or rather, their clients were. The emphasis here was much less on how the code was written and much more on how it was structured.
  The first app I worked on was called ELS (Einsatzleitsystem - "Operations control system" in English) and was meant to be used by contractors in Austria. The users could log into the app (registration was done via admin panel, which I did not work on), create, list, update, delete and call contacts saved, file reports with the government and other affiliated private persons, use the built-in GPS to navigate to the nearest relevant authorities, ask for assistance on the road (e.g. truck drivers) and a lot more features I have since forgotten about.
  This was a software application, using Electron for the windows, Vue for the client-side and Express with PostgreSQL for the server.side.
  The other application I worked on was called AlarmBot. The app was a client and payment tracking application for contractors and anyone who had business dependents (e.g. employers, landlords, other companies / business organizations). Aside from that, it was also an automated dispatcher, which had a fixed phone number and could be called and talked to. The program would then redirect the call to the correct person depending on the situations and circumstances described therein. Originally conceived as a phone app, it used NativeScript & Vue for UI and Express and PostgreSQL for the server-side.
  I left the company in Jan 2022, for a different job, which was more in line with my main technologies.
`;

export const imageAriaLabelledBy3 = `Autview company logo`;

export const aboutAriaLabelledBy4 = `
  By Feb 2022, I had officially graduated the "being junior developer" phase and was given more autonomy in my work.
  This company was much more versatile with their tech stack and used Java, C#, Node and Python on the server-side, with React & Next, Vue and Angular for the front-end.
  I started off by maintaining the internal administrative system with React and Next and quickly shifted to maintaining the company's recruitment tools for developers. This included improving the styles and optimizing the fetch requests to make fewer API calls and maintaining the code-editor and console as well (for coding assignments).
  After this had been completed, I was assigned to a client who had something of a social-media video-sharing application, reminiscent of OnlyFans.
  They used React and Next for the user-facing production application and Vue and Nuxt for the administrator panel. You can imagine the features...
  Having seen quite a bit and still eager and hungry for a more various diet and feeling more confident in my abilities, I had decided to pursue a different opportunity, this time as a senior developer.
`;

export const imageAriaLabelledBy4 = `Prime Software company logo`;

export const aboutAriaLabelledBy5 = `
  In October 2022, I found a job as a senior developer and was put on a project in less than 24 hours after signing the contract.
  I was tasked with working on and overlooking the enrollment and appointment-making applications for a US healthcare service provider.
  The application used React for client-side, Java and NextGen on the server-side.
  Aside from React and Redux and react-router-dom as standard packages, we also used JotForms to display the legal documents and allow users (or rather force users) to accept them before going further.
  Once the project was completed, I was tasked with testing the application with Selenium / Java, so we could see whether the application would break with negative testing input and how to rediagnose and fix the problem if that were to be the case.
  Having completed that, I was assigned with working on a medical application for data scientists in React, and testing it with react-testing-library. This application was extremely data-heavy, and working with inputs, generating tables and graphs, calculating percentages and persisting the data was a daily occurrence. The emphasis was not on understanding the technology, but rather working with large amounts of data.
`;

export const imageAriaLabelledBy5 = `VRize company logo`;
