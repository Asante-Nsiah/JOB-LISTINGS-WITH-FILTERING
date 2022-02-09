const Filters = ({ activeFilters, handleRemove, clearFilters }) => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>
        {activeFilters.map((filter) => (
          <li className={classes.filterItem}>
            {filter}
            <button
              type="button"
              onClick={() => handleRemove(filter)}
              className={classes.removeButton}
              style={{
                backgroundImage: "url(./images/icon-remove.svg)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></button>
          </li>
        ))}
      </ul>
      <button
        className={classes.clearButton}
        type="button"
        onClick={clearFilters}
      >
        Clear
      </button>
    </div>
  );
};

export default Filters;
