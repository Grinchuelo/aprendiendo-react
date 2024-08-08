export function TwFollowCard ({name, username, avatarRoot}) {
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-header-avatar" src={avatarRoot} alt="Foto de perfil" />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infouserName">@{username}</span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">Seguir</button>
            </aside>
        </article>
    );
}