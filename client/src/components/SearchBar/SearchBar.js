import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useHistory } from "react-router";

const SearchBar = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [searched, setSearched] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [selected, setSelected] = useState("");

  const handleSearchSubmit = async (query) => {
    if (selected !== "") {
      const res = await axios.get(
        `https://g.tenor.com/v1/search?q=${selected}&key=JZ48O1IW6LCI`
      );
      const searchedData = await res.data.results;
      const filtered = searchedData.filter((ele) =>
        ele.content_description.includes(query)
      );
      setSearched(filtered);
    } else {
      const res = await axios.get(
        `https://g.tenor.com/v1/search?q=${query}&key=JZ48O1IW6LCI`
      );
      const searchedData = await res.data.results;
      setSearched(searchedData);
    }
  };

  const handleSearchChange = async (e) => {
    handleSearchSubmit(e.target.value);
    setUserInput(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelected(e.target.value);
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
      <Col xs={2}>
        <Form.Select
          variant="info"
          title="Dropdown"
          id="input-group-dropdown-1"
          className="me-sm-2"
          onChange={(e) => handleSelectChange(e)}
        >
          <option value="">category</option>
          <option value="gif">GIF</option>
          <option value="emoji">Emoji</option>
          <option value="sticker">Sticker</option>
        </Form.Select>
      </Col>
      <Col xs={7}>
        <FormControl
          type="text"
          aria-label="Text input with dropdown button"
          placeholder="Search"
          onChange={(e) => handleSearchChange(e)}
        />
      </Col>
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
