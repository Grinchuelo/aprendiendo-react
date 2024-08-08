export function TwFollowCard ({children, username, isFollowing}) {
    const avatar = `https://unavatar.io/github/${username}`;
    const addAt = (username) => `@${username}`;
    let btnIsFollowing = isFollowing ? 'Siguiendo' : 'Seguir';
    if (btnIsFollowing == 'Siguiendo') {
        
    }
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-header-avatar" src={avatar} alt="Foto de perfil" />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infouserName">{addAt(username)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName}>{btnIsFollowing}</button>
            </aside>
        </article>
    );
}