
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
  nom: yup.string().nullable(),
  prenom: yup.string().required('Le prénom est requis'),
  sexe: yup.string().required('Le sexe est requis'),
  dateBapteme: yup.date().nullable().typeError('Date invalide'),
  dateNaissance: yup.date().nullable().typeError('Date invalide'),
  telephone: yup.string().nullable(),
  situationMatrimoniale: yup.string().nullable(),
  occupation: yup.string().nullable(),
  observation: yup.string().nullable(),
}).required();

const MembreForm = ({ defaultValues, onSubmit, isEditMode }) => {

    const navigate = useNavigate();
  
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
      resolver: yupResolver(schema),
      defaultValues,
    });
  
    useEffect(() => {
      if (defaultValues) {
        for (const key in defaultValues) {
          setValue(key, defaultValues[key]);
        }
      }
    }, [defaultValues, setValue]);
  
    return (
        <div className="card shadow-xl bg-base-100 m-10">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-6">
              {isEditMode ? 'Modification d\'un membre' : 'Enregistrement d\'un membre'}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Nom</span>
                  </label>
                  <input type="text" {...register('nom')} className="input input-bordered" />
                  {errors.nom && <span className="text-error text-sm mt-1">{errors.nom.message}</span>}
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Prénom *</span>
                  </label>
                  <input type="text" {...register('prenom')} className="input input-bordered" />
                  {errors.prenom && <span className="text-error text-sm mt-1">{errors.prenom.message}</span>}
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date de naissance</span>
                  </label>
                  <input type="date" {...register('dateNaissance')} className="input input-bordered" />
                  {errors.dateNaissance && <span className="text-error text-sm mt-1">{errors.dateNaissance.message}</span>}
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Sexe *</span>
                  </label>
                  <select {...register('sexe')} className="select select-bordered w-full">
                    <option value="">Sélectionner</option>
                    <option value="M">Masculin</option>
                    <option value="F">Féminin</option>
                  </select>
                  {errors.sexe && <span className="text-error text-sm mt-1">{errors.sexe.message}</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date de baptême</span>
                  </label>
                  <input type="date" {...register('dateBapteme')} className="input input-bordered" />
                  {errors.dateBapteme && <span className="text-error text-sm mt-1">{errors.dateBapteme.message}</span>}
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Téléphone</span>
                  </label>
                  <input type="text" {...register('telephone')} className="input input-bordered" />
                  {errors.telephone && <span className="text-error text-sm mt-1">{errors.telephone.message}</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Situation matrimoniale</span>
                  </label>
                  <select {...register('situationMatrimoniale')} className="select select-bordered w-full">
                    <option value="">Sélectionner</option>
                    <option value="Célibataire">Célibataire</option>
                    <option value="Marié(e)">Marié(e)</option>
                    <option value="Divorcé(e)">Divorcé(e)</option>
                    <option value="Veuf(ve)">Veuf(ve)</option>
                  </select>
                  {errors.situationMatrimoniale && <span className="text-error text-sm mt-1">{errors.situationMatrimoniale.message}</span>}
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Occupation</span>
                  </label>
                  <input type="text" {...register('occupation')} className="input input-bordered" />
                  {errors.occupation && <span className="text-error text-sm mt-1">{errors.occupation.message}</span>}
                </div>
              </div>
              
              <div className="form-control mt-6">
                <label className="label">
                  <span className="label-text">Observation</span>
                </label>
                <textarea {...register('observation')} className="textarea textarea-bordered h-24"></textarea>
                {errors.observation && <span className="text-error text-sm mt-1">{errors.observation.message}</span>}
              </div>
              
              <div className="card-actions justify-end mt-6">
                <button 
                  type="button" 
                  onClick={() => isEditMode ? navigate('/membres') : reset()} 
                  className="btn btn-outline"
                >
                  {isEditMode ? 'Annuler' : 'Réinitialiser'}
                </button>
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                >
                  { (isEditMode ? 'Mettre à jour' : 'Enregistrer')}
                </button>
              </div>
            </form>
          </div>
        </div>
      );
  };
  
  export default MembreForm;
 