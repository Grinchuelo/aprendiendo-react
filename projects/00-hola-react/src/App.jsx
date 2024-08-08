import './App.css';
import './index.css'
import { TwFollowCard } from './twFollowCard';

export function App () {
    const formatUsername = (username) => `@${username}`;
    return (
        <section className='App'>
            <TwFollowCard username="grinchuelo" formatUsername={formatUsername} isFollowing> Santino Green </TwFollowCard>

            <TwFollowCard name="Elon Musk" username="elonmusk" formatUsername={formatUsername} isFollowing={false}/>
            {/*<TwFollowCard name="Miguel Ángel Durán" username="midudev" formatUsername={formatUsername} isFollowing={false}/> */}
        </section>
    )
}