/*import React, { useContext } from 'react';
import {AppContext} from "../../App";


const Input = () => {
    const { inputFields, setInputFields } = useContext(AppContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputFields((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <label>Field 1</label>
            <input name="field1" value={inputFields.field1} onChange={handleInputChange} />
            <label>Field 2</label>
            <input name="field2" value={inputFields.field2} onChange={handleInputChange} />
            <label>Field 3</label>
            <input name="field3" value={inputFields.field3} onChange={handleInputChange} />
        </div>
    );
};

export default Input;
*/