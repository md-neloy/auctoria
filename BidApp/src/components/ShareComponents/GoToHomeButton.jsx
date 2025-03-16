import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const GoToHomeButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="flex items-center gap-2 px-4 py-2 text-black bg-teal-300 rounded-md hover:bg-teal-400 text-lg font-semibold transition-all"
    >
      <AiOutlineHome className="text-lg" />
      Home
    </button>
  );
};

export default GoToHomeButton;
