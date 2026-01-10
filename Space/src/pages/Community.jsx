import "../Community.css";

export default function Community() {

  // fake login state
  const isLoggedIn = false; // change to true to test

  const posts = [
    { user: "Diya", text: "Look at this galaxy 🌌", likes: 12 },
    { user: "Rahul", text: "Mars is beautiful 🔴", likes: 20 },
    { user: "Ankit", text: "Saturn rings are insane 🪐", likes: 30 }
  ];

  return (
    <div className="community-page">

      <h1>Community 🌍</h1>

      {posts.map((p, index) => (
        <div className="post" key={index}>
          <h3>@{p.user}</h3>
          <p>{p.text}</p>
          <span>❤️ {p.likes}</span>

          {/* Comment Section */}
          {isLoggedIn ? (
            <input 
              placeholder="Write a comment..." 
              className="comment-box"
            />
          ) : (
            <p className="login-msg">
              Login to comment
            </p>
          )}
        </div>
      ))}

    </div>
  );
}
