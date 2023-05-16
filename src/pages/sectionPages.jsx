import { useLocation } from "react-router";

const SectionPages = () => {
    const location = useLocation()
    return ( 
        <div>
            <h1>{location.pathname}</h1>
        </div>
     );
}
 
export default SectionPages;