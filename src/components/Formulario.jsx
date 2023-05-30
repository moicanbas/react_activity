import React from 'react'

const Formulario = () => {
    //estados - hooks
    const [nombre, setNombre]=React.useState('')
    const [apellido, setApellido]=React.useState('')
    const [lista, setLista]=React.useState([])
    // guardar 
    const guardarDatos=(e)=>{
        e.preventDefault();
        //validaciones
        if (!nombre) {
            alert('falta el nombre')
            return
        }

        if (!apellido) {
            alert('falta el apellido')
            return
        }
        
        //guardar en la lista
        setLista([
            ...lista,
            {nombre:nombre, apellido:apellido}
        ])
        //limpiar inputs y estados
        e.target.reset()
        //limpiar estados
        setNombre('')
        setApellido('')
    }

  return (
    <div className='container'>

        <h2 className='text-primary text-center'>Formulario de registro de usuario</h2>
        <form onSubmit={guardarDatos}>
            <input type="text" 
            placeholder='ingrese el Nombre'
            className='form-control mb-3'
            onChange={(e)=>setNombre(e.target.value.trim())}
            
            />
             <input type="text" 
            placeholder='ingrese el Apellido'
            className='form-control mb-3'
            onChange={(e)=>setApellido(e.target.value.trim())}
            
            />
            <div className='d-grid gap-2'>
            <button type='submit' className='btn btn-outline-dark'> registrar</button>

            </div>
        </form>
        <hr />
        <ol className='list-group'>
            {
                lista.map((item, index)=>(<li className='list-group-item bg-info' key={index}>{item.nombre} {item.apellido}
                <button className='btn btn-danger float-end'>eliminar</button>
                </li>))
            }
        </ol>
    </div>

  )
}

export default Formulario