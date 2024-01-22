import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  headerStyle: { backgroundColor: "#deb5b545" },
  rowStyle: { backgroundColor: "#f5f5f5ab" },
});

const CourseListRow = ({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) => {
  if (isHeader) {
    return (
      <tr className={css(styles.headerStyle)}>
        {<th colSpan={textSecondCell === null ? "2" : "1"}>{textFirstCell}</th>}
        {textSecondCell !== null && <th>{textSecondCell}</th>}
      </tr>
    );
  } else {
    return (
      <tr className={css(styles.rowStyle)}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
