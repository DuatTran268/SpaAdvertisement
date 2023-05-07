import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getServiceFilter } from "../../../api/ServiceTypeApi";
import {
  reset,
  updateName,
  updatePrice,
} from "../../../Redux/servicetype/ServiceTypeReducer";

const ServiceTypeFilter = () => {
  const serviceTypeFilter = useSelector((state) => state.serviceTypeFilter),
    dispatch = useDispatch();

  const handleReset = (e) => {
    dispatch(reset());
  };

  return (
    <Form
      method="get"
      onSubmit={handleReset}
      className="row gy-2 gx-3 align-items-center p-2"
    >
      <Form.Group className="col-auto">
        <Form.Label className="visually-hidden">Tên</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nhập tên dịch vụ"
          name="name"
          value={serviceTypeFilter.name}
          onChange={(e) => dispatch(updateName(e.target.value))}
        />
      </Form.Group>

      <Form.Group className="col-auto">
        <Form.Label className="visually-hidden">Giá</Form.Label>
        <Form.Control
          type="text"
          placeholder="Giá tiền"
          name="price"
          value={serviceTypeFilter.price}
          onChange={(e) => dispatch(updatePrice(e.target.value))}
        />
      </Form.Group>

      <Form.Group className="col-auto">
        <Link to={`/admin/servicetype/edit`} className="btn btn-success ms-2">
          Thêm mới
        </Link>
      </Form.Group>
    </Form>
  );
};

export default ServiceTypeFilter;
