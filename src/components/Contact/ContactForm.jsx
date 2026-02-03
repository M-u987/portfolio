import { useState } from "react";
import { Send } from "lucide-react";
import { sendEmail } from "../../Services/emailServices";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendEmail(form);
      alert("Message sent successfully");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to send message ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {["name", "email"].map((field) => (
        <div key={field}>
          <label className="block text-sm font-medium  capitalize">
            {field}
          </label>
          <input
            type={field === "email" ? "email" : "text"}
            name={field}
            value={form[field]}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-lg border  px-4 py-2 focus:ring-2 "
          />
        </div>
      ))}

      <div>
        <label className="block text-sm font-medium ">
          Message
        </label>
        <textarea
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-gray-800"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
      >
        Send Message <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
