import React, { useState, useEffect } from 'react';
import SelectList from './SelectList';

const SelectsAnidados = () => {

    const [departments, setDepartments] = useState("");
    const [towns, setTowns] = useState("");
    
    return (
        <div>
            <h2>Select Anidados</h2>
            <h3>Colombia</h3>
            <SelectList 
                url="https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.json" 
                title="departamento" 
                handleChange={(e)=>{setDepartments(e.target.value)}}
                actual={departments || ""}
            />
            <SelectList 
                url="https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.json"
                title="ciudad"
                handleChange={(e)=>{setTowns(e.target.value)}}
                actual={departments || ""}
            />
            <pre>
                <code>{departments} - {towns}</code>
            </pre>
        </div>
    )
}

export default SelectsAnidados;