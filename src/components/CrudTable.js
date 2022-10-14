import React from 'react'
import CrudTableRow from './CrudTableRow'

export const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
        <h3>Tabla de Datos</h3>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Constelation</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.length === 0 
                    ? <tr><td colSpan="3">sin Datos</td></tr> 
                    : data.map(el => <CrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData}/>)
                }
            </tbody>
        </table>
    </div>
  )
}
