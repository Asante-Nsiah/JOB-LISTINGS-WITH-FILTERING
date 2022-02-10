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

  const tags = [level, role, ...tools, ...languages];
  return (
    <div
      className={`${classes.wrapper} ${featured ? classes.featuredJob : ""}`}
    >
      <div className={classes.info}>
        <div className={classes.image}>
          <img src={logo} alt={`${company} logo`} />
        </div>

        <div>
          <div className={classes.name}>
            <h2>{company}</h2>
            {job.new && <span className={classes.new}>New!</span>}
            {featured && <span className={classes.featuredFlag}>Featured</span>}
          </div>

          <h3 className={classes.position}>{position}</h3>
          <ul className={classes.details}>
            <li>{postedAt}</li>
            <span aria-hidden="true">&#8226;</span>
            <li>{contract}</li>
            <span aria-hidden="true">&#8226;</span>
            <li>{location}</li>
          </ul>
        </div>
      </div>
      <ul className={classes.tags}>
        {tags.map((tag) => (
          <li>
            <button className={classes.tag} onClick={() => handleClick(tag)}>
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListing;
