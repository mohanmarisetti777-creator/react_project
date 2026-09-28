function ClubDetails({ club, onBack, onJoin }) {
  return (
    <div className="details-page">

      <button className="back-btn" onClick={onBack}>
        ← Back to Clubs
      </button>

      <div className="details-card">

        <div className="details-icon">
          {club.icon}
        </div>

        <span className="category">
          {club.category}
        </span>

        <h1>{club.name}</h1>

        <p className="details-description">
          {club.description}
        </p>

        <div className="details-info">

          <div>
            <strong>👥 Members</strong>
            <p>{club.members} Students</p>
          </div>

          <div>
            <strong>🕒 Meeting</strong>
            <p>{club.meeting}</p>
          </div>

        </div>

        <h2>Club Activities</h2>

        <ul className="activities">
          {club.activities.map((activity, index) => (
            <li key={index}>
              ✓ {activity}
            </li>
          ))}
        </ul>

        <button
          className="join-btn"
          onClick={onJoin}
        >
          Join Club
        </button>

      </div>
    </div>
  );
}

export default ClubDetails;