export const ItemCount = ({ count, handleCount }) => {
    return (
        <div className="flex h-9  bg-gray-200 rounded">
            <button
                onClick={() => handleCount("minus")}
                className="flex justify-center items-center btn btn-danger text-white fw-bold"
            >
                -
            </button>
            <span
                id="counter"
                className="flex flex-1 justify-center items-center mx-4 fw-bold my-4"
            >
                {count}
            </span>
            <button
                onClick={() => handleCount("plus")}
                className="flex justify-center items-center btn btn-success text-white fw-bold"
            >
                +
            </button>
        </div>
    );
};