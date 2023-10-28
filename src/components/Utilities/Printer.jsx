import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import mycomponent from "./mycomponent";
const Printer = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <mycomponent ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};
export default Printer;
