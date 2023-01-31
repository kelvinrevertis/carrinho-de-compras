import { Home } from "@/templates/Home";
import React from "react";
import { api } from "./api/axios";


export default function HomePage({ data }: any) {
  return (

    <Home data={data} />
    
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
