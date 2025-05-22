import React from "react";

export default function PageHeader({ title, breadcrumb, children }) {
  return (
    <div id="pageheader-container" className="flex justify-between items-center p-4">
      <div id="pageheader-left" className="flex flex-col">
        <span id="page-title" className="font-poppins-extrabold text-[40px] text-gray-900">
          {title}
        </span>
        <div id="breadcrumb-links" className="flex items-center space-x-2 mt-2 font-medium">
          { typeof breadcrumb === "string" ? (
            <span id="breadcrumb-home" className="text-gray-500">{breadcrumb}</span>) : (breadcrumb.map((item, index) => (
              <React.Fragment key={index}>
                <span className="text-gray-500">{item}</span>
                {index < breadcrumb.length - 1 && <span className="text-gray-500">/</span>}
              </React.Fragment>
            ))
          )}
        </div>
      </div>

      <div id="action-button" className="px-4 py-2 rounded-lg text-white">
        {children}
      </div>
    </div>
  );
}
