import React from "react";
import CourseListRow from "./CourseListRow";
import PropType from "prop-types";
import CourseShape from "./CourseShape";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  table: {
    width: "60%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },

  th: {
    border: "1px solid #000",
    padding: "8px",
    textAlign: "left",
  },
});

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList" className={css(styles.table)}>
      <thead className={css(styles.th)}>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow
          isHeader={true}
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow
            isHeader={false}
            textFirstCell="No course available yet"
          />
        ) : null}
        {listCourses.map((val, idx) => {
          return (
            <CourseListRow
              isHeader={false}
              textFirstCell={val.name}
              textSecondCell={val.credit}
              key={val.id}
            />
          );
        })}
      </tbody>
    </table>
  );
};

CourseList.defaultProps = {
  listCourses: [],
};

CourseList.propType = {
  listCourses: PropType.arrayOf(CourseShape),
};

export default CourseList;
