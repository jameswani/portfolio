
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
      title: "Connect 4 AI Agent",
      description:
        "GitHub Trends dives deep into the GitHub API to bring you insightful metrics on your contributions, broken by repository and language.",
      startDate: "May, 2020",
      endDate: "Present",
      website: "https://githubtrends.io",
      links: [
        {
          link: "https://github.com/avgupta456/github-trends",
          name: "GitHub Repo",
        },
      ],
      tags: ["GitHub API", "Python", "FastAPI", "MongoDB", "React"],
      image:connect4,
      stat: {
        label: "Key Stat",
        stat: "2000+ users have created a GitHub Wrapped",
      },
    },
    {
      title: "DVCS (Distributed Version Control System)",
      description:
        "Statbotics modernizes FRC data analytics by calculating and disseminating key metrics including Elo and component OPRs",
      startDate: "Sept, 2021",
      endDate: "Present",
      website: "https://statbotics.io",
      links: [
        {
          link: "https://github.com/avgupta456/statbotics",
          name: "GitHub Repo",
        },
      ],
      tags: ["Python", "FastAPI", "SQL", "React", "GCP"],
      image: dvcs,
      stat: {
        label: "Key Stat",
        stat: "Over 40,000 users have used Statbotics",
      },
    },
    {
      title: "NFA-DFA",
      description:
        "Hopscotch helps you discover suitable neighborhoods based on many factors: budget, grocery stores, gyms, subway lines, bike share, parks, safety, proximity to specific locations and more",
      startDate: "August, 2022",
      endDate: "August, 2022",
      website: "https://hopscotch.nyc",
      links: [
        {
          link: "https://www.producthunt.com/products/hopscotch-6",
          name: "Product Hunt",
        },
      ],
      tags: ["Data Scraping", "Jupyter", "React", "Tailwind"],
      image: nfa,
      stat: {
        label: "Shortest Path",
        stat: "Built Hopscotch in just one week at HackLodge.",
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
          link: "https://github.com/avgupta456/medium_nlp",
          name: "GitHub Repo",
        },
        {
          link: "https://medium.com/@avgupta456/natural-language-processing-nlp-dont-reinvent-the-wheel-8cf3204383dd",
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
