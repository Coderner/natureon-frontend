const Spinner = ({ size = 40, color = "#147538" }) => {
  return (
    <div
      className="spinner"
      style={{
        width: size,
        height: size,
        border: `${size / 8}px solid #cff7de`, 
        borderTop: `${size / 8}px solid ${color}`, 
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    ></div>
  );
};

export default Spinner;