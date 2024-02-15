import { Container } from "react-bootstrap"
import Banner from "../../component/fe/home/banner.component"
import banner1 from "../../assets/images/banner/wellness/well1.jpg"
import banner2 from "../../assets/images/banner/wellness/well2.png"
import banner3 from "../../assets/images/banner/wellness/well3.jpg"

const WellnessDetailPage = () => {
    const data = [banner1, banner2, banner3]
    return (<>
        <Container>
            <h4>Wellness</h4>
        </Container>
        <Banner data={data} />
    </>)
}
export default WellnessDetailPage
