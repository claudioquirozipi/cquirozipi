import dynamic from "next/dynamic";
import { createElement as h } from "react";
import config from "../cms/config";
import CMS from "netlify-cms-app";

// const CMS = dynamic(
//   (): any =>
//     import("netlify-cms-app").then((cms: any) => {
//       cms.init({ config });
//     }),
//   { ssr: false, loading: () => <p>Loading...</p> }
// );
// CMS.init();
// const MyTemplate = h("div", {}, "my template test");
// // CMS.registerPreviewTemplate("my-template", MyTemplate);

// const AdminPage: React.FC = () => {
//   return (
//     <div>
//       <h1>hola admin</h1>
//     </div>
//   );
// };

// export default AdminPage;

import { useEffect } from "react";
// import BlogPostPreview from '../previews/BlogPostPreview'

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
