
import React from 'react';
import Card from './Card.jsx';
import nfa from "../assets/projects/nfa.png";
import shortestpath from "../assets/projects/shortestpath.png";
import adastravel from "../assets/projects/adastravel.png";
import dvcs from "../assets/projects/dvcs.png";
import connect4 from "../assets/projects/connect4.png";


function Projects() {
  const projects = [
    {
      title: "Connect 4 AI",
      description:
      "This project uses an AI agent for Connect Four with an average 95% win/tie ratio running in under 45 milliseconds. It utilizes Java, Adversarial search, Alpha beta pruning, Java GUI and OOP",
      startDate: "May, 2020",
      endDate: "Present",
      website: "",
      links: [
        {
          link: "",
          name: "",
        },
      ],
      tags: ["Java, Minimax-Maxima Algorithm, Alpha-beta pruning"],
      image:connect4,
      
    },
    {
      title: "DVCS (Distributed Version Control System)",
      description:
        "This project was part of my collaborative Software Programming class and was made possible through the effort of 4. We designed and implement a modular version control system similar to git. It utilizes Rust, Parnas’ modular design principles and collaborative programming.",
      startDate: "Aug '23",
      endDate: "Dec '23",
      website: "",
      links: [
        {
          link: "",
          name: "",
        },
      ],
      tags: ["Rust, Git, GitHub, Agile Project Management"],
      image: dvcs,
      
    },
    {
      title: "NFA-DFA",
      description:
        "An efficient tool for conversion between finite state and nondeterministic finite state automata Utilized C, finite and nonfinite automata, CLion, GitHub, git",
      startDate: "Fall 22",
      endDate: "",
      website: "",
      links: [
        {
          link: "",
          name: "",
        },
      ],
      tags: ["C, DFA-NFA, CLion, MakeC"],
      image: nfa,
      
    },
    {
      title: "AdasTravel",
      description:
        "Adastravel was a bus scheduling app designed to efficiently schedule bus traveling for the local population in Tanzania.",
      startDate: "Aug, 2022",
      endDate: "Present",
      tags: ["JavaScript", "MySQL", "React", "Rest-API"],
      image: adastravel,
      
    },
    
    {
      title: "Currency Converter",
      description:
        "Currency converter was designed to show real time currency exchange rates as part of my Android development class.",
      startDate: "Nov, 2020",
      endDate: "Jan, 2021",
      tags: [
        "APIs",
        "Kotlin",
      ],
      image: shortestpath,
      
    },
    {
      title: "Memez",
      description:
        "Like Currency converter, Memez was part of my Android Development class and was so friends could create and share memes with each other. This was an interactive project where users could create their own memes from ",
      startDate: "August, 2020",
      endDate: "September, 2020",
      links: [
        {
          link: "",
          name: "",
        },
        {
          link: "",
          name: "",
        },
      ],
      tags: ["Kotlin", "MongoDB"],
      image: nfa,
    },
  ];

  return (
    <section className="max-w-full mx-auto mt-10  ">
      <h1 className="text-5xl font-semibold text-gray-800 mb-4">
        Projects
      </h1>

      <div className="mx-auto  px-4 mr-1 ">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            links={project.links}
            startDate={project.startDate}
            endDate={project.endDate}
            website={project.website}
            stat={project.stat}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
