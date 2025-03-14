import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div>
        <h2 className='font-bold text-center text-black text-5xl pt-10 pb-5'> Get in Touch</h2>
    <div className="flex items-center justify-center p-10  ">
      <form className="bg-white p-10 rounded-2xl shadow-lg w-full md:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="input input-bordered w-full rounded-full" />
          <input type="email" placeholder="Email" className="input input-bordered w-full rounded-full" />
        </div>
        <input type="text" placeholder="Phone" className="input input-bordered w-full rounded-full mt-4" />
        <textarea placeholder="Message" className="textarea textarea-bordered w-full rounded-2xl mt-4" rows="4"></textarea>
        <div className="flex justify-center mt-4">
          <button className="px-6 py-2 bg-green-300 text-gray-900 font-semibold rounded-full flex items-center gap-2 hover:bg-green-400 transition">
            <FaPaperPlane /> Send It!
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
