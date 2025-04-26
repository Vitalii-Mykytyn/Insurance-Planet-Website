import React from "react";

const UploadNotice = () => {
  return (
    <div className="bg-yellow-100/10 border border-yellow-400 p-6 rounded-xl text-yellow-100 text-sm space-y-3">
      <h3 className="text-lg font-bold text-yellow-200">
        📑 Required for Non-Progressive Quotes
      </h3>
      <p>
        In order to receive a quote from any company other than{" "}
        <strong>Progressive</strong>, we require the following documents:
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>MVR (Motor Vehicle Record)</strong> — issued within the past
          30 days for each driver
        </li>
        <li>
          <strong>3-Year Loss Run Report</strong> — showing claims history
        </li>
      </ul>
      <p>
        You may send these documents to us via email at:
        <br />
        <a
          href="mailto:insuranceplanetfl@gmail.com"
          className="underline text-yellow-300 hover:text-white"
        >
          insuranceplanetfl@gmail.com
        </a>
      </p>
    </div>
  );
};

export default UploadNotice;
