export function TwFollowCard () {
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-header-avatar" src="https://avatars.githubusercontent.com/u/111719839?v=4" alt="Foto de perfil" />
                <div className="tw-followCard-info">
                    <strong>Santino Green</strong>
                    <span className="tw-followCard-infouserName">@grinchueloo</span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">Seguir</button>
            </aside>
        </article>
    );
}