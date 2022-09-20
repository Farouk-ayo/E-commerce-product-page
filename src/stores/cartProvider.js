import cartContext from "./cartContext";



const CartProvider = (props) => {
  return (
    <cartContext.Provider value={cartContext}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
