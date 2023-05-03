import "./product.scss"
import Sidebar from '../../../../components/admin/sidebar/Sidebar'
import Navbar from '../../../../components/admin/navbar/Navbar'
import { Button, Table } from 'react-bootstrap'
import { useEffect } from "react"
import Dproductdetail from "../../../../data/Dproductdetails"
import Dproduct from "../../../../data/Dproduct"

import ProductCard from "../../../../components/product/ProductCard"
import ProductDetails from "../../../../components/productdetails/ProductDetails"


const AdminProduct = () => {

  useEffect(() => {
    document.title = "Chi tiết sản phẩm";

    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      <div className="product">
        <div className="table">
          <Table bordered striped responsive>
            <thead>
              <tr>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Bán được</th>
                <th>Giá sản phẩm</th>
              </tr>
            </thead>
            <tbody>
            {Dproduct.map((item, index) => {
                <tr key={index}>
                  <td>{item.image}</td>
                  <td>{item.name} </td>
                  <td>{item.price}</td>
                  <td>{item.price}</td>
                  <td>{item}</td>
                  
                </tr>

            
          })}
           
            </tbody>
          </Table>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AdminProduct
