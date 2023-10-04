import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useCheckStock = (id, capacity, reservedTemporary) => {
  const items = useSelector((state) => state.cart.items);
  const [stockRemined, setStockRemined] = useState(
    capacity - reservedTemporary
  );
  const checkStock = items?.find((item) => item.ticketId === id);

  useEffect(() => {
    if (checkStock) {
      const stockOfTicket = capacity - checkStock.count;
      if (stockOfTicket >= 0) {
        setStockRemined(stockOfTicket);
      }
    } else {
      setStockRemined(capacity);
    }
  }, [capacity, checkStock, reservedTemporary]);
  return stockRemined;
};

export default useCheckStock;
