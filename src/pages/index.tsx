import React from "react";
import { api } from "./api/axios";

export default function Home({ data }) {
  const products = data.products;

  return (
    <>
      <h1>Produtos:</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.id}: {product.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export const getServerSideProps = async () => {
  const { data } = await api.get("products?page=1&rows=8&sortBy=id&orderBy=ASC");

  return {
    props: {
      data,
    },
  };
};
