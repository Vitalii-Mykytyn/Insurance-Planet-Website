// 📦 src/components/ContactApplication/AgentSection.jsx
import React from "react";

const AgentSection = ({ index, group, agents, expanded, onToggle }) => {
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left px-4 md:px-6 py-4 bg-white/10 hover:bg-white/20 font-semibold text-lg flex justify-between items-center"
      >
        <span>{group}</span>
        <span>{expanded ? "▲" : "▼"}</span>
      </button>
      {expanded && (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm md:text-base border-t border-white/10">
            <thead className="bg-white/10">
              <tr>
                <th className="px-4 py-3 text-left whitespace-nowrap">Name</th>
                <th className="px-4 py-3 text-left whitespace-nowrap">Phone</th>
                <th className="px-4 py-3 text-left whitespace-nowrap">Email</th>
                <th className="px-4 py-3 text-left whitespace-nowrap">Roles</th>
              </tr>
            </thead>
            <tbody>
              {agents.map(({ name, phone, email, roles }, idx) => (
                <tr
                  key={idx}
                  className="odd:bg-white/5 even:bg-white/0 border-b border-white/10"
                >
                  <td className="px-4 py-3 font-medium text-white break-words">
                    {name}
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                      className="text-[#FFB347] hover:underline"
                    >
                      {phone}
                    </a>
                  </td>
                  <td className="px-4 py-3">
                    {email ? (
                      <a
                        href={`mailto:${email}`}
                        className="text-white/70 hover:underline break-all"
                      >
                        {email}
                      </a>
                    ) : (
                      <span className="text-white/50">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 space-x-1 flex flex-wrap gap-2">
                    {roles?.map((role, rIdx) => (
                      <span
                        key={rIdx}
                        className="inline-block bg-white/10 border border-white/20 text-xs md:text-sm px-2 py-1 rounded-full capitalize"
                      >
                        {role}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AgentSection;
