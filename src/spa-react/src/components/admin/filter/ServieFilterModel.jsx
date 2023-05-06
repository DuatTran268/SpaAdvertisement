import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import {reset, updateName} from "../../../Redux/Reducer"




const ServiceFilter = () => {
  const serviceFilter = useSelector(state => state.serviceFilter),
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
      value={serviceFilter.name}
      onChange = {(e) => dispatch(updateName(e.target.value))}
      />
    </Form.Group>
    <Form.Group className="col-auto">
        <Link to={`/admin/service/edit`} className="btn btn-success ms-2">Thêm mới</Link>
      </Form.Group>
    </Form>
  );

}

export default ServiceFilter;