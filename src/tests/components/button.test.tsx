import React from "react";
import renderer from "react-test-renderer";
import Button from "../../components/Button";

it("renders correctly when there are no items", () => {
  const tree = renderer
    .create(<Button handleClick={() => {}} value={""} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
