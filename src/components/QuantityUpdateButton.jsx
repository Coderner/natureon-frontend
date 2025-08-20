const QuantityUpdateButton = ({quantity,setQuantity, id}) => {

  const handleDecrease = () => {
    if (id) {
      // Global cart update
      setQuantity(id, -1);
    } else {
      // Local state update
      setQuantity(prev => Math.max(1, prev - 1));
    }
  };

  const handleIncrease = () => {
    if (id) {
      setQuantity(id, +1);
    } else {
      setQuantity(prev => prev + 1);
    }
  };

  return (
        <div className="flex items-center">
            <button
             onClick={handleDecrease}
            className="px-2 md:px-3 py-1 bg-gray-200 rounded-l-xl md:rounded-l-2xl hover:bg-gray-300 text-lg border border-gray-300 hover:cursor-pointer"
            >
            −
            </button>

            <div className="text-lg font-medium px-2 md:px-3 py-1 text-center border-y border-gray-300">{quantity}</div>

            <button
            onClick={handleIncrease}
            className="px-2 md:px-3 py-1 bg-gray-200 rounded-r-xl md:rounded-r-2xl hover:bg-gray-300 text-lg border border-gray-300 hover:cursor-pointer"
            >
            +
            </button>
        </div>
  )
}

export default QuantityUpdateButton;