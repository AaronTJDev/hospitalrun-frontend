import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | sidebar nav', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders about link when settings are shown', async function(assert) {
    await render(hbs`{{sidebar-nav}}`);

    assert.equal(find('*').textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{sidebar-nav isShowingSettings=true}}
    `);

    assert.ok(find('*').textContent.trim().includes('About HospitalRun'));
  });

  test('it does NOT render about link when settings are NOT shown', async function(assert) {
    await render(hbs`{{sidebar-nav}}`);

    assert.equal(find('*').textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{sidebar-nav}}
    `);

    assert.notOk(find('*').textContent.trim().includes('About HospitalRun'));
  });
});
