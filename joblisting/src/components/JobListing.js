import React from "react";

const JobListing = ({ job, setActiveFilters, activeFilters }) => {
  const handleClick = (tag) => {
    if (activeFilters.includes(tag)) {
      return;
    }
    setActiveFilters((prevState) => [...prevState, tag]);
  };
  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;

  const classes = {
    tag: "hover:text-white hover:bg-cyan-default ",
  };

  const tags = [level, role, ...tools, ...languages];
  return (
    <div className="container-main">
      <div className="container-sub">
        <div className="logo">
          <img src={logo} alt={`${company} logo`} />
        </div>

        <div>
          <div className="company-details">
            <h2>{company}</h2>
            {job.new && <span className="new-job">New!</span>}
            {featured && <span className="featured">Featured</span>}
          </div>

          <h3 className="position">{position}</h3>
          <ul className="position-details">
            <li>{postedAt}</li>
            <span aria-hidden="true">&#8226;</span>
            <li>{contract}</li>
            <span aria-hidden="true">&#8226;</span>
            <li>{location}</li>
          </ul>
        </div>
      </div>
      <ul className="tags">
        {tags.map((tag) => (
          <li>
            <button className="tag" onClick={() => handleClick(tag)}>
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListing;
