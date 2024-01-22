const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      // expect.fail("replace with your code");
      const myWord = 'purpose';
      const wordInstance = new Word(myWord);

      expect(wordInstance.word).to.exist;
    });

    it('should set the "word" property when a new word is created', function () {
      // expect.fail("replace with your code");
      const myWord = 'purpose';
      const wordInstance = new Word(myWord);

      expect(wordInstance.word).to.equal(myWord);
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      // expect.fail("replace with your code");
      const myWord = 'purpose';
      const wordInstance = new Word(myWord);

      const actual = wordInstance.removeVowels();
      const expected = 'prps';

      expect(actual).to.equal(expected);
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      // expect.fail("replace with your code");
      const myWord = 'purpose';
      const wordInstance = new Word(myWord);

      const actual = wordInstance.removeConsonants();
      const expected = 'uoe';
      expect(actual).to.equal(expected);
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      // expect.fail("replace with your code");
      const myWord = 'purpose';
      const wordInstance = new Word(myWord);

      const actual = wordInstance.pigLatin();
      const expected = 'urposepay';
      expect(actual).to.equal(expected);
    });
  });
});
