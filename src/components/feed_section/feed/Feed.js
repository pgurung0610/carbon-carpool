import React, { useState, useEffect } from 'react';
import './Feed.css';
import firebase from '../../../firebase';
import Post from './Post';
import UsersInfoService from '../../../service/UsersInfoService';

// function getUsers() {
//     const[events, setEvents] = React.useState([]);

//         useEffect(() => {
//             firebase.firestore().collection('users').onSnapshot((snapshot) => {
//                 const users = snapshot.docs.map((doc) => ({
//                     id: doc.id,
//                     ...doc.data()
//                 }));

//             setEvents(users);
//         })
//     }, []);

//     return users;
            
//     console.log(events);
// }


function Feed() {
    const[events, setEvents] = React.useState([]);
    useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("event").get();
      setEvents(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    }
        
    fetchData();

    }, []); 

    console.log(events);
        
    return (
        <div className="Feed">
            <ul className="events">
                {events.map( event => (
                        <Post key={event.id} post={event} />
                ))}
            </ul>
        </div>
    );
}

export default Feed;