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

export const remove_element_by_value = (arr: any[], value_to_remove: any): any[] => {
  return arr.filter(element => element !== value_to_remove);
}
