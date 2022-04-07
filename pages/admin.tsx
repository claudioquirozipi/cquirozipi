import { useEffect } from "react";

const Admin = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import("netlify-cms-app")).default;
      CMS.init();
    })();
  }, []);

  return <div />;
};

export default Admin;
