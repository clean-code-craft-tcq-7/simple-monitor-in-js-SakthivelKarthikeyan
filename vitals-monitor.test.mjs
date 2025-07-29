import { expect } from "chai";
import { vitalsOk } from "./vitals-monitor.mjs";

describe("vitals checker", function () {
  it("returns false when any vital is out of range ", async function () {
    expect(await vitalsOk(99, 102, 70)).to.be.false;
    expect(await vitalsOk(98.1, 70, 98)).to.be.true;
  });

  it("returns false when temperature is too high", async function () {
    expect(await vitalsOk(103, 80, 95)).to.be.false;
  });

  it("returns false when temperature is too low", async function () {
    expect(await vitalsOk(94, 80, 95)).to.be.false;
  });

  it("returns false when pulse rate is too low", async function () {
    expect(await vitalsOk(98, 59, 95)).to.be.false;
  });

  it("returns false when pulse rate is too high", async function () {
    expect(await vitalsOk(98, 101, 95)).to.be.false;
  });

  it("returns false when spo2 is too low", async function () {
    expect(await vitalsOk(98, 80, 89)).to.be.false;
  });

  it("returns true when all vitals are at lower boundary", async function () {
    expect(await vitalsOk(95, 60, 90)).to.be.true;
  });

  it("returns true when all vitals are at upper boundary", async function () {
    expect(await vitalsOk(102, 100, 100)).to.be.true;
  });

  it("returns true for typical healthy values", async function () {
    expect(await vitalsOk(98.6, 72, 98)).to.be.true;
  });
});
