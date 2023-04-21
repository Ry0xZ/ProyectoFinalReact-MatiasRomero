import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../utils/firebaseFetching";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";
import ItemError from "../ItemError/ItemError";
import Header from "../Header/Header";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      <Header showAs="Shadow" />
      {loading ? (
        <Loader />
      ) : product ? (
        <Item product={{ id, ...product }} showAs={"Detail"} />
      ) : (
        <ItemError />
      )}
    </>
  );
};

export default ItemDetailContainer;
