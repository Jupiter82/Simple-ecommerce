import { Carousel, Image } from "react-bootstrap";
const Banner = ({ data }) => {
  return (
    <>
      {
        <Carousel>
          {data?.map((item, index) => {
            return (

              <Carousel.Item key={index}>
                <Image src={item}></Image>
              </Carousel.Item>
            )
          })}

        </Carousel>
      }
    </>
  );
}
export default Banner;
