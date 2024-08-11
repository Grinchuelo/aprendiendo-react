import { useState } from "react";

export function TwFollowCard ({name, username, initialIsFollowing}) {
    const avatar = `https://unavatar.io/github/${username}`;
    const addAt = (username) => `@${username}`;
    const [isFollowing, setisFollowing] = useState(initialIsFollowing);

    let btnIsFollowing = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';


    const handleClick = () => {
        setisFollowing(!isFollowing);
    }
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-header-avatar" src={avatar} alt="Foto de perfil" />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infouserName">{addAt(username)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-btnText">{btnIsFollowing}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}