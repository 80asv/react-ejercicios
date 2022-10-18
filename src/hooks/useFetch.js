import { useState, useEffect } from 'react';

import React from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);

                if(!res.ok){
                    let err = new Error("Eror en la petición fetch");
                    err.status = res.status || "00";
                    err.statusText = res.statusText || "Ocurrió un error";
                    throw err;
                }

                const json = await res.json();

                if(!signal.aborted){
                    setData(json);
                    setError(null);
                }
                    
            } catch (error) {
                if(!signal.aborted){
                    setData(null);
                    setError(error);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // fase de desmontaje
        return () => controller.abort();
        
    }, [url]);

    return { data, error, loading };
}

