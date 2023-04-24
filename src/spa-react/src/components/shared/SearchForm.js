import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Form } from "react-bootstrap";

const SearchForm = () => {
  return (
    <Form className="d-flex">
      <Form.Control type="text" placeholder="Tìm kiếm theo từ khoá" required />
      <Button type="submit">
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      </Button>
    </Form>
  );
};

export default SearchForm;
