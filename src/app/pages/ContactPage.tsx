import { useState } from "react";
const backgroundImage = "/public/images/glenn-hansen-Igf_Qsv9Fv8-unsplash-png.png";

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    projectName: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main 
      className="bg-neutral-800 px-6 py-12 min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Info box */}
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Let Us Know About Your Project!</h2>
              <p className="text-neutral-800 leading-relaxed">
    Brett Stokes is an Austin-based audio engineer, songwriter, and producer with more than 20 years of experience creating, performing, and recording original music. As the writer, lead vocalist, guitarist, and producer for VERSUS LEVIATHAN and HOMECOMINGTX, he brings a fully hands-on approach to every project, guiding ideas from raw demos to finished releases. His work balances technical detail with artistic intention, drawing from a deep background in:

  </p>

  <ul className="list-disc list-inside space-y-2 text-neutral-800 pl-2 my-6">
    <li>Audio Production</li>
    <li>Audio Mixing</li>
    <li>Audio Mastering</li>
    <li>Vocal Production</li>
    <li>Music Visualizers</li>
  </ul>

  <p>
    Use the form on this page to tell me about your project, or reach out directly by
    email at{" "}
    <a
      href="mailto:contact@avalanche-recordings.com"
      className="font-medium underline hover:opacity-80"
    >
      contact@avalanche-recordings.com
    </a>.
  </p>

  <p>
    You can also connect via Instagram DM at{" "}
    <a
      href="https://instagram.com/brettisstoked"
      target="_blank"
      rel="noreferrer"
      className="font-medium underline hover:opacity-80"
    >
      @brettisstoked
    </a>.
  </p>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-white p-8 rounded shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Name
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Project Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="projectName"
                  required
                  value={formData.projectName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Link To Content <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white px-8 py-2 rounded hover:bg-gray-800 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
