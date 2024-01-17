import { LinkedinFilled, GithubFilled, TwitterOutlined } from "@ant-design/icons";
import _ from "lodash";

export const Platforms = () => {
    const platforms = [
      {
        icon: <LinkedinFilled />,
        link: "https://www.linkedin.com/in/rahul-dharmaraja-ba8b88269/",
      },
      { icon: <GithubFilled />, link: "https://github.com/DRAHUL-30" },
      { icon: <TwitterOutlined />, link: "https://twitter.com/home" },
    ];

    const renderList = _.map(platforms, (item: any) => (
      <a
        key={item.id}
        target={"_blank"}
        href={item?.link}
        style={{ fontSize: 24 }}
      >
        {item?.icon}
      </a>
    ));
  return (
      <div className="w-[10%] flex flex-col space-y-8">
          {renderList}
    </div>
  );
}
