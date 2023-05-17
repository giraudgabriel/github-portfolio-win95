
interface IStyles {
  WINDOW: React.CSSProperties;
  HEADER: React.CSSProperties;
  DIV_HEADER: React.CSSProperties;
}

export const STYLES: IStyles = {
  WINDOW: {
    overflow: "auto",
    maxHeight: "30rem",
    maxWidth: "45rem",
    height: "fit-content",
    position: "relative",
  },
  HEADER: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  DIV_HEADER: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginRight: "12px",
  },
};