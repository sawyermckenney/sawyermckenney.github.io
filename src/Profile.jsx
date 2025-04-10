import React, { useEffect, useState } from "react";
import { account } from "./appwrite";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser);
      } catch (err) {
        console.error("Not logged in:", err);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
      navigate("/");
      window.location.reload();
    } catch (err) {
      console.error("Logout failed:", err.message);
    }
  };

  if (loading) return <p>Loading profile...</p>;

  return (
    <div className="profile-container">
      <h1>Welcome, {user.name.split(" ")[0]} 👋</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;