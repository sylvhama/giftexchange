module.exports = {
  'Test main view' : function (client) {
    client
      .url('https://giftexchange.shamann.fr/')
      .waitForElementVisible('body', 2000)
      .waitForElementVisible('.card', 2000)
      .assert.title('Gift Exchange')
      .assert.visible('input.main-name')
      .setValue('input.main-name', 'Sylvain Hamann')
      .waitForElementVisible('button[type=submit]', 2000)
      .click('button[type=submit]')
      .pause(2000)
      .assert.containsText('input.main-name','')
      .end();
  },
  'Test admin view' : function (client) {
    client
      .url('https://giftexchange.shamann.fr/admin')
      .waitForElementVisible('body', 2000)
      .waitForElementVisible('.card', 2000)
      .assert.title('Admin - Gift Exchange')
      .assert.visible('button')
      .end();
  },
  'Test 404 view' : function (client) {
    client
      .url('https://giftexchange.shamann.fr/test404')
      .waitForElementVisible('body', 2000)
      .assert.title('Page not found - Gift Exchange')
      .assert.containsText('h2','Page not found - Gift Exchange')
      .end();
  }
};