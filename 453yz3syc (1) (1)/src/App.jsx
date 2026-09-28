import { useState } from "react";
import ClubCard from "./components/ClubCard";
import ClubDetails from "./components/ClubDetails";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import Registration from "./components/Registration";
import RegisteredStudents from "./components/RegisteredStudents";
import "./App.css";

const clubs = [
  {
    id: 1,
    name: "CodeCraft Club",
    category: "Coding",
    description: "Learn programming, web development and new technologies.",
    members: 85,
    icon: "💻",
    meeting: "Friday - 4:00 PM",
    activities: ["Coding Competitions", "Hackathons", "Programming Workshops"]
  },
  {
    id: 2,
    name: "Tech Innovators",
    category: "Coding",
    description: "Explore AI, software development and innovative technologies.",
    members: 65,
    icon: "🚀",
    meeting: "Wednesday - 3:30 PM",
    activities: ["AI Projects", "Web Development", "Tech Talks"]
  },
  {
    id: 3,
    name: "University Cricket Club",
    category: "Sports",
    description: "For students who enjoy cricket and competitive sports.",
    members: 70,
    icon: "🏏",
    meeting: "Saturday - 7:00 AM",
    activities: ["Cricket Matches", "Practice Sessions", "Tournaments"]
  },
  {
    id: 4,
    name: "Football Club",
    category: "Sports",
    description: "A club for football lovers and aspiring players.",
    members: 55,
    icon: "⚽",
    meeting: "Sunday - 6:30 AM",
    activities: ["Football Matches", "Training", "College Games"]
  },
  {
    id: 5,
    name: "Creative Arts Club",
    category: "Arts",
    description: "A creative space for students interested in art and design.",
    members: 45,
    icon: "🎨",
    meeting: "Tuesday - 4:00 PM",
    activities: ["Painting", "Drawing", "Art Exhibitions"]
  },
  {
    id: 6,
    name: "Music & Drama Club",
    category: "Arts",
    description: "Discover your talent in music, drama and stage performances.",
    members: 60,
    icon: "🎭",
    meeting: "Thursday - 4:30 PM",
    activities: ["Drama", "Singing", "College Events"]
  },
  {
    id: 7,
    name: "Entrepreneurship Club",
    category: "Entrepreneurship",
    description: "Turn your ideas into startups and learn business skills.",
    members: 50,
    icon: "💡",
    meeting: "Monday - 5:00 PM",
    activities: ["Startup Ideas", "Business Workshops", "Pitch Competitions"]
  },
  {
    id: 8,
    name: "Business Leaders Club",
    category: "Entrepreneurship",
    description: "Develop leadership and business management skills.",
    members: 40,
    icon: "📈",
    meeting: "Friday - 3:30 PM",
    activities: ["Leadership Sessions", "Networking", "Business Discussions"]
  }
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedClub, setSelectedClub] = useState(null);
  const [registrationClub, setRegistrationClub] = useState(null);
  const [showStudents, setShowStudents] = useState(false);

  const filteredClubs = clubs.filter((club) => {
    const text = search.toLowerCase();

    const matchesSearch =
      club.name.toLowerCase().includes(text) ||
      club.description.toLowerCase().includes(text);

    const matchesCategory =
      category === "All" || club.category === category;

    return matchesSearch && matchesCategory;
  });

  const goHome = () => {
    setSelectedClub(null);
    setRegistrationClub(null);
    setShowStudents(false);
  };

  return (
    <div className="app">

      <header className="header">
        <div>
          <h1>🎓 Campus Clubs</h1>
          <p>Discover clubs and explore your interests.</p>
        </div>
      </header>

      <main className="container">

        {!selectedClub && !registrationClub && !showStudents && (
          <button
            className="registered-bar"
            onClick={() => setShowStudents(true)}
          >
            <span>👥 Registered Students Data</span>
            <span>View →</span>
          </button>
        )}

        {showStudents ? (
          <RegisteredStudents onBack={goHome} />
        ) : registrationClub ? (
          <Registration
            club={registrationClub}
            onBack={() => setRegistrationClub(null)}
          />
        ) : selectedClub ? (
          <ClubDetails
            club={selectedClub}
            onBack={() => setSelectedClub(null)}
            onJoin={() => setRegistrationClub(selectedClub)}
          />
        ) : (
          <>
            <SearchBar
              search={search}
              setSearch={setSearch}
            />

            <CategoryFilter
              category={category}
              setCategory={setCategory}
            />

            <div className="result-heading">
              <div>
                <h2>Explore Clubs</h2>
                <p>Find a club that matches your interests.</p>
              </div>

              <span>{filteredClubs.length} Clubs</span>
            </div>

            {filteredClubs.length > 0 ? (
              <div className="club-grid">
                {filteredClubs.map((club) => (
                  <ClubCard
                    key={club.id}
                    club={club}
                    onViewDetails={() => setSelectedClub(club)}
                  />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <div>🔍</div>
                <h2>No Clubs Found</h2>
                <p>Try another search or category.</p>
              </div>
            )}
          </>
        )}

      </main>
    </div>
  );
}

export default App;