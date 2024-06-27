import { Employees } from "components/employees";
import { Jobs } from "components/jobs";
import { Layout } from "antd";
const { Header, Sider, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  background: "#81b8dd",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  background: "#fff",
  overflow: "auto",
  padding: "1rem 0.5rem",
};
const siderStyle = {
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  overflow: "auto",
  backgroundColor: "eee",
  background: "#fff",
  borderRight: "1px solid #eee",
};

const layoutStyle = {
  overflow: "hidden",
  width: "100%",
  maxWidth: "100%",
  height: "100vh",
};

function App() {
  return (
    <Layout style={layoutStyle}>
      <Sider width={"350px"} style={siderStyle}>
        <Jobs />
      </Sider>
      <Layout>
        <Header style={headerStyle} />
        <Content style={contentStyle}>
          <Employees />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
