export function Table({ children }) {
    return (
      <div className="shadow-sm border border-gray-200 rounded-xl overflow-x-auto">
        <table className="bg-white divide-y divide-gray-200 min-w-full text-sm text-left">
          {children}
        </table>
      </div>
    );
  }
  
  export function TableHead({ children }) {
    return (
      <thead className="bg-gray-50 font-semibold text-gray-700 text-xs uppercase tracking-wide">
        {children}
      </thead>
    );
  }
  
  export function TableBody({ children }) {
    return <tbody className="divide-y divide-gray-100">{children}</tbody>;
  }
  
  export function TableRow({ children }) {
    return <tr className="hover:bg-gray-50 transition">{children}</tr>;
  }
  
  export function TableHeader({ children }) {
    return <th className="px-6 py-4">{children}</th>;
  }
  
  export function TableCell({ children }) {
    return <td className="px-6 py-4 text-gray-700">{children}</td>;
  }
  