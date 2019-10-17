import React from 'react';

const Imagen = ({image}) => {

    const { largeImageURL, likes, previewURL, tags, views } = image;

    return (  
        <div className="col-s12 col-ms-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags}/>
                
                <div className="card-body">
                    <p className="card-text">{likes} Me Gusta</p>
                    <p className="card-text">{views} Vistas</p>
                </div>

                <div className="card-footer">
                    <a href={largeImageURL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">Ver Imagen</a>
                </div>
            </div>

            
        </div>
    );
}
 
export default Imagen;