import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { storeAllProduct } from "../store/action/productAction";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductScreen from "./ProductScreen";

function HomeScreen() {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.productStore);
  const { loading } = useSelector((state) => state.loaderStore);

  useEffect(() => {
    dispatch(storeAllProduct());
  }, []);

  return (
    <div className="mt-5 mb-2">
      <h3 style={{ color: "#fe4c50" }} className="text-center">
        AVAILABLE PRODUCTS
      </h3>
      <Row>
        {productList &&
          productList.map((product, index) => {
            return (
              <Col item md={6} sm={12} xl={3} lg={4} key={index}>
                <ProductScreen product={product} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export default HomeScreen;
