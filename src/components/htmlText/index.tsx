import { useEffect, useRef } from "react";

export const HtmlText = ({ str }: { str: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current!.innerHTML = str;
  }, []);
  return <div ref={ref}></div>;
};
