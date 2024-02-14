import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  headerStyle: { backgroundColor: "#deb5b545" },
  rowStyle: { backgroundColor: "#f5f5f5ab" },
  rowChecked: { backgroundColor: "#e6e4e4" },
});

function CourseListRow({
  id,
  isHeader,
  textFirstCell,
  textSecondCell,
  isChecked,
  onChangeRow,
}) {
  function handleChangeChecked() {
    onChangeRow(id, !isChecked);
  }

  if (isHeader) {
    return (
      <tr className={css(styles.headerStyle)}>
        {<th colSpan={textSecondCell === null ? "2" : "1"}>{textFirstCell}</th>}
        {textSecondCell !== null && <th>{textSecondCell}</th>}
      </tr>
    );
  } else {
    return (
      <tr className={css(isChecked ? styles.rowChecked : styles.rowStyle)}>
        <td>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleChangeChecked}
          />
          {textFirstCell}
        </td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isChecked: PropTypes.bool,
  onChangeRow: PropTypes.func,
};

CourseListRow.defaultProps = {
  id: null,
  isHeader: false,
  textSecondCell: null,
  isChecked: false,
  onChangeRow: () => {},
};

export default CourseListRow;
