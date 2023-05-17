import { GroupBox } from "react95";

export const Credits = () => {
  return (
    <>
      <GroupBox label="Credits">
        <p>
          Developed by {" "}
          <a
            style={{
              color: "blue",
            }}
            href="github.com/giraudgabriel"
          >
            Gabriel Giraud
          </a>
          ({new Date().getFullYear()})
        </p>
      </GroupBox>
    </>
  );
};
