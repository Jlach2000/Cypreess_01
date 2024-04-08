describe('httpbin tests 1', () => {
    it('response code should be 200', () => {
      cy.request('https://httpbin.org').then(response => {
        const status = response.status;
  
        assert.equal(200, status);
      })
    })
  })
  describe('httpbin tests 2', () => {
    const request = {
      method: 'POST',
      url: 'https://httpbin.org/post',
      failOnStatusCode: false
    };
  
    it('response code should be 200', () => {
      cy.request(request).then(response => {
        assert.equal(200, response.status);
      })
    })
  })
  describe('httpbin tests 3', () => {
    const request = {
      url: 'https://httpbin.org/get',
      qs: {
        "key": "value"
      },
    };
  
    it('response code should be 200', () => {
      cy.request(request).then(response => {
        assert.equal("value", response.body.args.key);
      })
    })
  });
  describe('httpbin tests 4', () => {
    const request = {
      method: 'GET',
      url: 'https://httpbin.org/headers',
      headers: {
        'user-agent': 'My test user-agent'
      },
    };
  
    it('test that user-agent set correctly', () => {
      cy.request(request).then(response => {
        assert.equal(200, response.status);
        assert.equal("My test user-agent", response.requestHeaders['user-agent']);
      })
    })
  });
  describe('httpbin tests 5', () => {
  
    const request = {
      method: 'GET',
      url: 'https://httpbin.org/headers',
      headers: {
        'Cookie': 'cookieName=cookieValue'
      },
    };
  
    it('test send cookie', () => {
      cy.request(request).then(response => {
        assert.equal(200, response.status);
        assert.equal("cookieName=cookieValue", response.requestHeaders['Cookie']);
      })
    })
  });

  describe('httpbin tests 6', () => {
  
    const basicAuthRequest = {
      method: 'GET',
      url: 'https://httpbin.org/basic-auth/{user}/{passwd}',
      auth: {
        username: '{user}',
        password: '{passwd}'
      },
    };
  
    it('Should authenticate using HTTP Basic Auth', () => {
      cy.request(basicAuthRequest).then(response => {
        assert.equal(200, response.status);
      })
    })
});
describe('httpbin tests 7', () => {
  
const bearerAuthRequest = {
    method: 'GET',
    url: 'https://httpbin.org/bearer',
    headers: {
      Authorization: 'Bearer {token}'
    },
  };

  it('Should authenticate using Bearer Authentication', () => {
    cy.request(bearerAuthRequest).then(response => {
      assert.equal(200, response.status);
    })
  })
});

describe('httpbin tests 8', () => {
  
        it('Should return a simple image based on Accept header', () => {
          cy.request({
            method: 'GET',
            url: 'https://httpbin.org/image',
            headers: {
              'Accept': 'image/*'
            },
          }).then(response => {
            assert.equal(200, response.status);
          })
        })
    });

    describe('httpbin tests 9', () => {
        it('Should return a simple JPEG image', () => {
            cy.request({
              method: 'GET',
              url: 'https://httpbin.org/image/jpeg',
            }).then(response => {
              assert.equal(200, response.status);
            
            })
          })
        });
 describe('httpbin tests 10', () => {

    it('Should return a simple PNG image', () => {
        cy.request({
          method: 'GET',
          url: 'https://httpbin.org/image/png',
        }).then(response => {
          assert.equal(200, response.status);
        
        })
      })
    });