// import { useState } from "react";
// import { useAuthContext } from "./useAuthContext";

// export const useLogin = () => {
//     const {dispatch} = useAuthContext()
//     const [error, setError] = useState(null)
//     const [isLoading, setIsLoading] = useState(null)

//     const login = async (email, password) => {
//         setIsLoading(true)
//         setError(null)
//         const response = await fetch("/api/user/login", {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, password })
//         })
//         const json = await response.json()
//         console.log('this is freakin json =>',json)
//         if (!response.ok) {
//             setIsLoading(false)
//             setError(json.error)
//         }
//         if (response.ok) {
//             localStorage.setItem("user", JSON.stringify(json))
//             dispatch({ type: "LOGIN", payload: json })
//             setIsLoading(false)
//         }
//     }
//     return { login, isLoading, error }
// }


import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useLogin = () => {
    const { dispatch } = useAuthContext()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)
        const response = await axios.post("/api/user/login", { email, password }, {
            headers: {
                // "Authorization": `Bearer ${token}`
            }
        })

        const json = response.data;
        if (!response.ok) {
            setIsLoading(false)
            setError(response.error)
        }
        if (response.ok) {
            localStorage.setItem("user", json)
            dispatch({ type: "LOGIN", payload: json })
            setIsLoading(false)
        }
    }
    return { login, isLoading, error }
}