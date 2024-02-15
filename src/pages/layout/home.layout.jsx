import FeHeader from "../../component/fe/header/header.component"
import FeFooter from "../../component/fe/footer/footer.component";
import { Outlet } from "react-router-dom";
import "../../assets/css/fe.css"
const HomePageLayout = () =>{
    return (
        <>
        <FeHeader></FeHeader>
            <Outlet/>
        <FeFooter/>
        </>
    )
}

export default HomePageLayout
