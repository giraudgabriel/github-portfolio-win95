export const Credits = () => {
  return (
    <>
      <h1>Credits</h1>

      <p>
        Developed by{" "}
        <a
          style={{
            color: "blue",
          }}
          href="github.com/giraudgabriel"
        >
          Gabriel Giraud @giraudgabriel
        </a>
        <br />
        @CopyRight {new Date().getFullYear()}
      </p>
    </>
  );
};
