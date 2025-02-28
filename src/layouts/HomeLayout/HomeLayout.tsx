import { Header } from "@layouts";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const { Content } = Layout;

export const HomeLayout = () => {
  return (
    <Layout
      style={{ height: "100%", overflow: "hidden", position: "relative" }}
    >
      q
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </Layout>
  );
};

const ContentWrapper = styled(Content)`
  flex: 1;
`;

export default HomeLayout;
