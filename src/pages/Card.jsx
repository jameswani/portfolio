import React from "react";
import "../styles/Portfolio.css"; // Make sure to import your CSS file

const Card = ({
  title,
  description,
  image,
  tags,
  links,
  startDate,
  endDate,
  website,
  stat,
}) => {
  // Convert tags array to a string, and join links into anchor tags if they exist
  const tagsString = tags?.join(", ") || "";
  const linksElements = links?.map((link, index) => (
    <a
      key={index}
      href={link.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-indigo-500 hover:text-indigo-600"
    >
      {link.name}
    </a>
  ));

  return (
    <div className="card  bg-gray-100 shadow-lg rounded flex">
      <div className="image-content object-cover">
        {" "}
        {image && (
          <div
            className="card-image object-scale-down"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}
      </div>
      <div className="card-content px-5 bg-gray-100 shadow-lg rounded flex flex-col">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="card-tags">{tagsString}</p>
        <div className="card-links">{linksElements}</div>
        {stat && (
          <p className="card-stat">
            <strong>{stat.label}: </strong>
            {stat.stat}
          </p>
        )}
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="card-read-more"
          >
            View
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
