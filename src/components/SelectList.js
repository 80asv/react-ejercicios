import React, { useState, useEffect } from 'react';

import { Message } from './Message';
import { useFetch } from '../hooks/useFetch'

const SelectList = ({ title, url, handleChange, actual }) => {  
	const { data, error, loading } = useFetch(url);
	
	const [mapTowns, setMapTowns] = useState([]);
	
	
	useEffect(() =>{
		const towns = (dept) => {
			data.forEach(el => {
				if(dept === el.departamento){
					setMapTowns([...el.ciudades]);
				}
			});
		}
		if(data){
			towns(actual);
		}
	}, [actual])
	
	if(!data) return null;
	
	if(error) return <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545"/>
	

	let id = `select-${title}`;
	let label = title.charAt(0).toUpperCase() + title.slice(1);

	


	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<select name={id} id={id} onChange={handleChange}>
				<option value=""> Elige un {title} </option>
				{
					title === "departamento" && data && data.map((el)=> <option key={el.id} value={el.departamento}>{el.departamento}</option>)
				}
				{
					title === "ciudad" && data && mapTowns.map((el, index) => <option key={index} value={el}>{el}</option>)
				}
			</select>
		</div>
	)
}

export default SelectList