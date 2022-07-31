import { useEffect } from "react";
import { useState } from "react"

const useAdmin = user =>{
    const [admin, setAdmin] = useState(false);
    const [adminLoading , setAdminLoading] = useState(true)

    useEffect(() =>{
        const email = user?.email;
        fetch(`https://vast-cove-21670.herokuapp.com/admin/${email}`,{
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            setAdmin(data.admin);
            setAdminLoading(false);
        })
    },[user])

    return [admin , adminLoading]
}

export default useAdmin;