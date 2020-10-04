import { useState, useEffect } from "react";
import { getGift } from '../helpers/getGifs';

export const useFetchGifs = (categoria) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect( () => { // El "useEfect()" ejecuta la funcion "getGift()" solo cuando el componente es renderizado por primera vez
        getGift(categoria)
            .then( imgs => setState({
                data: imgs,
                loading: false
            }))
        
    }, [categoria]);

    return state;
    
}