// src/Pages/QueryForm.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FaWhatsapp,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaHome,
  FaPaperPlane,
  FaCheckCircle,
  FaArrowLeft,
  FaExclamationTriangle,
} from "react-icons/fa";

const adminNumber =
  import.meta.env.VITE_WHATSAPP_ADMIN_NUMBER || "918349571810";

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    systemSize: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Format message for WhatsApp
  const formatWhatsAppMessage = () => {
    const queryId = `SQ-${Date.now()}`; // Unique Query ID

    return `
🌟 *New Solar Installation Query* 🌟
📋 Query ID: ${queryId}

👤 *Customer Details:*
━━━━━━━━━━━━━━━
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Address: ${formData.address}

📊 *Project Requirements:*
━━━━━━━━━━━━━━━
System Size: ${formData.systemSize}
Budget: ${formData.budget}
Timeline: ${formData.timeline}

💬 *Additional Message:*
━━━━━━━━━━━━━━━
${formData.message || "No additional message"}

━━━━━━━━━━━━━━━
🕒 Query Time: ${new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    })}
`.trim();
  };

  // Send message from USER's number to ADMIN's WhatsApp
  const sendWhatsAppMessage = async (e) => {
    e.preventDefault();

    // Validate configuration

    // Validate user phone number
    if (!formData.phone || formData.phone.length < 10) {
      setError("Please enter a valid phone number (min 10 digits).");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      console.log("📤 Sending from user:", formData.phone);
      // console.log("📥 Sending to admin:", whatsappConfig.adminNumber);

      const message = formatWhatsAppMessage();
      const whatsappURL = `https://wa.me/${adminNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappURL, "_blank");
      setSuccess(true);
      setError("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Get Solar Quote via WhatsApp | Solar Supplier</title>
        <meta
          name="description"
          content="Get instant solar installation quote via WhatsApp. Free consultation and professional advice."
        />
      </Helmet>

      {/* Back Navigation */}
      <div className="sticky z-40 bg-white border-b py-2 sm:py-3 px-3 sm:px-4 md:px-6 shadow-sm">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center gap-1.5 sm:gap-2 text-primary hover:text-secondary transition-colors font-semibold text-xs sm:text-sm md:text-base"
          >
            <FaArrowLeft className="text-xs sm:text-sm" />
            <span>Back to Home</span>
          </Link>
          <Link 
            to="/" 
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-xs sm:text-sm"
          >
            <FaHome className="text-xs sm:text-sm" />
            <span className="hidden xs:inline">Home</span>
          </Link>
        </div>
      </div>

      <section className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg mb-4">
              <FaWhatsapp className="text-2xl text-green-500" />
              <span className="font-semibold text-darkBlue">
                Send Query via Your WhatsApp
              </span>
            </div>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-darkBlue mb-3 sm:mb-4">
              Get Solar Installation Quote
            </h1>
            <p className="text-textGray text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Your query will be sent from your WhatsApp number to our admin
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10">
            <form
              onSubmit={sendWhatsAppMessage}
              className="space-y-5 sm:space-y-6"
            >
              {/* Personal Details Section */}
              <div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-darkBlue mb-4 flex items-center gap-2">
                  <FaUser className="text-primary" />
                  Your WhatsApp Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-darkBlue mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors text-sm"
                    />
                  </div>

                  {/* Phone - User's WhatsApp Number */}
                  <div>
                    <label className="block text-sm font-semibold text-darkBlue mb-2">
                      Your WhatsApp Number *
                      <span className="text-green-600 text-xs ml-1">
                        (Message will be sent from this number)
                      </span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="918888888888"
                      pattern="[0-9]{10,15}"
                      title="Enter valid phone number (10-15 digits with country code)"
                      className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors text-sm"
                    />
                    <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                      <FaWhatsapp />
                      Format: 918888888888 (country code + number, no spaces)
                    </p>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-darkBlue mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors text-sm"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-semibold text-darkBlue mb-2">
                      Installation Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      placeholder="City, State"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Project Requirements Section */}
              <div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-darkBlue mb-4 flex items-center gap-2">
                  <FaHome className="text-primary" />
                  Project Requirements
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* System Size */}
                  <div>
                    <label className="block text-sm font-semibold text-darkBlue mb-2">
                      System Size (KW) *
                    </label>
                    <select
                      name="systemSize"
                      value={formData.systemSize}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors text-sm"
                    >
                      <option value="">Select Size</option>
                      <option value="1-3 KW">1-3 KW</option>
                      <option value="3-5 KW">3-5 KW</option>
                      <option value="5-10 KW">5-10 KW</option>
                      <option value="10+ KW">10+ KW</option>
                      <option value="Custom">Custom</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-semibold text-darkBlue mb-2">
                      Budget Range *
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors text-sm"
                    >
                      <option value="">Select Budget</option>
                      <option value="Under ₹1L">Under ₹1L</option>
                      <option value="₹1L - ₹3L">₹1L - ₹3L</option>
                      <option value="₹3L - ₹5L">₹3L - ₹5L</option>
                      <option value="₹5L+">₹5L+</option>
                      <option value="Need Consultation">
                        Need Consultation
                      </option>
                    </select>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-semibold text-darkBlue mb-2">
                      Installation Timeline *
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors text-sm"
                    >
                      <option value="">Select Timeline</option>
                      <option value="Immediate (1-2 weeks)">
                        Immediate (1-2 weeks)
                      </option>
                      <option value="Within 1 month">Within 1 month</option>
                      <option value="Within 3 months">Within 3 months</option>
                      <option value="Just exploring">Just exploring</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-sm font-semibold text-darkBlue mb-2">
                  Additional Requirements (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us more about your requirements, roof type, electricity bill, etc..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors text-sm resize-none"
                ></textarea>
              </div>

              {/* Important Notice */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <FaWhatsapp className="text-green-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-darkBlue mb-1">
                      How it works:
                    </h4>
                    <ul className="text-sm text-textGray space-y-1">
                      <li>
                        • Your query will be sent from your WhatsApp number:{" "}
                        <strong>{formData.phone || "YOUR_NUMBER"}</strong>
                      </li>
                      <li>• Admin will receive message on their WhatsApp</li>
                      <li>• Admin can directly reply to your WhatsApp</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending from your WhatsApp...
                  </>
                ) : (
                  <>
                    <FaWhatsapp className="text-2xl" />
                    Send via My WhatsApp
                    <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Success Message */}
            {success && (
              <div className="mt-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg flex items-center gap-3 animate-fadeIn">
                <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-green-700">
                    Query Sent Successfully!
                  </h4>
                  <p className="text-sm text-green-600">
                    Admin will receive your message from your WhatsApp number.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-500 rounded-lg">
                <div className="flex items-start gap-3">
                  <FaExclamationTriangle className="text-yellow-600 text-xl flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-yellow-800 text-sm font-semibold mb-2">
                      {error}
                    </p>
                    <a
                      href={`https://wa.me/${
                        whatsappConfig.adminNumber
                      }?text=${encodeURIComponent(formatWhatsAppMessage())}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-semibold"
                    >
                      <FaWhatsapp />
                      Open WhatsApp Directly
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <FaWhatsapp className="text-3xl text-green-500 mx-auto mb-2" />
              <h4 className="font-bold text-darkBlue text-sm">
                From Your Number
              </h4>
              <p className="text-xs text-textGray mt-1">
                Message sent from your WhatsApp
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <FaCheckCircle className="text-3xl text-primary mx-auto mb-2" />
              <h4 className="font-bold text-darkBlue text-sm">Direct Reply</h4>
              <p className="text-xs text-textGray mt-1">
                Admin replies to your number
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <FaPaperPlane className="text-3xl text-secondary mx-auto mb-2" />
              <h4 className="font-bold text-darkBlue text-sm">
                Instant Delivery
              </h4>
              <p className="text-xs text-textGray mt-1">
                Real-time message delivery
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QueryForm;
