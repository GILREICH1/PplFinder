import { useState, useEffect } from "react";
import axios from "axios";

// TODO add error catching
export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=1`);
    setUsers(response.data.results);
    setIsLoading(false);
  }

  return { users, isLoading, fetchUsers };
};
