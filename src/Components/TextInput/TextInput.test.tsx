import TextInput from "./TextInput";
import { shallow } from "enzyme";
import { MyInput } from "../../interfaces/interfaces";
import React from "react";
import * as Adapter from "../../../setupTests";
const adapter = Adapter;

describe("<TextInput/>", () => {
  it("Match Snapshot", () => {
    const mockProps: MyInput = {
      label: "label",
      name: "name",
      placeholder: "placeholder",
      meta: {
        touched: false,
        error: "",
        initialError: "",
        initialTouched: false,
        initialValue: "",
        value: "",
      },
      field: {
        value: "",
        checked: false,
        onChange: jest.fn(),
        onBlur: jest.fn(),
        multiple: undefined,
        name: "firstName",
      },
    };

    expect(
      shallow(
        <TextInput
          label="label"
          name="name"
          placeholder="placeholder"
          meta={mockProps.meta}
        />
      )
    ).toMatchSnapshot();
    expect(true).toBe(true);
  });
});
