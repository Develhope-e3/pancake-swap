import "./Modal.scss";

/**
 *
 * @param {Boolean} isVisible Booleano para asignar la visibilidad de `Modal`
 * @param {Function} closeModal Función para definir el cierre de `Modal`
 * @param {Boolean} children Componente hijo de `Modal`
 *
 * @returns Estructura HTML
 */

export const Modal = ({ setIsModalVisible, children }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">{children}</div>
      <div
        className="modal-close"
        onClick={() => setIsModalVisible(true)}
      ></div>
    </div>
  );
};
