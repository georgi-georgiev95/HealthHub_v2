import PropTypes from "prop-types";

import styles from "../../CreateForms/EntityForm.module.css";

const MultiRowInput = ({
  inputField,
  index,
  entitiesArray,
  handleNewEntity,
  deleteEntity,
}) => {
  return (
    <li className={styles.listGroupRecipes}>
      <span>{index + 1}. </span>
      <input
        type="text"
        value={inputField.value}
        onChange={(e) => handleNewEntity(index, e)}
      />
      {entitiesArray.length > 1 && (
        <i onClick={() => deleteEntity(index)} className="fa-solid fa-x"></i>
      )}
    </li>
  );
};

MultiRowInput.propTypes = {
  inputField: PropTypes.object,
  index: PropTypes.number,
  entitiesArray: PropTypes.array,
  handleNewEntity: PropTypes.func,
  deleteEntity: PropTypes.func,
};

export default MultiRowInput;
