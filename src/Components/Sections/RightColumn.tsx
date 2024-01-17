// import { FileWordFilled, UserOutlined, BookFilled } from "@ant-design/icons";
import { useDynamicPageContext } from '../../Context/ContextHook';

export const RightColumn = () => {
    const {  switchPage } = useDynamicPageContext();

    const handleButtonClick = () => {
        switchPage('ComponentB');
    };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4">
        column 2
    </div>
  )
}


// const CardIcon = ({ items }) => {

// }