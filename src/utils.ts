export const is_value_in_enum = (value: any, enum_type: any): boolean => {
  return Object.keys(enum_type).some(key => enum_type[key] === value);
}

export const generate_random_id = (): string => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  function get_random_char(characters: string): string {
    const random_index = Math.floor(Math.random() * characters.length);
    return characters[random_index];
  }

  let id = get_random_char(alphabet);

  for (let i = 0; i < 9; i++) {
    id += get_random_char(alphanumeric);
  }

  return id;
}

export const remove_elements_and_create_new_arr = (arr: any[], value_to_remove: any): any[] => {
  return arr.filter(element => element !== value_to_remove);
}

export const remove_elements_from_existing_array = (arr: any, value_to_remove: any): void => {
  // Loop through the array backwards
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === value_to_remove) {
      // Remove the element if it matches the value to remove
      arr.splice(i, 1);
    }
  }
}

export const generate_word_id = (wordCount: number = 4): string => {
  const wordList = [
    'cat', 'dog', 'fish', 'bird', 'tree', 'flower', 'sun', 'moon', 'star', 'cloud',
    'river', 'mountain', 'ocean', 'forest', 'desert', 'island', 'city', 'village', 'house', 'car',
    'book', 'pen', 'computer', 'phone', 'table', 'chair', 'window', 'door', 'road', 'bridge',
    'shoe', 'hat', 'shirt', 'pants', 'cup', 'plate', 'fork', 'spoon', 'knife', 'bed',
    'pillow', 'blanket', 'clock', 'watch', 'camera', 'music', 'song', 'dance', 'paint', 'color'
  ];

  if (wordCount > wordList.length) {
    throw new Error(`Cannot generate ID with ${wordCount} unique words. Maximum is ${wordList.length}.`);
  }

  const shuffled = [...wordList].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, wordCount).join('-');
}


