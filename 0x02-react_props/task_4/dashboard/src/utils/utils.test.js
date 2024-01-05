import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

test("returns the correct year", () => {
  expect(getFullYear()).toBe(2024);
});

test("returns the correct footer string", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("testing the returned string for getLatestNotification", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
