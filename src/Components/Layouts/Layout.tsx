import { WrapperComponent } from '../Sections/TopMenu/WrapperComponent';
import { ComponentToBeShown } from './ShownComponents';

export const Layout = () => {
  return (
    <WrapperComponent>
        <ComponentToBeShown />
    </WrapperComponent>
  )
}
