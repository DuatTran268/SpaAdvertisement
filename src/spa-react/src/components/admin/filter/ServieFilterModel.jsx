import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import {reset, updateName} from "../../../Redux/Reducer"
import { getAllUser } from "../../../api/User";
import { getAllService } from "../../../api/ServiceApi";



const ServiceFilter = () => {
  const serviceFilter = useSelector(state => state.serviceFilter),
  dispatch = useDispatch(),
  [filter, setFilter] = useState();
  
  const handleReset = (e) => {
    dispatch(reset());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getAllService().then((data) => {
      if (data){
        setFilter(data)
      }
      else{
        setFilter([]);
      }
    })
  }, [])


  return (
    <Form method="get"
    onReset={handleReset}
    onSubmit={handleSubmit}
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
      value={serviceFilter}
      onChange = {(e) => dispatch(updateName(e.target.value))}
      />
    </Form.Group>
    <Form.Group className="col-auto">
        <Button variant="danger" type="submit">
          Xoá Lọc
        </Button>
        <Link to={`/admin/service/edit`} className="btn btn-success ms-2">Thêm mới</Link>
      </Form.Group>
    </Form>
  );

}

export default ServiceFilter;