const Contact = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="max-w-4xl w-full mx-auto py-12 px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
          <form className="bg-gray-900 shadow-md rounded-lg p-6 space-y-4">
            <div>
              <label className="block text-gray-300 font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 font-semibold">Message</label>
              <textarea
                placeholder="How can we help you?"
                className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Contact;
  