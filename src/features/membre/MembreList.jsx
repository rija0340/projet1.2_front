import { getMembres } from '../../api/membre';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

    const MembreList = () => {
        const [membres, setMembres] = useState([]);
        const [selectedMemberId, setSelectedMemberId] = useState(null);
        const navigate = useNavigate();

        useEffect(() => {
            getMembres().then(response => {
                const data = response["hydra:member"];
                setMembres(data);
                console.log("Fetched membres:", data);
            }).catch(error => {
                console.error("Error fetching membres:", error);
            });
        }, []);


        const handleEditMembre = (membreId) => {
            navigate(`/membres/edit/${membreId}`);
        }
        const handleCreateMembre = () => {
            navigate('/membres/new');
        }

        const handleDeleteMembre = (membreId) => {
            navigate(`/membres/delete/${membreId}`);
        }

    return (
        <div className="overflow-x-auto m-6 card shadow-xl bg-base-100">
            <div className="card-body">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="card-title text-2xl">Liste des membres</h2>
                    <button onClick={handleCreateMembre} className="btn btn-primary">
                        Ajouter un membre
                    </button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nom & Prénom</th>
                            <th>Occupation</th>
                            <th>Téléphone</th>
                            <th className='text-center' >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {membres.map((membre, index) => (
                            <tr key={membre.id}>
                                <th>
                                    <input type="checkbox" className="checkbox" />
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                    alt="Avatar"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{membre.nom}</div>
                                            <div className="text-sm opacity-50">{membre.prenom}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {membre.occupation || 'N/A'}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{membre.situation_matrimoniale || '—'}</span>
                                </td>
                                <td>{membre.telephone || '—'}</td>
                                <th>
                                    {/* make these buttons centerer */}
                                    <div className="flex justify-center">
                                    <button onClick={() => handleEditMembre(membre.id)} className="btn btn-outline btn-success mr-1">Modifier 
                                    </button>
                                    {/* <button className="btn btn-outline btn-info mr-1">Info</button> */}
                                    <button  onClick={()=>{
                                        setSelectedMemberId(membre.id);
                                        document.getElementById('my_modal_1').showModal();
                                        }} className="btn btn-outline btn-error">Supprimer</button>
                                    </div>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Nom & Prénom</th>
                            <th>Occupation</th>
                            <th>Téléphone</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>

        <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg text-red-500">suppression!</h3>
            <p className="py-4">Est ce que vous voulez supprimer ce membre ?</p>
            <div className="modal-action">
                <button onClick={()=>handleDeleteMembre(selectedMemberId)} className="btn btn-outline btn-error">Supprimer</button>
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Annuler</button>
            </form>
            </div>
        </div>
        </dialog>

        </div>
    );
};

export default MembreList;
