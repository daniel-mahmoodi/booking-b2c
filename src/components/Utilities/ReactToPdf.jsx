import React from "react";

import { Margin, usePDF } from "react-to-pdf";
import PrintTicketsList from "../PrintTicket/PrintTicketsList";
// import { Button } from "./Button";
// import { Container } from "./Container";

const ReactToPdf = () => {
  const { toPDF, targetRef } = usePDF({
    filename: "usepdf-example.pdf",
    page: { margin: Margin.MEDIUM, wordWrap: "normal" },
  });
  return (
    <div dir="rtl" style={{ fontFamily: "sans-serif", wordWrap: "normal" }}>
      <button onClick={toPDF}>Download PDF</button>
      <div ref={targetRef} style={{ wordWrap: "normal" }}>
        {/* <PrintTicketsList /> */}
      </div>
    </div>
  );
};

export default ReactToPdf;
