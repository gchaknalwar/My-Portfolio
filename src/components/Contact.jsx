import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  User,
  AtSign,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailTo = `mailto:gchaknalwar@gmail.com?subject=Portfolio Contact from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;

    window.location.href = mailTo;

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0c0c0c] to-[#120a05] px-6 md:px-20 py-28"
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/10 blur-[140px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500/10 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-orange-500/20 rounded-full bg-orange-500/10 mb-6">
            <MessageSquare size={16} className="text-orange-400" />
            <span className="text-orange-300 text-sm font-semibold">
              Contact Me
            </span>
          </div>

          <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 text-transparent bg-clip-text">
            Let’s Work Together
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I’m{" "}
            <span className="text-orange-400 font-semibold">
              Govind Chaknalwar
            </span>
            , a Full Stack Developer specializing in MERN Stack and Java Spring
            Boot. Feel free to reach out for projects, jobs or collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: <Mail />,
                title: "Email",
                value: "gchaknalwar@gmail.com",
                link: "mailto:gchaknalwar@gmail.com",
              },
              {
                icon: <Phone />,
                title: "Phone / WhatsApp",
                value: "+91 76200 43363",
                link: "https://wa.me/917620043363",
              },
              {
                icon: <MapPin />,
                title: "Location",
                value: "Rajura, Chandrapur, Maharashtra",
                link: "#",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="block bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-orange-500/40 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.value}</p>
                  </div>
                </div>
              </a>
            ))}

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6">
              <div className="flex gap-4">
                <Sparkles className="text-orange-400" />
                <p className="text-gray-300 text-sm">
                  Available for <b>Full-Time, Internship & Freelance</b>. I
                  usually reply within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 space-y-6"
            >
              <div>
                <label className="text-white font-semibold flex gap-2 mb-2">
                  <User size={18} className="text-orange-400" /> Name
                </label>
                <input
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-white font-semibold flex gap-2 mb-2">
                  <AtSign size={18} className="text-orange-400" /> Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="text-white font-semibold flex gap-2 mb-2">
                  <MessageSquare size={18} className="text-orange-400" />{" "}
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none resize-none"
                  placeholder="Tell me about your requirement..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl text-white font-bold flex justify-center items-center gap-2 hover:scale-105 transition"
              >
                <Send size={20} /> Send Message
              </button>

              {submitted && (
                <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <CheckCircle2 className="text-green-400" />
                  <p className="text-green-400 font-semibold">
                    Email client opened — message ready to send!
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
