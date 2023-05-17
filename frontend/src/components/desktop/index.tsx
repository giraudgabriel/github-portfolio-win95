import { DesktopIcon } from "./icon";
import { DesktopGrid } from "./styles";

interface DesktopProps {
  windows: WindowReducer.Data[];
}
export const Desktop = ({ windows }: DesktopProps) => {
  return (
    <DesktopGrid>
      {windows
        .filter((x) => !x?.hideInDesktop)
        .map((window) => {
          return <DesktopIcon key={window.id} window={window} />;
        })}
    </DesktopGrid>
  );
};
