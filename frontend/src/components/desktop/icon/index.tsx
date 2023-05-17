import windowService from "@/services/window.service";
import { Icon, IconContainer, IconText } from "./styles";

interface DesktopIconProps {
  window: WindowReducer.Data;
}
export const DesktopIcon = ({ window }: DesktopIconProps) => {
  const open = () => {
    windowService.add(window);
  };
  
  return (
    <IconContainer onClick={open}>
      <Icon>{window.icon}</Icon>
      <IconText>{window.title}</IconText>
    </IconContainer>
  );
};
