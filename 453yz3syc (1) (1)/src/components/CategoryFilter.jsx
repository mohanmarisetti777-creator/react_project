function CategoryFilter({ category, setCategory }) {
  const categories = [
    "All",
    "Coding",
    "Sports",
    "Arts",
    "Entrepreneurship"
  ];

  return (
    <div className="filter-section">

      <h3>Filter by Interest</h3>

      <div className="filter-buttons">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "active-filter" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

    </div>
  );
}

export default CategoryFilter;