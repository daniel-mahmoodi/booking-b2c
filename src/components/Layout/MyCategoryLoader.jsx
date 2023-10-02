import React from "react";
import ContentLoader from "react-content-loader";

const MyCategoryLoader = (props) => (
     <ContentLoader 
     speed={2}
     width={120}
     height={50}
     viewBox="0 0 120 50"
     backgroundColor="#ababab"
     foregroundColor="#ecebeb"
     {...props}
   >
     <rect x="0" y="0" rx="3" ry="3" width="112" height="39" />
   </ContentLoader>
);

export default MyCategoryLoader;
