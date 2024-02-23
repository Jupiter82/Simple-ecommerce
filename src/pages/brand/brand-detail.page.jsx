import { useParams, useSearchParams } from "react-router-dom"

const BrandDetailsPage = () =>{
    //params (parameters)
    const params = useParams()
    const [query,setQuery] = useSearchParams()
    console.log(query.get('q'))
    return(
        <>
        {/* <p>hello</p>
        <h1>{params.slug}</h1> */}
        </>
    )
}
export default BrandDetailsPage