import React from "react";
import { COUNTRY_FILTERS } from "constant";
import CheckBox from "components/CheckBox";
import * as S from "./style";

const Filter = ({ setFilteredUsers, users }) => {
  const [activeFilters, setActiveFilters] = React.useState([]);

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
      {COUNTRY_FILTERS.map((country) => (
        <CheckBox onChange={toggleFilter} value={country} key={country} label={country} />
      ))}
    </S.Filters>
  );
};

export default Filter;
