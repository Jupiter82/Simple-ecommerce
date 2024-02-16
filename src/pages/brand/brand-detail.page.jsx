import { useParams, useSearchParams } from "react-router-dom"

const BrandDetailsPage = () =>{
    //params (parameters)
    const params = useParams()
    console.log(params.slug)
    return(
        <>
        <p>hello</p>
        <h1>{params.slug}</h1>
        </>
    )
}
export default BrandDetailsPage