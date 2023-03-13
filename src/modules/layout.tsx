import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Header from "./components/Header";

function RootLayout() {
  return (
    <Layout className="w-full h-full">
      <Header />
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default RootLayout;
