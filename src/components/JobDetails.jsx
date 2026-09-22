import { useParams, Link } from "react-router-dom";
import jobs from "../Jobs";

function JobDetails() {
  const { id } = useParams();

  const job = jobs.find((job) => job.id === Number(id));

  if (!job) {
    return (
      <h1 className="text-center mt-20 text-2xl">
        Job not found
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">

        <h1 className="text-3xl font-bold text-gray-900">
          {job.title}
        </h1>

        <p className="mt-2 text-lg text-gray-600">
          {job.company}
        </p>

        <div className="flex gap-4 mt-5 text-gray-600">
          <span>📍 {job.location}</span>
          <span>💼 {job.type}</span>
          <span>🎓 {job.experience}</span>
        </div>

        <h2 className="text-xl font-bold mt-8">
          Skills
        </h2>

        <div className="flex gap-2 mt-3 flex-wrap">
          {job.skills.map((skill) => (
            <span
              key={skill}
              className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        <h2 className="text-xl font-bold mt-8">
          Job Description
        </h2>

        <p className="mt-3 text-gray-600">
          {job.description}
        </p>

        <Link
          to="/apply"
          className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Apply Now
        </Link>

      </div>
    </div>
  );
}

export default JobDetails;