const Newsletter = () => {
  return (
    <section className="bg-gradient-blue-cyan text-white py-16 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-heading font-bold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg mb-8 text-gray-100">
          Get exclusive solar tips, promotions, and industry updates delivered to your inbox
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-6 py-3 rounded-md text-primary font-semibold"
          />
          <button className="px-8 py-3 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
