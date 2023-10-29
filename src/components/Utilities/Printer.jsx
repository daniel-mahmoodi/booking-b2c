import React from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import Print from "../PrintTicket/Print";
import { useRef } from "react";
const Printer = () => {
  // const componentRef = React.useRef(null);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // const reactToPrintContent = React.useCallback(() => {
  //   return componentRef.current;
  // }, []);

  // const reactToPrintTrigger = React.useCallback(() => {
  //   return <button>Print using a Functional Component</button>;
  // }, []);

  return (
    <div>
      {/* <ReactToPrint
        content={reactToPrintContent}
        trigger={reactToPrintTrigger}
      /> */}
      <Print ref={componentRef} />
      <p>onBeforeGetContent: Loading...</p>
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};
export default Printer;
