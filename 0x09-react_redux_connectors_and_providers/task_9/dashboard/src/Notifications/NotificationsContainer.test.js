import React from "react";
import { shallow } from "enzyme";

import { NotificationsContainer } from "./NotificationsContainer";

describe("<NotificationsContainer />", () => {
  it("tests that the function fetchNotifications is called when the component is mounted", () => {
    const fetchNotifications = jest.fn();
    shallow(<NotificationsContainer fetchNotifications={fetchNotifications} />);
    expect(fetchNotifications).toHaveBeenCalled();

    jest.restoreAllMocks();
  });
});
