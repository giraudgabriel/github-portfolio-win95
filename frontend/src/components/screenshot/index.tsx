import React from "react";
import { useCallback } from "react";
import { Button } from "react95";
import { useScreenshot } from "use-react-screenshot";

export function Screenshot({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [image, takeScreenshot] = useScreenshot();
  const ref = React.useRef(null);

  const snapshot = useCallback(() => {
    takeScreenshot(ref.current);
  }, [takeScreenshot]);

  React.useLayoutEffect(() => {
    snapshot();
  }, [snapshot]);

  const download = () => {
    const a = document.createElement("a");
    a.href = image;
    a.download = "download";
    a.click();
  };

  return (
    <>
      {children} <Button onClick={download}>📸</Button>
    </>
  );
}
