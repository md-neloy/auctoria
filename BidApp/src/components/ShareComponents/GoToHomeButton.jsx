import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const GoToHomeButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all"
    >
      <AiOutlineHome className="text-lg" />
      Home
    </button>
  );
};

export default GoToHomeButton;
