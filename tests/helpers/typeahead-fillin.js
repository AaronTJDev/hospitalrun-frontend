import { fillIn, blur, triggerEvent } from '@ember/test-helpers';
async function typeAheadFillIn(selector, value) {
  let typeAheadSelector = `${selector} .tt-input`;
  await fillIn(typeAheadSelector, value);
  await triggerEvent(typeAheadSelector, 'input');
  await await blur(typeAheadSelector);
}

export default typeAheadFillIn;
