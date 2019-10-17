import React, { useState, useEffect } from 'react';
import Buscador from './components/Buscador';
import ListadoImagen from './components/ListadoImagen';

function App() {

   const [ busqueda, setBusqueda ] = useState('');
   const [ images, setImages] = useState([]);
   const [ totaPages, setTotalPages] = useState(1);
   const [ currentPage, setCurrentPages] = useState(1);

   useEffect(
      () => {
         if (busqueda === '') return;
         consultarAPI(busqueda, currentPage);
      }, [busqueda, currentPage]
   )

   const consultarAPI = async (busqueda, currentPage) => {
      const imgPage = 30,
            key = '13151258-b18c5fba00a310c7ff7e04572',
            url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imgPage}&page=${currentPage}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      setImages(resultado.hits);

      //Calcular el total de paginas
      let calcularTotalPaginas = Math.ceil(resultado.totalHits / imgPage);
      setTotalPages(calcularTotalPaginas);

      //Mover la pantalla hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({block: 'start', behavior: 'smooth'});
      
   }

   const nextPage = () => {
      let nextPage = currentPage + 1;
      setCurrentPages(nextPage);
   }

   const previousPage = () => {
      let prevPage = currentPage - 1;
      setCurrentPages(prevPage);
   }

   return (
      <div className="app container">
         <div className="jumbotron">
            <p className="lead text-center">Buscador de Imágenes</p>
            <Buscador 
               setBusqueda={setBusqueda}
            />
         </div>

         <div className="row justify-content-center">
            <ListadoImagen 
               images={images}
            />

            {
               (currentPage === 1) ? null : <button onClick={previousPage} type="button" className="btn btn-info mr-1">&laquo; Anterior</button>
            }
            
            {
               (currentPage === totaPages) ? null : <button onClick={nextPage} type="button" className="btn btn-info">Siguiente &raquo; </button>
            }
            
         </div>
      </div>
   )
}

export default App;
