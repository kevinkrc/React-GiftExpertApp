import React, { useState } from 'react'
import { AddCategorias } from './components/AddCategorias';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Call of duty']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategorias setCategorias={ setCategorias }/>

            <hr/>            
            <ol>
            {
                categorias.map(categoria => (
                    <GifGrid
                        key={categoria}
                        categoria={categoria}
                    />
                ))
                
            }
            </ol>
        </>
    )
}


export default GifExpertApp
