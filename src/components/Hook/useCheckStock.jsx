import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useCheckStock = (id) => {
  const basketItems = useSelector((state) => state.cart.items);
  const [stockRemined, setStockRemined] = useState(0);
  const checkStock = basketItems?.find((item) => item.id === id);

  useEffect(() => {
    if (checkStock) {
      const stockOfProduct = checkStock.stock - checkStock.quantity;
      if (stockOfProduct >= 0) {
        setStockRemined(stockOfProduct);
      }
    }
  }, [checkStock]);
  return stockRemined;
};

export default useCheckStock;