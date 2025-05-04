import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const DonatePage = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_0gzqfg9",
        "template_wuw1w7p",
        formRef.current,
        "zos4rW-NzM0sJzZmu"
      )
      .then(
        (result) => {
          setStatus("Donation email sent successfully. Thank you!");
          console.log(result);
          setTimeout(() => {
            setStatus(null);
          }, 3000);
          formRef.current.reset();
        },
        (error) => {
          setStatus("Something went wrong. Please try again.", error);
          setTimeout(() => {
            setStatus(null);
          }, 3000);
          console.log(error);
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 phoneS:p-4 phoneL:p-3">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full phoneS:p-6 phoneL:p-4">
        <h1 className=" text-[#2A152F] flex flex-col text-3xl font-bold text-center mb-4  phoneS:text-2xl phoneL:text-xl">
          DONATE
          <i className="animate-pulse fa-solid fa-hand-holding-dollar text-[#2A152F]"></i>
        </h1>
        <p className="text-center text-gray-600 mb-4 phoneS:text-sm phoneL:text-xs">
          Make a Difference Today!
        </p>
        <p className="text-gray-700 text-[.8rem] mb-4 phoneS:text-[.75rem] phoneL:text-[.7rem] phoneP:text-[.6rem]">
          Your generous support is vital to our mission at Mishpacha God’s
          Heritage Foundation. Every donation helps us uplift the less
          privileged in our communities, providing essential resources,
          educational assistance, and medical outreach.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-4 flex flex-col gap-4"
        >
          <div>
            <label className="block text-[.9rem] text-gray-700 font-medium phoneS:text-sm phoneL:text-xs phoneP:text-[.65rem]">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 phoneL:placeholder:text-[13px] phoneS:px-3 phoneL:px-2 phoneS:py-1 phoneP:placeholder:text-[10px]"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-[.9rem] text-gray-700 font-medium phoneS:text-sm phoneL:text-xs phoneP:text-[.65rem]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 phoneS:px-3 phoneL:px-2 phoneS:py-1 phoneL:placeholder:text-[13px] phoneP:placeholder:text-[10px]"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-[.9rem] text-gray-700 font-medium phoneS:text-sm phoneL:text-xs phoneP:text-[.65rem]">
              Amount (₦)
            </label>
            <input
              type="number"
              name="amount"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 phoneS:px-3 phoneL:px-2 phoneS:py-1 phoneP:placeholder:text-[10px]"
              placeholder="Enter donation amount"
            />
          </div>

          <div className="p-4 bg-gray-100 rounded-lg text-gray-700 phoneS:p-3 phoneL:p-2">
            <p className="text-[.85rem] font-semibold phoneS:text-sm phoneL:text-xs phoneP:text-[.65rem]">
              Bank Details:
            </p>
            <p className="text-[.8rem] phoneS:text-sm phoneL:text-xs phoneP:text-[.65rem]">
              8135877412
            </p>
            <p className="text-[.8rem] phoneS:text-sm phoneL:text-xs phoneP:text-[.65rem]">
              Mishpacha, God’s Heritage Foundation
            </p>
            <p className="text-[.8rem] phoneS:text-sm phoneL:text-xs phoneP:text-[.65rem]">
              Moniepoint MFB
            </p>
          </div>

          <button
            type="submit"
            className="animate-bounce w-full bg-[#2A152F] text-white py-3 rounded-md hover:bg-blue-700 transition phoneS:py-1 phoneL:text-[.7rem] phoneL:py-2"
          >
            Donate Now
          </button>
        </form>

        {status && (
          <p className="text-center text-sm mt-4 text-green-600">{status}</p>
        )}

        <p className="text-center text-[.9rem] text-gray-600 mt-6 phoneS:text-sm phoneL:text-xs">
          Thank you for choosing to support Mishpacha God’s Heritage Foundation.
          Your generosity makes a profound impact on the lives of those we
          serve.
        </p>
      </div>
    </div>
  );
};

export default DonatePage;
