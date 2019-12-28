/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../ib-subaccount-table.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<ib-subaccount-table></ib-subaccount-table>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
