/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../ib-subaccount-edit.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<ib-subaccount-edit></ib-subaccount-edit>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
