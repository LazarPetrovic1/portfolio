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