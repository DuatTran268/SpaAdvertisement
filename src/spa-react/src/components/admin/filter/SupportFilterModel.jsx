import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import { reset, updateFullName, updatePhoneNumber  } from "../../../Redux/support/SupportReducer";

const SupportFilter = () => {
  const supportFilter = useSelector(state => state.userFilter),
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
      value={supportFilter.name}
      onChange = {(e) => dispatch(updateFullName(e.target.value))}
      />
    </Form.Group>
    <Form.Group className="col-auto">
      <Form.Label className="visually-hidden">
        Số điện thoại
      </Form.Label>
      <Form.Control 
      type="text"
      placeholder="Nhập số điện thoại"
      name="phoneNumber"
      value={supportFilter.phoneNumber}
      onChange = {(e) => dispatch(updatePhoneNumber(e.target.value))}
      />
    </Form.Group>
    {/* <Form.Group className="col-auto">
        <Link to={`/admin/support/edit`} className="btn btn-success ms-2">Thêm mới</Link>
      </Form.Group> */}
    </Form>
  );
}

export default SupportFilter;