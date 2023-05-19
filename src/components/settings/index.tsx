import { AVAILABLE_FONTS } from "@/data/windows";
import { useAppSelector } from "@/hooks/useAppSelector";
import terminalService from "@/services/terminal.service";
import { ColorInput, GroupBox, Select } from "react95";

export const Settings = () => {
  const { fontFamily, backgroundColor } = useAppSelector(
    (state) => state.windows
  );

  return (
    <div
      style={{
        width: "20rem",
        height: "10rem",
      }}
    >
      <GroupBox label="Font Family">
        <Select
          options={AVAILABLE_FONTS}
          value={fontFamily}
          menuMaxHeight={160}
          width={"100%"}
          onChange={(data) => terminalService.font(data.value)}
        />
      </GroupBox>
      <GroupBox label="Background Color">
        <ColorInput
          value={backgroundColor}
          width={"100%"}
          onChange={(data) => terminalService.background(data.target.value)}
        />
      </GroupBox>
    </div>
  );
};
