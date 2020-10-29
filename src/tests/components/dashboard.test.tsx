import React from "react";
import renderer from "react-test-renderer";
import Dashboard from "../../components/Dashboard";

it("renders correctly when there are no items", () => {
  const tree = renderer.create(<Dashboard />).toJSON();
  expect(tree).toMatchSnapshot();
});
