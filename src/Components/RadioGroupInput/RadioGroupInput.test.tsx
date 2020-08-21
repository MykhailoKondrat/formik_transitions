import RadioGroupInput from "./RadioGroupInput";
import React from "react";
import * as Adapter from "../../../setupTests";
import { mount, shallow } from "enzyme";
import { IRadioGroupInput, TwoOrMoreArray } from "../../interfaces/interfaces";
import { FormControlLabel } from "@material-ui/core";
const adapter = Adapter;

// describe("<RadioGroupInput/>", () => {
//   const testOptions: TwoOrMoreArray<string> = ["1", "2", "3"];
//   const expectedResult = 3;
//   const mockProps: IRadioGroupInput = {
//     label: "label",
//     name: "radioInput",
//     options: testOptions,
//   };
//   const wrapper = shallow(<RadioGroupInput {...mockProps} />);
//   it("should match Snapshot", function () {
//     expect(wrapper).toMatchSnapshot();
//   });
//   it("should render correct amout of childs based on passed ", () => {
//     expect(wrapper.find(FormControlLabel).length).toBe(expectedResult);
//   });
// });

const testOptions: TwoOrMoreArray<string> = ["1", "2", "3"];
const expectedResult = 3;
const mockProps: IRadioGroupInput = {
  label: "label",
  name: "radioInput",
  options: testOptions,
};
const wrapper = shallow(<RadioGroupInput {...mockProps} />);

test("should match Snapshot", function () {
  expect(wrapper).toMatchSnapshot();
});
test("should render correct amout of childs based on passed ", () => {
  expect(wrapper.find(FormControlLabel).length).toBe(expectedResult);
});
