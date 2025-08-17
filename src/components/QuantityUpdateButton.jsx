const QuantityUpdateButton = ({quantity,setQuantity}) => {
  return (
        <div className="flex items-center">
            <button
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            className="px-2 md:px-3 py-1 bg-gray-200 rounded-l-xl md:rounded-l-2xl hover:bg-gray-300 text-lg border border-gray-300"
            >
            −
            </button>

            <div className="text-lg font-medium px-2 md:px-3 py-1 text-center border-y border-gray-300">{quantity}</div>

            <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="px-2 md:px-3 py-1 bg-gray-200 rounded-r-xl md:rounded-r-2xl hover:bg-gray-300 text-lg border border-gray-300"
            >
            +
            </button>
        </div>
  )
}

export default QuantityUpdateButton;