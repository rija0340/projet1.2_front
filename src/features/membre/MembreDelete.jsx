import { useNavigate, useParams } from "react-router-dom";
import { deleteMembre } from "../../api/membre";
import { useEffect } from "react";

export const MembreDelete = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const deleteMbr = async () => {
      try {
        await deleteMembre(id);
        navigate("/membres");
      } catch (error) {
        console.error("Failed to delete membre", error);
      }
    };

    deleteMbr();
  }, [id, navigate]);

  return <div>Suppression en cours...</div>;
};
