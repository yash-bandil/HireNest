import { useState } from "react";

function ApplyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  alert("Application submitted successfully!");

  console.log(formData);

  setFormData({
    name: "",
    email: "",
    phone: "",
    resume: "",
    message: "",
  });
};

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">

        <h1 className="text-3xl font-bold text-gray-900">
          Apply for this Job
        </h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 outline-none"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 outline-none"
            required
          />

          <input
            type="url"
            name="resume"
            placeholder="Resume Link"
            value={formData.resume}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 outline-none"
          />

          <textarea
            name="message"
            placeholder="Why are you suitable for this job?"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full border rounded-lg px-4 py-3 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Submit Application
          </button>

        </form>
      </div>
    </div>
  );
}

export default ApplyForm;