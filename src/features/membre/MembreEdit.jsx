import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MembreForm from "../../components/membre/MembreForm";
import { getMembreById, updateMembre } from "../../api/membre";

const MembreEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [defaultValues, setDefaultValues] = useState(null);

  useEffect(() => {
    const fetchMembre = async () => {
      try {
        const membre = await getMembreById(id);
        const formatDate = (dateString) =>
            dateString ? dateString.slice(0, 10) : null;
        console.log("membre");
        console.log(membre);
        // this must match your form fields
        setDefaultValues({
            ...membre,
            dateNaissance: formatDate(membre.dateNaissance),
            dateBapteme: formatDate(membre.dateBapteme),
          }); 
      } catch (error) {
        console.error("Failed to fetch membre", error);
      }
    };

    fetchMembre();
  }, [id]);

  const handleEdit = async (membre) => {
    try {
      await updateMembre(id, membre);
      navigate("/membres");
    } catch (error) {
      console.log(error);
    }
  };

  // Wait until data is fetched
  if (!defaultValues) return <p>Loading...</p>;

  return (
    <MembreForm
      defaultValues={defaultValues}
      onSubmit={handleEdit}
      isEditMode={true}
    />
  );
};

export default MembreEdit;