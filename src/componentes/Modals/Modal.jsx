import "./Modal.scss";

/**
 *
 * @param {Boolean} isVisible Booleano para asignar la visibilidad de `Modal`
 * @param {Function} closeModal Función para definir el cierre de `Modal`
 * @param {Boolean} children Componente hijo de `Modal`
 *
 * @returns Estructura HTML
 */

export const Modal = ({ children, isVisible, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article
      className={`modal-base ${isVisible && "is-visible"}`}
      onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <div className="modal-content">{children}</div>
        <div className="modal-close" onClick={closeModal}></div>
      </div>
    </article>
  );
};
