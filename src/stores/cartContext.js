import React from "react";

const cartContext = React.createContext({
  id: [],
  num: [],
  title: [],
  img: [],
  price: [],
  empty: null,
  spans:null,
  discount: [],
  totalPrice: [],
});

export default cartContext;
