import { Switch } from "antd";
import { MailFilled, CheckOutlined, CloseOutlined, QuestionCircleOutlined } from "@ant-design/icons";

export const LeftColumn = () => {
  const emailAddress = "rahuldvlpr7@gmail.com";
  return (
    <div className="flex items-center gap-5 mb-3 sm:mb-0">
      <QuestionCircleOutlined />
      <div className="flex items-center gap-3 mb-3 sm:mb-0">
        <a className="text-[16px]" href={`mailto:${emailAddress}`}>
          <span className="px-2">
            <MailFilled />
          </span>
          {emailAddress}  
        </a>
        <p className="text-[16px] font-[500]">
          Dark Mode
          <span className="px-1">
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
            />
          </span>
        </p>
      </div>
    </div>
  );
};
