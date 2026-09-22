import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import jobs from "../Jobs";

function SavedJobs() {

  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    loadSavedJobs();
  }, []);

  const loadSavedJobs = () => {
    const savedIds =
      JSON.parse(localStorage.getItem("savedJobs")) || [];

    const saved = jobs.filter((job) =>
      savedIds.includes(job.id)
    );

    setSavedJobs(saved);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-3xl font-bold text-gray-900">
          Saved Jobs
        </h1>

        <p className="mt-2 text-gray-600">
          Jobs you have bookmarked.
        </p>

        {savedJobs.length === 0 ? (
          <p className="mt-10 text-gray-500">
            No saved jobs yet.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {savedJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onSaveChange={loadSavedJobs}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default SavedJobs;