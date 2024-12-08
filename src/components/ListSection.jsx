import { useState, useEffect, useRef } from "react";

export default function ListSection({ data }) {
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  // Update the height of the content dynamically
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight); // Total height of the scrollable content
    }
  }, [data]); // Recalculate when data changes

  return (
    <div className="bg-gray-950 rounded-lg p-6 mt-4 border-[1px] border-gray-800 relative max-h-[30rem] overflow-y-auto hide-scrollbar">
      {/* Vertical Line */}
      <div
        className="absolute top-0 left-[46px] w-[0.5px] bg-gray-400"
        style={{ height: `${contentHeight+45}px` }}
      ></div>

      {/* Content */}
      <ul className="space-y-6" ref={contentRef}>
        {data.map((company, index) => (
          <CompanyItem key={index} company={company} />
        ))}
      </ul>
    </div>
  );
}

function CompanyItem({ company }) {
  const [loaded, setLoaded] = useState(false);

  // Determine if the company object contains roles
  const hasRoles = Array.isArray(company.roles);

  return (
    <li className="flex items-start space-x-4 relative">
      {/* Company Logo */}
      <div className="relative flex-shrink-0">
        <div
          className={`absolute inset-0 bg-gray-500 animate-pulse ${
            loaded ? "hidden" : "block"
          } rounded-full`}
        ></div>
        <img
          src={company.image}
          alt={company.alt}
          onLoad={() => setLoaded(true)}
          className={`w-12 h-12 min-w-[3rem] min-h-[3rem] rounded-full border-2 border-gray-500 relative z-10 ${
            loaded ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        />
      </div>
      <div>
        {/* Handle companies with roles */}
        {hasRoles ? (
          <>
            <strong className="text-lg">{company.company}</strong>
            <ul className="space-y-4 mt-2">
              {company.roles.map((role, index) => (
                <li key={index}>
                  <div className="text-gray-400 text-sm">
                    <strong>{role.title}</strong> {role.date && `- ${role.date}`}
                  </div>
                  {role.subtitle && (
                    <div className="text-gray-300 text-sm">{role.subtitle}</div>
                  )}
                  <ul className="text-gray-300 text-sm list-disc ml-6 mt-1">
                    {role.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </>
        ) : (
          // Handle items without roles (like projects or education)
          <>
            <strong className="text-lg">{company.title}</strong>
            {company.subtitle && (
              <div className="text-gray-300 text-sm">{company.subtitle}</div>
            )}
            {company.date && (
              <p className="text-gray-400 text-sm">{company.date}</p>
            )}
            <ul className="text-gray-300 text-sm list-disc ml-6 mt-1">
              {company.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </li>
  );
}

