import React from 'react';
import '../styles/Portfolio.css';
import portfolio from '../assets/portfolio.PNG';
import resume from '../assets/Lako.pdf';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HiDocumentText } from 'react-icons/hi';

function About()  {
    return (
        <div className="About">
        <section className="flex justify-evenly ">
            <div className="z-10 mt-20 m-8">
                <h1 className="title">
                Hi, my name is James Lako 
                </h1>
                <p className=" description">
                    I am a recent graduate of the University of Rochester with a Bachelors of Arts in Computer 
                    Science. I am currently seeking for Internship/Full-time Roles in Software engineering, especially in the fields of Artificial Intelligence and 
                    Machine Learning. Contact me for any questions you may have or just to chat about my projects. Scroll below to learn about the amazing projects I have built.
                </p>
                <p className="description">
                  Some of my projects are not  publicly accessible due to my program's academic honesty rules. Thus, please contact me if you are a recruiter for a special link if you want to learn more about them.
                </p>
                
                <div className="hidden md:flex w-full my-8 items-center justify-center">
          {[
            {
              link: 'https://www.linkedin.com/in/jameslako',
              icon: <FaLinkedin className="w-6 h-6 mr-1 " />,
              text: 'LinkedIn',
            },
            {
              link: 'https://www.github.com/jameswani',
              icon: <FaGithub className="w-6 h-6 mr-1" />,
              text: 'GitHub',
            },
            {
              link: 'mailto:jlako@u.rochester.edu',
              icon: <MdEmail className="w-6 h-6 mr-1" />,
              text: 'Email',
            },
            {
              link: resume,
              icon: <HiDocumentText className="w-6 h-6 mr-1" />,
              text: 'Resume',
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mx-2 p-2 rounded bg-blue-500 text-white flex">
                {item.icon}
                {item.text}
              </button>
            </a>
          ))}
        </div>
            </div>
            <div className="PortfolioImage" >
            <img className="object-scale-down h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl" src={portfolio} />


            </div>
            
            <div className="topBlur"/>
            <div className="bottomBlur"/>
        </section>
        </div>
    );
};

export default About;