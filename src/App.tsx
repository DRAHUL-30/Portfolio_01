import { useEffect, useState, Fragment } from "react";
import "./App.css";
import "./index.css";
import { ConfigProvider, notification } from "antd";
import { SignalFilled } from "@ant-design/icons";
import { Layout } from "./Components/Layouts/Layout";
import { DynamicPageContextProvider } from "./Context/ContextProvider";

const App = () => {
  const [someCondition, setSomeCondition] = useState(false);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  useEffect(() => {
    if (someCondition && window.navigator.onLine) {
      notification.open({
        message: "Welcome!",
        description: "Thanks for visiting.",
        placement: 'bottomRight'
      });
    }
    setSomeCondition(true);
  }, [someCondition]);

  return (
    <Fragment>
      {window.navigator.onLine ? <ConfigProvider
        theme={{
          token: {
            fontFamily: "Poppins",
          },
        }}
      >
        <DynamicPageContextProvider>
          <Layout />
        </DynamicPageContextProvider>
      </ConfigProvider> : <p className="text-[20px] text-red-400 py-4"><span className="px-3"><SignalFilled /></span>Please Check Your Internet Connection ....</p>}
    </Fragment>
  );
};

export default App;
