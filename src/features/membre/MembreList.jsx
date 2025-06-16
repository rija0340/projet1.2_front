import { getMembres } from '../../api/membre';
import { useState, useEffect } from 'react';

const MembreList = () => {
    const [membres, setMembres] = useState([]);

    useEffect(() => {
        getMembres().then(response => {
            const data = response["hydra:member"];
            setMembres(data);
            console.log("Fetched membres:", data);
        }).catch(error => {
            console.error("Error fetching membres:", error);
        });
    }, []);
    //adjust the table to the data 

    return (
        <div className="overflow-x-auto m-10 card shadow-xl bg-base-100">
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nom & Prénom</th>
                            <th>Occupation</th>
                            <th>Téléphone</th>
                            <th>Action</th>
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
                                    <button className="btn btn-ghost btn-xs">Details</button>
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
        </div>
    );
};

export default MembreList;
