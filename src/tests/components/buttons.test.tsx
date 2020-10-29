import React from "react";
import renderer from "react-test-renderer";
import Buttons from "../../components/Buttons";

it("renders correctly when there are no items", () => {
  const tree = renderer.create(<Buttons buttons={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
