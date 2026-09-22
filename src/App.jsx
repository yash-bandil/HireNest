import { useState } from "react";
import Navbar from "./components/Navbar";
import JobCard from "./components/JobCard";
import { Routes, Route } from "react-router-dom";
import JobDetails from "./components/JobDetails";
import ApplyForm from "./components/ApplyForm";
import SavedJobs from "./components/SavedJobs";
import jobs from "./Jobs";

function Home() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [experience, setExperience] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      );

    const matchesLocation = job.location
      .toLowerCase()
      .includes(location.toLowerCase());

    const matchesCategory =
      category === "" || job.type === category;

    const matchesExperience =
      experience === "" || job.experience === experience;

    return (
      matchesSearch &&
      matchesLocation &&
      matchesCategory &&
      matchesExperience
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900">
            Find Your Next
            <span className="text-blue-600"> Opportunity</span>
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover jobs and internships that match your skills and help
            you build your career.
          </p>

          {/* Search and Filters */}
          <div className="mt-10 max-w-3xl mx-auto bg-white p-3 rounded-xl shadow-md flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Search jobs, skills or companies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-3 outline-none"
            />

            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-40 px-4 py-3 outline-none border-l"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-3 outline-none border-l"
            >
              <option value="">All Types</option>
              <option value="Internship">Internship</option>
              <option value="Full Time">Full Time</option>
            </select>

            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="px-4 py-3 outline-none border-l"
            >
              <option value="">Experience</option>
              <option value="Fresher">Fresher</option>
              <option value="0-1 Years">0-1 Years</option>
            </select>

            <button className="bg-blue-600 text-white px-7 py-3 rounded-lg hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Latest Opportunities
          </h2>

          <p className="mt-3 text-gray-600">
            Explore jobs and internships from different companies.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                />
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center py-10">
                No jobs found. Try a different search or filter.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900">
          About HireNest
        </h1>

        <p className="mt-6 text-gray-600 text-lg leading-8">
          HireNest is a simple job and internship discovery platform
          designed mainly for students and freshers.
        </p>

        <p className="mt-4 text-gray-600 leading-7">
          Users can search for opportunities, filter jobs by location,
          type and experience, view job details, save jobs and apply
          through a simple application form.
        </p>

        <h2 className="text-2xl font-bold mt-10">
          Technologies Used
        </h2>

        <div className="flex flex-wrap gap-3 mt-4">
          <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg">
            React.js
          </span>

          <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg">
            JavaScript
          </span>

          <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg">
            Tailwind CSS
          </span>

          <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg">
            React Router
          </span>

          <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg">
            LocalStorage
          </span>
        </div>
      </div>
    </div>
  );
}

function PostJob() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Post a Job
          </h1>

      
          <form className="mt-8 space-y-5">
            <input
              type="text"
              placeholder="Job Title"
              className="w-full border rounded-lg px-4 py-3 outline-none"
            />

            <input
              type="text"
              placeholder="Company Name"
              className="w-full border rounded-lg px-4 py-3 outline-none"
            />

            <input
              type="text"
              placeholder="Location"
              className="w-full border rounded-lg px-4 py-3 outline-none"
            />

            <select className="w-full border rounded-lg px-4 py-3 outline-none">
              <option value="">Select Job Type</option>
              <option value="Internship">Internship</option>
              <option value="Full Time">Full Time</option>
            </select>

            <textarea
              placeholder="Job Description"
              rows="5"
              className="w-full border rounded-lg px-4 py-3 outline-none"
            />

            <button
              type="button"
              onClick={() =>
                alert("Job posting feature will be connected to backend later.")
              }
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Post Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/apply" element={<ApplyForm />} />
      <Route path="/saved" element={<SavedJobs />} />
      <Route path="/about" element={<About />} />
      <Route path="/post-job" element={<PostJob />} />
    </Routes>
  );
}

export default App;