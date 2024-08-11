import './App.css';
import './index.css'
import { TwFollowCard } from './twFollowCard';
import { useState } from "react";

const users = [
    {
        username: 'Grinchuelo',
        name: 'Santino Green',
        isFollowing: true
    },
    {
        username: 'Manu',
        name: 'Manuel Medina',
        isFollowing: true
    },
    {
        username: 'Larsids',
        name: 'Lara Fernandez',
        isFollowing: false
    },
    {
        username: 'Neriii',
        name: 'Merlina Addams',
        isFollowing: false
    }
]

export function App () {
    
    const [username, setUsername] = useState('grinchuelo')
    const formatUsername = (username) => `@${username}`;
    console.log('render with username: ', username)
    return (
        <section className='App'>
            {users.map(user => {
                const {username,  name, isFollowing} = user;
                return (
                    <TwFollowCard key={username} username={username} name={name} isFollowing={isFollowing}></TwFollowCard>
                )
                
            })}
            {/* <TwFollowCard username={username} formatUsername={formatUsername} initialIsFollowing={false}> Santino Green </TwFollowCard>

            <TwFollowCard name="Elon Musk" username="elonmusk" formatUsername={formatUsername} initialIsFollowing> Elon Musk </TwFollowCard> */}
            
        </section>
    )
}