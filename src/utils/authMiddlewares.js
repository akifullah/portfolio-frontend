
import React, { useEffect, useState } from 'react'

const authMiddlewares = () => {
    const [auth, setAuth] = useState();
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("adminAuth"))
        console.log(token)
    }, []);
    return (
        <div>authMiddlewares</div>
    )
}

export default authMiddlewares