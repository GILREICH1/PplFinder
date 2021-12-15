import React from "react";
import CheckBox from "components/CheckBox";
import * as S from "./style";

const Filter = ({ setFilteredUsers, users }) => {
  const [filterOptions, setFilterOptions] = React.useState([]);
  const [activeFilters, setActiveFilters] = React.useState([]);
  const [showAll, setShowAll] = React.useState(false);

  React.useEffect(() => {
    const countries = users
      .map((user) => user.location.country)
      .filter((v, i, a) => a.indexOf(v) === i);
    if (showAll) setFilterOptions(countries);
    else setFilterOptions(countries.slice(0, 5));
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
    <S.Filters>
      {filterOptions.map((country) => (
        <CheckBox onChange={toggleFilter} value={country} key={country} label={country} />
      ))}
      <S.ShowAllButton showAll={showAll} onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show less" : "Show All"}
      </S.ShowAllButton>
    </S.Filters>
  );
};

export default Filter;
