import { useEffect } from "react";

const PageLayout = ({ children, title = "Resource App" }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <>{children}</>;
};

export default PageLayout;
