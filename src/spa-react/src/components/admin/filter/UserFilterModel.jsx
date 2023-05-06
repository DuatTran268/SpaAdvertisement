import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import { reset, updateFullName, updateEmail } from "../../../Redux/user/UserReducer";

const UserFilter = () => {
  const userFilter = useSelector(state => state.userFilter),
  dispatch = useDispatch();
  
  
  const handleReset = (e) => {
    dispatch(reset());
  }

 


  return (
    <Form method="get"
    onReset={handleReset}
    className="row gy-2 gx-3 align-items-center p-2"
    >
    <Form.Group className="col-auto">
      <Form.Label className="visually-hidden">
        Tên
      </Form.Label>
      <Form.Control 
      type="text"
      placeholder="Nhập tên"
      name="name"
      value={userFilter.name}
      onChange = {(e) => dispatch(updateFullName(e.target.value))}
      />
    </Form.Group>
    <Form.Group className="col-auto">
      <Form.Label className="visually-hidden">
        Email
      </Form.Label>
      <Form.Control 
      type="text"
      placeholder="Nhập email"
      name="email"
      value={userFilter.email}
      onChange = {(e) => dispatch(updateEmail(e.target.value))}
      />
    </Form.Group>
    <Form.Group className="col-auto">
        <Link to={`/admin/users/edit`} className="btn btn-success ms-2">Thêm mới</Link>
      </Form.Group>
    </Form>
  );
}

export default UserFilter;