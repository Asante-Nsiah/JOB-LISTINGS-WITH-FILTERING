const Filters = ({ activeFilters, handleRemove, clearFilters }) => {
  const classes = {
    removeButton: "hover:bg-cyan-verydark",
    clearButton: "hover:underline",
    wrapper:
    "bg-white w-10/12 max-w-6xl p-8 flex items-center justify-between w-100 transform translate-y-1/2 rounded",   
list: "flex gap-4 flex-wrap",
filterItem
    "bg-cyan-light text-cyan-default px-2 pt-2 pb-1 pr-10 rounded text-sm font-bold relative",
removeButton:
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
