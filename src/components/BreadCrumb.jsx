import React from 'react'

const BreadCrumb = ({ items }) => {
  return (
    <nav className="flex items-center space-x-1 text-sm">
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center">
          {idx > 0 && ">"}
          {item.href ? (
            <a href={item.href} className="hover:underline">
              {item.label}
            </a>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default BreadCrumb;