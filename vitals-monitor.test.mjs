import { expect } from 'chai';
import { vitalsOk } from './vitals-monitor.mjs';

describe('vitals checker', function () {
  it('returns false when any vital is out of range ', async function () {
    expect(await vitalsOk(99, 102, 70)).to.be.false;
    expect(await vitalsOk(98.1, 70, 98)).to.be.true;
  });
});
