import { useState } from "react";

function Form() {

    const [name, setName] = useState("");
    const [major, setMajor] = useState("");

    function handleName(e) {
        setName(e.target.value);
    }

    return (
        <div>
           Name:
           <input 
                value={name}
                onChange={handleName} 
                type="text" />
           <br />
           Major:
           <input 
                value={major}
                onChange={(e) => {
                    setMajor(e.target.value);
                }}
                type="text"
            />
            <button onClick={()=>alert(name, major)}>
                Calculate
            </button>
        </div>
    )
}

export default Form;