
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
      stat: {
        label: "",
        stat: "",
      },
    },
    {
      title: "DVCS (Distributed Version Control System)",
      description:
        "This project was part of my collaborative Software Programming class and was made possible through the effort of 4. We designed and implement a modular version control system similar to git. It utilizes Rust, Parnas’ modular design principles, collaborative programming",
      startDate: "Aug '23",
      endDate: "Dec '23",
      website: "",
      links: [
        {
          link: "",
          name: "GitHub Repo",
        },
      ],
      tags: ["Rust, Git, GitHub, Agile Project Management"],
      image: dvcs,
      stat: {
        label: "",
        stat: "",
      },
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
      stat: {
        label: "",
        stat: "",
      },
    },
    {
      title: "AdasTravel",
      description:
        "Extending existing GNN explanation algorithms for node and graph tasks to link prediction on social network and user-object graphs. Contributing to the open-source PyTorch Geometric library.",
      startDate: "Aug, 2022",
      endDate: "Present",
      tags: ["Research", "GNNs", "Python", "Pytorch Geometric"],
      image: adastravel,
      stat: {
        label: "Key Fact",
        stat: "Working with Prof. Rex Ying at Yale",
      },
    },
    
    {
      title: "Currency Converter",
      description:
        "Quickbites integrated with Uber Eats, Doordash, and GrubHub to find the cheapest and fastest food delivery options based on your location, requirements, and preferences.",
      startDate: "Nov, 2020",
      endDate: "Jan, 2021",
      tags: [
        "Deprecated :(",
        "APIs",
        "Python",
        "FastAPI",
        "React Native",
        "Expo",
      ],
      image: shortestpath,
      stat: {
        label: "Key Fact",
        stat: "Downloaded over 1000 times on the App Store",
      },
    },
    {
      title: "Memez",
      description:
        "Implemented similarity, sentiment, and topic analysis on Coursetable reviews using NLP techniques. Wrote a Medium article highlighting key Python libraries to build upon.",
      startDate: "August, 2020",
      endDate: "August, 2020",
      links: [
        {
          link: "",
          name: "",
        },
        {
          link: "",
          name: "Medium Article",
        },
      ],
      tags: ["NLP", "Python", "Gensim"],
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
