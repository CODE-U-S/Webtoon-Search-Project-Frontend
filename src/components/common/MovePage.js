import { useNavigate } from "react-router-dom";

function MovePage({ name }) {
  const movePage = useNavigate();
  movePage({ name });
}

export default MovePage;
