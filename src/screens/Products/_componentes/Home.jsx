import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setProducts } from "../../../redux/product/productActions";
import React from 'react';

const Home = () => {
  const product = useSelector((state) => state.product);  // Accedemos al estado de productos en Redux
  const dispatch = useDispatch();

  // useEffect para cargar los productos al iniciar el componente
  useEffect(() => {
    dispatch(
      setProducts([
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
      ])
    );
  }, [dispatch]);  // Añadimos dispatch al array de dependencias como lo requiere ESLint

  return (
    <div>
      <h1>Welcome to the Home Page</h1>  {/* Añadimos el mensaje de bienvenida */}
      <h5>{JSON.stringify(product.PRODUCTS)}</h5>  {/* Muestra los productos en formato JSON */}
    </div>
  );
};

export default Home;