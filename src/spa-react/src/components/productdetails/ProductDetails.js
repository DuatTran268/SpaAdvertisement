import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Dproductdetail from "../../data/Dproductdetails";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const ProductDetails = () => {

  useEffect(() => {
    document.title = "Chi tiết sản phẩm";

    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <Header />
      <div className="container-lg">
        <h1 className="text-success text-center mt-5 mb-5">
          Chi tiết sản phẩm
        </h1>
        {Dproductdetail.map((productDetail, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-5 text-center">
                <img
                  src={productDetail.image}
                  alt={productDetail.title}
                  width={"50%"}
                />
              </div>
              <div className="col-7">
                <div className="detail_product-content">
                  <h4 className="text-danger">{productDetail.title}</h4>
                  <span className="text-success">
                    {productDetail.price} VNĐ
                  </span>
                  <p>{productDetail.description}</p>
                </div>
                <div className="row">
                  <div className="button-addcart text-end">
                    <Button>Thêm vào giỏ hàng</Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;




// đợi api
// import Footer from "../shared/Footer";
// import Header from "../shared/Header";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import  {Dproduct} from "../../data/Dproduct.js";

// const ProductDetails = () => {
//   const params = useParams();
//   const [productDetail, setProductDetail] = useState(null);
//   const { slug } = params;

//   useEffect(() => {
//     document.title = "Chi tiết sản phẩm";
//     Dproduct(slug).then((data) => {
//       window.scrollTo(0, 0);
//       if (data) {
//         setProductDetail(data);
//         console.log("data check details: ", data);
//       } else {
//         setProductDetail({});
//       }
//     });
//   }, [slug]);

//   if (productDetail) {
//     return (
//       <>
//         <Header />
//         <div className="container-lg">
//           <h1 className="text-success text-center mt-5 mb-5">
//             Chi tiết sản phẩm
//           </h1>
//           <div className="row">
//             <div className="col-5 text-center">
//               <img
//                 src={productDetail.image}
//                 alt={productDetail.title}
//                 width={"50%"}
//               />
//             </div>
//             <div className="col-7">
//               <div className="detail_product-content">
//                 <h4 className="text-danger">{productDetail.title}</h4>
//                 <span className="text-success">{productDetail.price} VNĐ</span>
//                 <p>{productDetail.description}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </>
//     );
//   } else {
//     return <></>;
//   }
// };

// export default ProductDetails;
