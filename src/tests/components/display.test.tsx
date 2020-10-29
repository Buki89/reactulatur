import React from "react";
import renderer from "react-test-renderer";
import Display from "../../components/Display";

it("renders correctly when there are no items", () => {
  const tree = renderer
    .create(<Display result={""} expression={""} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
