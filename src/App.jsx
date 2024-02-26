import { Header } from "./components/Header";
import { HeroArea } from "./components/HeroArea";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Activities } from "./components/Activities";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";

import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <HeroArea />
      <h1 id="skills" className="title">
        My skills
      </h1>
      <p className="description">What I know</p>
      <Skills />
      <h1 id="about" className="title">
        About me
      </h1>
      <p className="description">My experience and education</p>
      <About />
      <h1 id="projects" className="title">
        Projects
      </h1>
      <p className="description">Highlights of my best work</p>
      <Projects />
      <h1 id="activities" className="title">
        Activities
      </h1>
      <p className="description">My interests and volunteering activities</p>
      <Activities />
      <h1 id="contact" className="title">
        Let's connect
      </h1>
      <p className="description">I'm available to work!</p>
      <a href="https://drive.google.com/file/d/1fGopAbdhZ7RGu9qkzKpnqK0vWa7c4nUP/view?usp=sharing">
        <button className="button">Download CV</button>
        </a>
      <Contacts />
      <Footer />
    </div>
  );
}