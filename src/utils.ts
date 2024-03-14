export const is_value_in_enum = (value: any, enum_type: any): boolean => {
  return Object.keys(enum_type).some(key => enum_type[key] === value);
}
