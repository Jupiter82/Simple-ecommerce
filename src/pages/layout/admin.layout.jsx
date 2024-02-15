import "../../assets/css/admin.css";
import CmsHeader from "../../component/cms/header/cms-header.component";
import { Outlet } from "react-router-dom";
import CsmSidebar from "../../component/cms/sidebar/cms-sidebar.component";
import CmsFooter from "../../component/cms/footer/cms-footer.component";
const AdminLayout = () => {
  let loggedInUser = {
    name : "Jupiter Bade",
    role : "admin"
  }
  return (
    <>
      <CmsHeader></CmsHeader>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          {
            loggedInUser.role === 'admin' ? <CsmSidebar/> : <></>
          }
        </div>
        <div id="layoutSidenav_content">
          <main>
            <Outlet></Outlet>
          </main>
          <CmsFooter />
        </div>
      </div>
    </>
  );
};
export default AdminLayout;
