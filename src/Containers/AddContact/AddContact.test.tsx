import AddContact from "./AddContact";
import React from "react";
import * as Adapter from "../../../setupTests";
import { shallow } from "enzyme";
import TextInput from "../../Components/TextInput/TextInput";
const adapter = Adapter;

describe("<AddContact/> statefull component", () => {
  it("should match Snapshot", function () {
    expect(shallow(<AddContact />)).toMatchSnapshot();
  });
});
