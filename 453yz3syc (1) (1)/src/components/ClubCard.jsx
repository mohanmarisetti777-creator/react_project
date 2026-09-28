function ClubCard({ club, onViewDetails }) {
  return (
    <div className="club-card">

      <div className="club-icon">
        {club.icon}
      </div>

      <div className="club-content">

        <span className="category">
          {club.category}
        </span>

        <h3>{club.name}</h3>

        <p>{club.description}</p>

        <div className="club-info">
          <span>👥 {club.members} Members</span>
          <span>🕒 {club.meeting}</span>
        </div>

        <button
          className="details-btn"
          onClick={onViewDetails}
        >
          View Details →
        </button>

      </div>
    </div>
  );
}

export default ClubCard;