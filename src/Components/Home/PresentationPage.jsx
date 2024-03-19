// import React from "react";
// import NavbarSignedOut from "../Navbars/NavbarSignedOut";

// const PresentationPage = () => {
//   return (
//     <>
//       <NavbarSignedOut />
//       <div className="presentation-container">
//         <h1>Welcome!</h1>
//         <div className="circle-container">

//           <img
//             src={"/quickskill2.png"}
//             alt="QuickSkill Logo"
//             className="logo"
//           />
//         </div>
//         <h2>Master skills fast and efficient using AI</h2>
//       </div>
//     </>
//   );
// };

// export default PresentationPage;
import React from "react";
import NavbarSignedOut from "../Navbars/NavbarSignedOut";
import { Container, Row, Col } from "react-bootstrap";

const PresentationPage = () => {
  return (
    <>
      <NavbarSignedOut />
      <Container className="presentation-container">
        <Row>
          <Col>
            <h1>Welcome!</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6} className="circle-container">
            {/* Place your icons here */}
            <img
              src={"/quickskill2.png"}
              alt="QuickSkill Logo"
              className="logo"
            />
            <img src={"/pres1.svg"} alt="Icon 1" className="icon icon1" />
            <img src={"/pres2.svg"} alt="Icon 2" className="icon icon2" />
            <img src={"/pres3.svg"} alt="Icon 3" className="icon icon3" />
            <img src={"/pres4.svg"} alt="Icon 4" className="icon icon4" />
            <img src={"/pres5.svg"} alt="Icon 5" className="icon icon5" />
            <img src={"/pres6.svg"} alt="Icon 6" className="icon icon6" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="slogan">
              Master skills fast and efficient using AI
            </h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PresentationPage;
