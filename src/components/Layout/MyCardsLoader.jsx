import React from "react";
import ContentLoader from "react-content-loader";

const MyCardsLoader = (props) => (
  <ContentLoader
    speed={5}
    width={300}
    height={640}
    viewBox="0 0 300 640"
    backgroundColor="#ababab"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="240" height="400" />
  </ContentLoader>
);

export default MyCardsLoader;
