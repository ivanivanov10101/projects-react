const NewFromFriends = () => {
  return (
    <section id="recent-from-friends" className="section">
      <h2 className="section-heading">
        <a href="/activity/">New from friends</a>
      </h2>
      <a href="/activity/" className="has-icon icon-16 icon-activity all-link">
        <span className="icon"></span>
        All activity
      </a>
      <ul className="poster-list -p150 -horizontal">
        <li className="poster-container">FILM1 TODO: POPULATE UL WITH FILMS FROM DB</li>
        <li className="poster-container">FILM1</li>
        <li className="poster-container">FILM1</li>
        <li className="poster-container">FILM1</li>
        <li className="poster-container">FILM1</li>
        <li className="poster-container">FILM1</li>
      </ul>
    </section>
  );
}

export default NewFromFriends;
