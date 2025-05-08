import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get("http://127.0.0.1:5000/api/users/logout", {
        withCredentials: true,
      });

      // Optionally clear local state or context here
      alert("Logged out successfully!");
      navigate("/home"); // Redirect to homepage
    } catch (err) {
      console.error("Logout failed:", err);
      alert("Logout failed!");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
