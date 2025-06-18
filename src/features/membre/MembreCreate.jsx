import MembreForm from "../../components/membre/MembreForm";
import { createMembre } from "../../api/membre";
import { useNavigate } from "react-router-dom";

export  const MembreCreate = () =>{
    const navigate = useNavigate();

    const handleCreate = async (membre) =>{
        try {
            await createMembre(membre);
            navigate("/membres");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <MembreForm
        defaultValues={{}}
        onSubmit={handleCreate}
        isEditMode={false}
      />
    );

}