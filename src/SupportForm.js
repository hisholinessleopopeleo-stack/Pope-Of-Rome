import React, { useState } from 'react';

export default function SupportForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/xpwlvllp", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  if (submitted) {
    return <p className="text-green-700 font-semibold">🙏 Thank you, your request has been received.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        name="request"
        placeholder="Your Prayer / Support Request"
        className="w-full border p-2 rounded"
        rows="4"
        required
      ></textarea>
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        Submit Request
      </button>
    </form>
  );
}
