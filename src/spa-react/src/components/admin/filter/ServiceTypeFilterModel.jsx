import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import { getServiceFilter } from "../../../api/ServiceTypeApi";




const ServiceTypeFilter = () => {
  // const serviceTypeFilter = useSelector(state => state.serviceTypeFilter),
  // dispatch = useDispatch(),
  // [filter, setFilter] = useState({});
  const [text, setText] = useState('');
  const [servicesTypeFilter, setServiceTypeFilter] = useState([]);
  
  
  // const handleReset = (e) => {
  //   dispatch(reset());
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getServiceFilter().then((data) => {
      if (data){
        console.log("check data: ", data);
        setServiceTypeFilter({})
      }
      else{
        setServiceTypeFilter([]);
      }
    })
  }, [])


  return (
    <Form method="get"
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
      value={text}
      onChange = {(e) => setText(e.target.value)}
      />
    </Form.Group>
    <Form.Group className="col-auto">
        <Button variant="danger" type="submit">
          Tìm kiếm
        </Button>
        <Link to={`/admin/servicetype/edit`} className="btn btn-success ms-2">Thêm mới</Link>
      </Form.Group>
    </Form>
  );

}

export default ServiceTypeFilter;