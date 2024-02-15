import React from "react";
import styled from "styled-components";

const BackgroundImage = () => {
  return (
    <BackgroundContainer>
      <img
        src="https://res.cloudinary.com/dud6iqpvt/image/upload/v1708007350/p2d7otejhfenfiovwp2r.jpg"
        alt="no internet connection"
      />
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;

export default BackgroundImage;
