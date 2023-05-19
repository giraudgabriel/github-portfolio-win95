import { GroupBox } from "react95";

const STYLES = {
  LINK: {
    color: "blue",
  },
};

export const Credits = () => {
  return (
    <>
      <GroupBox label="Credits">
        <p>
          Developed by
          <a
            style={STYLES.LINK}
            href="github.com/giraudgabriel"
            target="_blank"
          >
            {" "}
            Gabriel Giraud{" "}
          </a>
          ©️ {new Date().getFullYear()}
        </p>
      </GroupBox>
      <GroupBox label="☕">
        <p>
          If you like this project, you can buy me a coffee{" "}
          <a
            style={STYLES.LINK}
            href="https://www.buymeacoffee.com/giraud"
            target="_blank"
          >
            here
          </a>
          .
        </p>
      </GroupBox>
    </>
  );
};
