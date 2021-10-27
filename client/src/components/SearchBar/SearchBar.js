import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import axios from "axios";
import CardList from "../CardList";
import { useHistory } from "react-router";

const SearchBar = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [searched, setSearched] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSearchSubmit = async (query) => {
    const res = await axios.get(
      `https://g.tenor.com/v1/search?q=${query}&key=JZ48O1IW6LCI`
    );
    const searchedData = await res.data.results;
    setSearched(searchedData);
  };

  const handleSearchChange = async (e) => {
    handleSearchSubmit(e.target.value);
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    if (searched) {
      history.push({
        pathname: "/results",
        state: {
          searched,
          userInput,
        },
      });
    }
  };
  const cardStyle = {
    display: show ? "block" : "none",
  };

  return (
    <InputGroup onSubmit={handleSearchSubmit}>
      <FormControl
        type="text"
        placeholder="Search"
        onChange={(e) => handleSearchChange(e)}
      />
      <Button
        variant="primary"
        id="button-addon2"
        type="submit"
        onClick={handleClick}
        className="rounded-end"
      >
        Go
      </Button>
      <div className="search_result" style={cardStyle}>
        <div className="result_container"></div>
      </div>
    </InputGroup>
  );
};

export default SearchBar;
