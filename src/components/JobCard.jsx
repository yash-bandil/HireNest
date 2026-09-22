import {useEffect, useState } from "react";
import { Link } from "react-router-dom";

function JobCard({ job, onSaveChange  }) {
  const [saved, setSaved] = useState(() => {
  const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

  return savedJobs.includes(job.id);
});

useEffect(() => {
  const savedJobs =
    JSON.parse(localStorage.getItem("savedJobs")) || [];

  if (saved) {
    if (!savedJobs.includes(job.id)) {
      savedJobs.push(job.id);
    }
  } else {
    const index = savedJobs.indexOf(job.id);

    if (index !== -1) {
      savedJobs.splice(index, 1);
    }
  }

  localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
  onSaveChange?.();
}, [saved, job.id]);


  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>

          <p className="mt-1 text-gray-600">{job.company}</p>
        </div>

        <button onClick={() => setSaved(!saved)} className="text-2xl">
          {saved ? "♥" : "♡"}
        </button>
      </div>

      <div className="flex gap-3 mt-4 text-sm text-gray-500">
        <span>📍 {job.location}</span>
        <span>💼 {job.type}</span>
        <span>🎓 {job.experience}</span>
      </div>

      <div className="flex gap-2 mt-4">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
<Link
  to={`/jobs/${job.id}`}
  className="mt-6 block w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 text-center"
>
  View Details
</Link>
    </div>
  );
}

export default JobCard;
