import React, { useState } from "react";
import Layout from "../../components/Layout";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import Input from "../../components/UI/Input";
import Modal from "../../components/UI/Modal";
import { useSelector, useDispatch } from "react-redux";
// import { addProduct, deleteProductById } from "../../actions";
import "./style.css";

import {
  IoIosAdd,
  IoMdInformationCircle,
  IoIosTrash,
  IoMdCreate,
} from "react-icons/io";

/**
 * @author
 * @function Customers
 **/

const Customers = (props) => {
  // const [fullname, setFullname] = useState("");
  // const [email, setEmail] = useState("");
  // const [price, setPrice] = useState("");
  // const [description, setDescription] = useState("");
  // const [categoryId, setCategoryId] = useState("");
  // const [productPictures, setProductPictures] = useState([]);
  const [show, setShow] = useState(false);
  const [productDetailModal, setProductDetailModal] = useState(false);
  const [productDetails, setProductDetails] = useState(null);
  const category = useSelector((state) => state.category);
  const customer = useSelector((state) => state.customer);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
  };

  // const submitProductForm = () => {
  //   const form = new FormData();
  //   form.append("fullname", fullname);
  //   form.append("email", email);
  //   form.append("price", price);
  //   form.append("description", description);
  //   form.append("category", categoryId);

  //   for (let pic of productPictures) {
  //     form.append("productPicture", pic);
  //   }

  //   dispatch(addProduct(form)).then(() => setShow(false));
  // };
  const handleShow = () => setShow(true);

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }

    return options;
  };

  // const handleProductPictures = (e) => {
  //   setProductPictures([...productPictures, e.target.files[0]]);
  // };
  const customerTemp = [{
    fullname : "zafar im",
    email : "testuser@test.com"
  }]

  const renderCustomers = () => {
    return (
      <Table responsive="sm" striped bordered hover>
        <thead className="bg-dark text-light">
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {customerTemp.length > 0
            ? customerTemp.map((cust, index) => (
                <tr key={cust._id}>
                  <td>{index+1}</td>
                  <td>{cust.fullname}</td>
                  <td>{cust.email}</td>
                  
                    {/* <td>
                    <ButtonGroup>
                      <Button
                        variant="primary"
                        onClick={() => showProductDetailsModal(product)}
                      >
                        <IoMdInformationCircle />
                        &nbsp;Info
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => {
                          const payload = {
                            productId: product._id,
                          };
                          dispatch(deleteProductById(payload));
                        }}
                      >
                        <IoIosTrash />
                        &nbsp;Del
                      </Button>
                      <Button variant="secondary">
                        <IoMdCreate />
                        &nbsp;Edit
                      </Button> 
                    </ButtonGroup>
                      </td>*/}
                  
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    );
  };

  // const renderAddProductModal = () => {
  //   return (
  //     <Modal
  //       show={show}
  //       handleClose={handleClose}
  //       modalTitle={"Add New Product"}
  //       onSubmit={submitProductForm}
  //     >
  //       <Input
  //         label="Full Name"
  //         value={fullname}
  //         placeholder={`Product Name`}
  //         onChange={(e) => setFullname(e.target.value)}
  //       />
  //       <Input
  //         label="email"
  //         value={email}
  //         placeholder={`email`}
  //         onChange={(e) => setEmail(e.target.value)}
  //       />
  //       <Input
  //         label="Price"
  //         value={price}
  //         placeholder={`Price`}
  //         onChange={(e) => setPrice(e.target.value)}
  //       />
  //       <Input
  //         label="Description"
  //         value={description}
  //         placeholder={`Description`}
  //         onChange={(e) => setDescription(e.target.value)}
  //       />
  //       <select
  //         className="form-control"
  //         value={categoryId}
  //         onChange={(e) => setCategoryId(e.target.value)}
  //       >
  //         <option>select category</option>
  //         {createCategoryList(category.categories).map((option) => (
  //           <option key={option.value} value={option.value}>
  //             {option.name}
  //           </option>
  //         ))}
  //       </select>
  //       {productPictures.length > 0
  //         ? productPictures.map((pic, index) => (
  //             <div key={index}>{pic.name}</div>
  //           ))
  //         : null}
  //       <input
  //         type="file"
  //         name="productPicture"
  //         onChange={handleProductPictures}
  //       />
  //     </Modal>
  //   );
  // };

  const handleCloseProductDetailsModal = () => {
    setProductDetailModal(false);
  };

  const showProductDetailsModal = (product) => {
    setProductDetails(product);
    setProductDetailModal(true);
  };

  // const renderProductDetailsModal = () => {
  //   if (!productDetails) {
  //     return null;
  //   }

  //   return (
  //     <Modal
  //       show={productDetailModal}
  //       handleClose={handleCloseProductDetailsModal}
  //       modalTitle={"Product Details"}
  //       size="lg"
  //     >
  //       <Row>
  //         <Col md="6">
  //           <label className="key">Name</label>
  //           <p className="value">{productDetails.name}</p>
  //         </Col>
  //         <Col md="6">
  //           <label className="key">Price</label>
  //           <p className="value">{productDetails.price}</p>
  //         </Col>
  //       </Row>
  //       <Row>
  //         <Col md="6">
  //           <label className="key">Quantity</label>
  //           <p className="value">{productDetails.quantity}</p>
  //         </Col>
  //         <Col md="6">
  //           <label className="key">Category</label>
  //           <p className="value">{productDetails.category.name}</p>
  //         </Col>
  //       </Row>
  //       <Row>
  //         <Col md="12">
  //           <label className="key">Description</label>
  //           <p className="value">{productDetails.description}</p>
  //         </Col>
  //       </Row>
  //       <Row>
  //         <Col>
  //           <label className="key">Product Pictures</label>
  //           <div style={{ display: "flex" }}>
  //             {productDetails.productPictures.map((picture) => (
  //               <div className="productImgContainer">
  //                 <img src={picture.img} alt="" />
  //               </div>
  //             ))}
  //           </div>
  //         </Col>
  //       </Row>
  //     </Modal>
  //   );
  // };
  return (
    // <Layout sidebar>
    <>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>
                <b>Customers</b>
              </h4>
              {/* <Button variant="success" className="mb-2" onClick={handleShow}>
                <IoIosAdd />
                &nbsp;Add Customer
              </Button> */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>{renderCustomers()}</Col>
        </Row>
      </Container>
      {/* {renderAddProductModal()} */}
      {/* {renderProductDetailsModal()} */}
    </>
    // </Layout>
  );
};

export default Customers;
