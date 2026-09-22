import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleJobsClick = () => {
    navigate("/");
    
    setTimeout(() => {
      document.getElementById("jobs")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          HireNest
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>

          <button
            onClick={handleJobsClick}
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Jobs
          </button>

          <Link
            to="/saved"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Saved
          </Link>

          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            About
          </Link>

        </div>

        {/* Post Job Button */}
        <Link
          to="/post-job"
          className="hidden sm:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Post a Job
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;