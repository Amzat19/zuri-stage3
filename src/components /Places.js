import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders  } from "@fortawesome/free-solid-svg-icons";
const Places = () => {
    return (
        <div className="w-[85vw] m-auto my-8 flex justify-between items-center">
            <ul className="flex flex-wrap gap-3 md:gap-5 lg:gap-12">
                <ol>Resturant</ol>
                <ol>Cottage</ol>
                <ol>Castle</ol>
                <ol>fantast city</ol>
                <ol>beach</ol>
                <ol>Cabin</ol>
                <ol>Off-grid</ol>
                <ol>Farm</ol>
            </ul>
            <button className="h-12 w-36 border px-4 rounded-md flex justify-between items-center">
                Location
                <FontAwesomeIcon icon={faSliders}/> 
            </button>
        </div>
    )
}

export default Places;