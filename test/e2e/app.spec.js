const express = require('express');
const expect = require('chai').expect;
const path = require('path');
const Nightmare = require('nightmare');

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../dist')));

const url = 'http://localhost:8888';

const nightmare = new Nightmare();

describe('End to End Tests', () => {
  let httpServer = null;
  let pageObject = null;

  before((done) => {
    httpServer = app.listen(8888);
    done();
  });

  beforeEach(() => {
    pageObject = nightmare.goto(url);
  });

  after((done) => {
    httpServer.close();
    done();
  });

  it('should contain a <h1> element for the page title', () => { 
    return pageObject
      .evaluate(() => document.querySelector('h1').innerText)
      .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal('Mortgage Calculator');
      });
  });

  it('should contain a input element for principal', () => { 
    return pageObject
      .evaluate(() => document.querySelector('input').name)
      .then(name => {
        expect(name).to.not.be.null;
        expect(name).to.equal('principal');
      });
  });

  it('should contain an option value of 12', () => { 
    return pageObject
      .evaluate(() => document.querySelector('option').value)
      .then(value => {
        expect(value).to.not.be.null;
        expect(value).to.equal('12');
      });
  });

  it('should contain a button named calculate', () => { 
    return pageObject
      .evaluate(() => document.querySelector('button').name)
      .then(name => {
        expect(name).to.not.be.null;
        expect(name).to.equal('calculate');
      });
  });


})