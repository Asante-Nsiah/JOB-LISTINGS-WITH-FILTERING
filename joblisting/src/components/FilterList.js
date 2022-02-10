const Filters = ({ activeFilters, handleRemove, clearFilters }) => {
  const classes = {
    removeButton: "hover:bg-cyan-verydark",
    clearButton: "hover:underline",
  };
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
