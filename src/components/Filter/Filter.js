import React from "react";
import CheckBox from "components/CheckBox";
import * as S from "./style";

const shortFilterDisplay = 6;

const Filter = ({ setFilteredUsers, users }) => {
  const [filterOptions, setFilterOptions] = React.useState([]);
  const [activeFilters, setActiveFilters] = React.useState([]);
  const [showAll, setShowAll] = React.useState(false);

  React.useEffect(() => {
    const countries = users
      .map((user) => user.location.country)
      .filter((country, i, a) => a.indexOf(country) === i);
    if (showAll) setFilterOptions(countries);
    else setFilterOptions(countries.slice(0, shortFilterDisplay + 1));
  }, [showAll]);

  const toggleFilter = ({ checked, value }) => {
    if (checked) {
      setActiveFilters((prev) => prev.filter((e) => e !== value));
    } else {
      setActiveFilters((prev) => [...prev, value]);
    }
  };

  React.useEffect(() => {
    if (activeFilters.length === 0) {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(() =>
        users.filter((user) => activeFilters.includes(user.location.country))
      );
    }
  }, [activeFilters]);

  return (
    <>
      <S.Filters>
        {filterOptions.map((country) => (
          <CheckBox
            onChange={toggleFilter}
            value={country}
            key={country}
            label={country}
          />
        ))}
      </S.Filters>
      <S.ShowAllButton
        disabled={filterOptions.length <= shortFilterDisplay}
        showAll={showAll}
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show less" : "Show All Filters"}
      </S.ShowAllButton>
    </>
  );
};

export default React.memo(Filter);
