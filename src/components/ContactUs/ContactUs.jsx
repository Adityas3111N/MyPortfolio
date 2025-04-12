import { useState } from 'react';
import { send } from 'emailjs-com';
import { emailConfig } from '../conf/conf.js';

const steps = ['Info', 'Project', 'Details'];
const budgets = ['1000 - 2000 USD', '2000 - 10000 USD', '10000+ USD', 'Just a coffee ☕'];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    budget: '',
    details: '',
  });

  const [step, setStep] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    // Only trigger validation if we're at the last step (Step 3 - Message step)
    if (step === steps.length - 1 && !formData.details.trim()) {
      console.log('Please enter a message.'); // Log if no message is entered
      return; // If no message, prevent submission
    }
  
    send(
      emailConfig.serviceID,
      emailConfig.templateID,
      formData,
      emailConfig.publicKey
    )
      .then(() => {
        setSuccess(true); // Success after email is sent
        setFormData({
          name: '',
          email: '',
          type: '',
          budget: '',
          details: '',
        });
        setStep(0); // Reset to the first step
      })
      .catch((err) => {
        console.error('Failed to send message:', err); // Handle error
      });
  };
  

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-white dark:bg-[#0e0e0e] text-black dark:text-white transition-all duration-300">
      {/* Background Blobs */}
      <div className="absolute -top-28 -left-32 w-[300px] h-[300px] bg-indigo-300 dark:bg-indigo-800 opacity-20 rounded-full blur-3xl animate-slow-pulse z-0" />
      <div className="absolute -bottom-24 -right-24 w-[250px] h-[250px] bg-purple-300 dark:bg-purple-900 opacity-25 rounded-full blur-2xl animate-spin-slower z-0" />

      {/* Content */}
      <div className="z-10 w-full max-w-xl rounded-xl shadow-xl p-6 md:p-8 bg-zinc-100 dark:bg-zinc-900 transition-all">
        <div className="text-center mb-8">
          <div className="text-5xl mb-2">☕</div>
          <h2 className="text-2xl md:text-3xl font-semibold">Let’s talk over coffee</h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">Share your dream, I’ll help build it.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Info */}
          {step === 0 && (
            <div className="space-y-4 animate-fade-in">
              <input
                type="text"
                name="name"
                placeholder="Your beautiful name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-white dark:bg-zinc-800 text-black dark:text-white placeholder:text-zinc-500 dark:placeholder:text-zinc-400 border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Best email to reach you"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-white dark:bg-zinc-800 text-black dark:text-white placeholder:text-zinc-500 dark:placeholder:text-zinc-400 border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600"
              />
            </div>
          )}

          {/* Step 2: Project Details */}
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <input
                type="text"
                name="type"
                placeholder="What are we building?"
                value={formData.type}
                onChange={handleChange}
                className="w-full p-3 bg-white dark:bg-zinc-800 text-black dark:text-white placeholder:text-zinc-500 dark:placeholder:text-zinc-400 border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600"
              />
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full p-3 bg-white dark:bg-zinc-800 text-black dark:text-white placeholder:text-zinc-500 dark:placeholder:text-zinc-400 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600"
              >
                <option value="">What’s your budget range?</option>
                {budgets.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
          )}

          {/* Step 3: Details */}
          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <textarea
                name="details"
                rows="5"
                placeholder="Any dreams, goals, or coffee-flavored notes?"
                value={formData.details}
                onChange={handleChange}
                className="w-full p-3 bg-white dark:bg-zinc-800 text-black dark:text-white placeholder:text-zinc-500 dark:placeholder:text-zinc-400 border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600"
              />
            </div>
          )}

          {/* Navigation */}
          <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-4 sm:items-center mt-4">
            {step > 0 && (
              <button
                type="button"
                onClick={handleBack}
                className="w-full sm:w-auto px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-600 text-gray-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
              >
                ← Back
              </button>
            )}
            {step < steps.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="w-full sm:w-auto px-6 py-2 bg-black text-white dark:bg-indigo-600 rounded-md hover:opacity-90 transition"
              >
                Next → 
              </button>
            ) : (
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 transition-all duration-300 ease-in-out text-white rounded-xl shadow-md active:scale-95 dark:shadow-lg"
              >
                Send Message 🚀
              </button>
            )}
          </div>

          {/* Success Message */}
          {success && (
            <div className="text-green-600 dark:text-green-400 text-sm sm:text-base mt-6 animate-fade-in">
              <p className="font-semibold text-center">
                ✅ Message sent! I’ll reach out within 24 hours.
              </p>
              <p className="text-center text-zinc-500 dark:text-zinc-400 italic mt-2">
                “Working with you is going to be amazing.”
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
