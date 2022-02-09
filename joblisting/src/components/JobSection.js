import React from "react";

const JobSection = ({ job, setSelectedJob, selectedJob }) => {
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
  const isJobNew = job.new;
  return (
    <section className="section">
      <div className="container">
        <div className="image-container">
          <img
            src={process.env.PUBLIC_URL + logo}
            alt={`${company} company logo`}
          />
        </div>
        <div className="company-container">
          <div className="company-text">
            <p>{company}</p>
            <ul className="company-featured">
              <li>{isJobNew ? "NEW!" : ""}</li>
              <li>{featured ? "FEATURED" : ""}</li>
            </ul>
          </div>
          <h2 className="position">
            <a>{position}</a>
          </h2>
          <div>
            <ul className="company-details">
              <li>{postedAt}</li>
              <li>{contract}</li>
              <li>{location}</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <ul>
          <li>
            <button
              onClick={() => {
                setSelectedJob({ ...selectedJob, roles: [role] });
              }}
            >
              {role}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setSelectedJob({ ...selectedJob, levels: [level] });
              }}
            >
              {level}
            </button>
          </li>
          {languages.map((language) => {
            return (
              <li key={language}>
                <button
                  onClick={() => {
                    if (!selectedJob.languages.includes(language)) {
                      setSelectedJob({
                        ...selectedJob,
                        languages: [...selectedJob.languages, language],
                      });
                    }
                  }}
                >
                  {language}
                </button>
              </li>
            );
          })}
          {tools.map((tool) => {
            return (
              <li key={tool}>
                <button
                  onClick={() => {
                    if (!selectedJob.tools.includes(tool)) {
                      setSelectedJob({
                        ...selectedJob,
                        tools: [...selectedJob.tools, tool],
                      });
                    }
                  }}
                >
                  {tool}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default JobSection;
