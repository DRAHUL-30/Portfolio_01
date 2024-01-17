import { FileWordFilled, UserOutlined, BookFilled } from "@ant-design/icons";
import { useDynamicPageContext } from '../../../Context/ContextHook';

export const RightColumn = () => {
  const { switchPage } = useDynamicPageContext();

  const handleButtonClick = (page:string) => {
    switchPage(page);
  };

  return (
    <div className="flex items-center gap-3">
      <p
        className="text-[16px] cursor-pointer"
        onClick={() => handleButtonClick("Works")}
      >
        <span className="px-1">
          <FileWordFilled />
        </span>
        Works
      </p>
      <a
        // href="/resume" target="_blank" rel="noopener noreferrer"
        className="text-[16px] cursor-pointer"
        // onClick={() => handleButtonClick("Resume")}
      >
        <span className="px-1">
          <UserOutlined />
        </span>
        Resume
      </a>
      <p
        className="text-[16px] cursor-pointer"
        onClick={() => handleButtonClick("Shelf")}
      >
        <span className="px-1">
          <BookFilled />
        </span>
        Shelf
      </p>
    </div>
  );
};


// const CardIcon = ({ items }) => {

// }