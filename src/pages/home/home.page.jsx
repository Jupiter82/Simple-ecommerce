import Banner from "../../component/fe/home/banner.component";
import banner1 from "../../assets/images/banner/home1.jpg";
import banner2 from "../../assets/images/banner/home2.jpg";
import banner3 from "../../assets/images/banner/home3.jpg";
import banner4 from "../../assets/images/banner/home4.jpg";
const HomePage = () => {
  const data =[banner1,banner2,banner3,banner4]
    return (
      <>
        <Banner data={data}></Banner>
      </>
    );
};

export default HomePage;