import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CourseListRow from "./CourseListRow";
import {
  fetchCourses,
  selectCourse,
  unSelectCourse,
} from "../actions/courseActionCreators";
import { getListCourses } from "../selectors/courseSelector";

export class CourseList extends Component {
  constructor(props) {
    super(props);
    this.onChangeRow = this.onChangeRow.bind(this);
  }

  componentDidMount() {
    this.props.fetchCourses();
  }

  onChangeRow(id, checked) {
    if (checked) {
      this.props.selectCourse(id);
    } else {
      this.props.unSelectCourse(id);
    }
  }

  render() {
    const { listCourses } = this.props;
    return (
      <table id="CourseList">
        <thead>
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
          {listCourses &&
            listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                id={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
                isHeader={false}
                isChecked={course.isSelected}
                onChangeRow={this.onChangeRow}
              />
            ))}
        </tbody>
      </table>
    );
  }
}

CourseList.defaultProps = {
  listCourses: [],
  fetchCourses: () => {},
  selectCourse: () => {},
  unSelectCourse: () => {},
};

CourseList.propType = {
  listCourses: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  fetchCourses: PropTypes.func,
  selectCourse: PropTypes.func,
  unSelectCourse: PropTypes.func,
};

export const mapStateToProps = (state) => {
  const coursesList = getListCourses(state);
  return {
    listCourses: coursesList,
  };
};

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
