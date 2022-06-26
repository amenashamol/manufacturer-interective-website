import { useEffect, useState } from "react"

const useToken =user  =>{
    
    const [token, setToken] = useState('');
    useEffect( () =>{
        console.log(user)
        const email = user?.user?.email;
        const displayName = user?.user?.displayName;
        console.log(displayName)
        const currentUser = {email: email,displayName:displayName};
        
        if(email){
            fetch(`http://localhost:4000/loginuser/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data => {
                console.log('data inside useToken', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }

    }, [user]);
    return [token];
}

export default useToken;