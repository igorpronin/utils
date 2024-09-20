import { generate_word_id } from './utils';

describe('generate_word_id', () => {
  test('generates a 4-word ID by default', () => {
    const id = generate_word_id();
    expect(id.split('-').length).toBe(4);
  });

  test('generates an ID with the specified number of words', () => {
    const id = generate_word_id(3);
    expect(id.split('-').length).toBe(3);
  });

  test('generates unique words in each ID', () => {
    const id = generate_word_id();
    const words = id.split('-');
    const uniqueWords = new Set(words);
    expect(uniqueWords.size).toBe(words.length);
  });

  test('generates different IDs on subsequent calls', () => {
    const id1 = generate_word_id();
    const id2 = generate_word_id();
    expect(id1).not.toBe(id2);
  });

  test('throws an error when requesting more words than available', () => {
    expect(() => generate_word_id(51)).toThrow(Error);
  });

  test('generates ID with maximum available words', () => {
    const id = generate_word_id(50);
    expect(id.split('-').length).toBe(50);
  });

  test('generates ID with only lowercase words', () => {
    const id = generate_word_id();
    expect(id).toBe(id.toLowerCase());
  });

  test('generates ID with only allowed characters', () => {
    const id = generate_word_id();
    expect(id).toMatch(/^[a-z-]+$/);
  });
});
