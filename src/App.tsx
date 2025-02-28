import { ConfigProvider } from "antd";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "@layouts";
import { HomePage } from "@pages";
import { THEME } from "@configs";

function App() {
  return (
    <ConfigProvider theme={THEME}>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
