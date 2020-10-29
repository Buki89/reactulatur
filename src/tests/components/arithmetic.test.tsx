import React from "react";
import renderer from "react-test-renderer";
import Arithmetic from "../../components/Arithmetic";

it("renders correctly when there are no items", () => {
  const tree = renderer
    .create(<Arithmetic handleClick handleMakeResult />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
