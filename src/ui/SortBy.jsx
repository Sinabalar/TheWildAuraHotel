import Select from "./Select.jsx";
import {useSearchParams} from "react-router-dom";

export default function SortBy({options}) {

    const [searchParams, setSearchParams] = useSearchParams();
    const sortBy = searchParams.get("sort-by") || "";

    function handleChange(e) {
        searchParams.set("sort-by", e.target.value);
        setSearchParams(searchParams);
    }

    return (
        <div>
            <Select options={options} value={sortBy} onChange={handleChange}/>
        </div>
    );
}