import PropTypes from "prop-types";
import github from "../assets/img/github-mark/github-mark-white.svg";

function Modal({ project, closeModal }) {
  const tech = project.tech.map((item, index) => {
    return (
      <div className="tech_modal-p" key={index}>
        {" "}
        {item}{" "}
      </div>
    );
  });
  return (
    <>
      <div className="div_modal" key={project.id}>
        <div className="div_modal-position">
            <h2 className="title_modal">{project.nom}</h2>
          <div className="div_modal-contain">
            <div className="close_modal" onClick={closeModal}>
              X
            </div>
            <div className="img_modal-position">                
            <img className="img_modal" src={project.image} alt={project.nom} />
            </div>
            <div className="info_modal">
              <p className="p_modal"> {project.info} </p>
              <div className="tech_git_modal">
                <div className="tech_modal">{tech}</div>
                <a
                  className="github_modal"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} className="github_modal" alt="Github" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Modal.propTypes = {
  project: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalClass: PropTypes.string.isRequired,
};
export default Modal;
