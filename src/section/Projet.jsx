import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from '../component/Modal';

function Projet ( {project} ) {

    const [findProjet, setFindProjet] = useState(null)
    const openModal = (projetId) => {
        const projetInfo = project.find(item => item.id === projetId);
        setFindProjet(projetInfo)
    }
    const closeModal = () => {
        const modal = document.querySelector('.div_modal');
    if (modal) {
        modal.classList.add('div_modal-closed');
    setTimeout(() => {
        // Changer l'état pour fermer la modale
        setFindProjet(null);
    }, 1700);
    }
}
    const modalClass = findProjet ? 'div_modal-open' : '';
    
    const cardProject = project.map((item, index) => {
        return <div className='cardProject' onClick={() => openModal(item.id)} key={index}> 
        <img className='cardProject-img' src={item.cover} alt={item.nom} />
        </div>
    })

    return (
        <section className='projet_div' id="projet">
        <h2 className="title_projet title">Projets.</h2>
        <div className='cardProject-flex'>
            {cardProject}
            <div className={`div_modal ${modalClass}`}>                
            {findProjet && <Modal project={findProjet} closeModal={closeModal}/>}            
            </div>
        </div>        
        </section>        
    )
}

Projet.propTypes = {
    project: PropTypes.array.isRequired,
};

export default Projet