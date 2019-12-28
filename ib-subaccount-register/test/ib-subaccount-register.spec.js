/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../ib-subaccount-register.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<ib-subaccount-register></ib-subaccount-register>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
