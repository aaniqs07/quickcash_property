// import { COLORS } from "@constants";
// import { Form, Input } from "antd";
// import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// export const Footer = () => {
//   const [form] = Form.useForm();

//   const handleFinish = async (values: any) => {
//     try {
//       console.log(values);
//     } catch (error) {
//       console.error("Error adding new goal:", error);
//     }
//   };

//   return (
//     <FooterDiv>
//       <Container>
//         <Row className="text-start text-white">
//           <Col lg={3} className="mt-4 pe-lg-5">
//             <FooterHeading>VetMed Match</FooterHeading>
//             <p style={{ color: COLORS.themeWhite, lineHeight: 2 }}>
//               Empowering the veterinary value chain with the tools and expertise
//               they need to succeed. We are your trusted partner and leader in
//               veterinary education.
//             </p>
//           </Col>
//           <Col lg={3} className="mt-3 mt-lg-0">
//             <MenuHeading>About</MenuHeading>
//             <LinksContainer>
//               <FooterLink to={"#"}>About Us</FooterLink>
//               <FooterLink to={"#"}>Contact Us</FooterLink>
//               <FooterLink to={"#"}>Privacy Policy</FooterLink>
//               <FooterLink to={"#"}>Terms of Service</FooterLink>
//             </LinksContainer>
//           </Col>
//           <Col lg={3} className="mt-3 mt-lg-0">
//             <MenuHeading>Quick Links</MenuHeading>
//             <LinksContainer>
//               <FooterLink to={"#"}>Home</FooterLink>
//               <FooterLink to={"#"}>About</FooterLink>
//               <FooterLink to={"#"}>Search</FooterLink>
//               <FooterLink to={"#"}>Feedback</FooterLink>
//             </LinksContainer>
//           </Col>
//           <Col lg={3} className="pe-lg-5 mt-3 mt-lg-0">
//             <MenuHeading>Newsletter</MenuHeading>
//             <p>
//               Join our newsletter today to catchup so you don’t miss out on
//               anything!
//             </p>
//             <div className="mt-4">
//               <Form form={form} onFinish={handleFinish} layout="vertical">
//                 <Form.Item
//                   name="email"
//                   rules={[
//                     { required: true, message: "Email is required." },
//                     {
//                       type: "email",
//                       message: "Please enter a valid email address.",
//                     },
//                   ]}
//                 >
//                   <Input placeholder="Email" style={{ height: "40px" }} />
//                 </Form.Item>
//                 <Form.Item>
//                   <FormButton>Join</FormButton>
//                 </Form.Item>
//               </Form>
//             </div>
//           </Col>
//         </Row>
//         <CopyRight>
//           Copyright © 2025 Vetucore LLC - All Rights Reserved.
//         </CopyRight>
//       </Container>
//     </FooterDiv>
//   );
// };

// const FooterDiv = styled.div`
//   padding-top: 5em;
//   border-top: 2px solid #ffffff;
//   background-color: ${COLORS.themeMidnightBlue};
//   text-align: center;
// `;
// const FooterHeading = styled.h5`
//   font-size: 2em;
//   color: ${COLORS.primary};
//   font-weight: 600;
// `;
// const MenuHeading = styled.h5`
//   font-size: 1.2em;
//   color: ${COLORS.primary};
//   font-weight: 600;
// `;
// const LinksContainer = styled.div`
//   margin-top: 1.5em;
// `;
// const FooterLink = styled(Link)`
//   color: ${COLORS.themeWhite} !important;
//   display: block;
//   margin-bottom: 1em;
//   transition: 300ms all ease-in-out;

//   &:hover {
//     opacity: 0.8;
//   }
// `;
// const FormButton = styled.button`
//   background-color: #ffffff;
//   color: ${COLORS.themeMidnightBlue};
//   padding: 0.5em 1.5em;
//   border-radius: 50px;
//   font-weight: 600;
//   border: 1px solid transparent;
//   transition: 300ms all ease-in-out;
//   &:hover {
//     color: #ffffff;
//     background-color: transparent;
//     border-color: #ffffff;
//   }
// `;
// const CopyRight = styled.p`
//   color: #ffffff;
//   padding: 1em;
//   text-align: center;
//   border-top: 1px solid #ffffff;
//   margin-top: 3em;
// `;

// export default Footer;
