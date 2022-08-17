import shortId from "shortid"
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, setFilter } from "features/phoneBookSlice";

const Filter = () => {
    
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    
    const filterInputId = shortId.generate();
    
    return (
        <div>
            <label htmlFor={filterInputId}>
                Find contacts by name <br />
                <input type="text"
                    name="filter"
                    id={filterInputId}
                    onChange={e => dispatch(setFilter(e.target.value))}
                    value = {filter}
                    />
            </label>
        </div>
    )
}



export default Filter