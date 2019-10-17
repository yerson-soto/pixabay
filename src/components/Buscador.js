import React, { useState } from 'react';
import Error from './Error';

function Buscador({setBusqueda}) {

    const [ keyword, setkeyword ] = useState('');
    const [ error, setError ] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        
        //validar que la keyword sea correcta
        if (keyword === '' || /\s+$/.test(keyword)) {
            setError(true);
            return null;
        }

        //pasar la keyword al componente principal y eliminar error
        setError(false);
        setBusqueda(keyword);

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen, ejemplo: Futbol o Café"
                        onChange={e => setkeyword(e.target.value)}
                    />
                </div>

                <div className="form-group col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>
            {(error) ? <Error mensaje="Agregar un criterio de búsqueda!" /> : null}
        </form>
    )
}   

export default Buscador;