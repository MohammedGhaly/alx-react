import PropTypes from "prop-types";

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default function CourseListRow({
  isHeader,
  textFirstCell,
  textSecondCell,
}) {
  return (
    <tr>
      {isHeader ? (
        textSecondCell === null || textSecondCell === undefined ? (
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textFirstCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textFirstCell}</td>
        </>
      )}
    </tr>
  );
}
