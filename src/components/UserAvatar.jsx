import { useState, useEffect } from "react";
import { data } from "react-router";

export default function UserAvatar( uid ){
    const [user, setUser] = useState({});

    useEffect(() =>{
        async function getUsers(){
            const url =`https://FB-ERA-default-rtdb.firebaseio.com/users/${uid}.json`;
            const response = await fetch(url);
            const data = await response.json();
            console.log("User Data", data)
            setUser(data)
    };
    getUsers(data)
    }, [ uid ]);
// Kommet til opgave 4.6

    return(
        <div>Userinfo Kommer her (uid: {uid}) </div>


    )
}









// import { useEffect, useState } from "react";
// export default function UserAvatar(){
//     const [avatar, setAvatar] = useState([]);

// useEffect(() => {
//      async function getAvatar() {
//     // UDSKIFT [dit-projekt-navn] med dit faktiske Firebase projekt navn!
//     const url = "https://fb-era-default-rtdb.firebaseio.com/posts.json";
//     const response = await fetch(url);
//     const data = await response.json();

//        const avatarArray = Object.keys(data).map(key => ({
//         uid: key,
//         ...data[key]
//     }));

//     console.log("Posts array:", avatarArray);
//     setAvatar(avatarArray);
//   }
//   getAvatar();
//   }, []);


//   return(
    
//   )
// }