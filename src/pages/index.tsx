import React from "react"; 
import Header from "@/components/Header";
import OrdersWall from "@/components/OrdersWall";
import OrderForm from "@/components/OrderForm";

export default function Home() {
  
  return (
    <>
      <Header name="Lucas" surname="Xisto"/>
      <OrdersWall />
      <OrderForm />
    </>
  );
};
