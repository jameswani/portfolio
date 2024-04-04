import React from "react";
import "../styles/Portfolio.css"; // Make sure to import your CSS file

function Experience() {
  return (
    <div className="p-8 mx-auto">
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
        Experiences
      </h1>
      <div className="p-4">
        <ul className="list-disc pl-8">
          <li className="p-2">
            <strong>
              IT Student Lead Consultant (Rochester NY, Jun 2021 – Dec 2023)
            </strong>
            : Provide troubleshooting support to 1,500+ students and staff,
            significantly reducing response time by 80%. • Utilize Jira Service
            Manager for logging, managing, and resolving incidents and requests,
            enhancing service efficiency. • Coordinate task distribution for
            student employee teams and ensure effective communication of
            outcomes to staff members. • Assist with the creation and publishing
            of Knowledge Base articles to support all levels of technical
            assistance.
          </li>
          <li className="p-2">
            <strong>
              Software Development Engineer, Part time (Rochester NY, Jun 2021 –
              Dec 2023)
            </strong>
            : • Built and maintained a lending library application in
            JavaScript, serving 2000+ users. • Led the design and implementation
            of automated testing procedures, improving code quality and
            functionality. • Utilized database management skills to optimize
            equipment reservation processes.
          </li>
          <li className="p-2">
            <strong>
              IT Student Lead Consultant (Rochester NY, Sept 2022 - Dec 2023)
            </strong>
            : Provide troubleshooting support to 1,500+ students and staff,
            significantly reducing response time by 80%. • Utilize Jira Service
            Manager for logging, managing, and resolving incidents and requests,
            enhancing service efficiency. • Coordinate task distribution for
            student employee teams and ensure effective communication of
            outcomes to staff members. • Assist with the creation and publishing
            of Knowledge Base articles to support all levels of technical
            assistance.
          </li>
          <li className="p-2">
            <strong>
              Campus Operations Manager(Rochester, Aug ’23 – Dec ‘23)
            </strong>
            : • Spearheaded a dedicated team of 20+ movers for the efficient
            relocation of over 150 students, overseeing order management via a
            web portal to guarantee timely delivery and storage of personal
            belongings. • Enhanced operational excellence in student relocation
            services, ensuring the seamless coordination and management of a
            large-scale logistics team, leading to the flawless execution of
            storage solutions and punctuality.
          </li>
          <li className="p-2">
            <strong>
              Software Development Engineer(Remote, Jul 2021 - Dec 2021)
            </strong>
            : • Developed a high-performance backend in JavaScript for a beauty
            scheduling app, reducing wait times from days to seconds. •
            Conducted software testing and improved system load performance by
            8%. .
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
