import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const useFetchHeaders = () => {
    const { user } = useContext(AuthContext)

    const headers = {
        'Content-Type': 'application/json',
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzRlOTRiMTI4YTI1MGRhMTQyZmQ5MSIsImlhdCI6MTY3MTg2Nzk3NCwiZXhwIjoxNjcxOTU0Mzc0fQ.4ac81A0AtXFw6q12-R56YXLNurKYTSriiUoCcvs1zAs'
    }

    const config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `goldapi-diisrtlazavven-io`
        }
    }

    function getHeaders() {
        return { 
            method: "GET",
            headers: headers,
        }
    }

    function postHeaders(body) {
        return { 
            method: "POST",
            body: JSON.stringify(body),
            headers: headers,
        }
    }

    function deleteHeaders() {
        return { 
            method: "DELETE",
            headers: headers,
        }
    }

    function updateHeaders(body) {
        return { 
            method: "PATCH",
            body: JSON.stringify(body),
            headers: headers,
        }
    }

    return {getHeaders, postHeaders, deleteHeaders, updateHeaders, config}
}

export default useFetchHeaders
