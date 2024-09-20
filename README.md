# Utility Functions

This project contains a set of utility functions to help with common programming tasks. These functions are exported from `src/utils.ts`.

## Functions

### `is_value_in_enum(value: any, enum_type: any): boolean`

Checks if a given value exists in an enum.

- `value`: The value to check.
- `enum_type`: The enum to search in.
- Returns: `true` if the value is in the enum, `false` otherwise.

### `generate_random_id(): string`

Generates a random 10-character alphanumeric ID.

- Returns: A string starting with a letter, followed by 9 alphanumeric characters.

### `remove_elements_and_create_new_arr(arr: any[], value_to_remove: any): any[]`

Creates a new array with all elements that are not equal to the specified value.

- `arr`: The original array.
- `value_to_remove`: The value to exclude from the new array.
- Returns: A new array without the specified value.

### `remove_elements_from_existing_array(arr: any, valueToRemove: any): void`

Removes all occurrences of a specified value from an existing array.

- `arr`: The array to modify.
- `value_to_remove`: The value to remove from the array.
- Note: This function modifies the original array in place.

### `generate_word_id(word_count: number = 4): string`

Generates a random ID using real English words.

- `word_count`: Optional. The number of words to use in the ID. Defaults to 4.
- Returns: A string of random words joined by hyphens.
- Note: Throws an error if `word_count` exceeds the number of available unique words.

## Usage

To use these functions in your project, import them from the utils or index file:

```typescript
import { 
  is_value_in_enum, 
  generate_random_id, 
  remove_elements_and_create_new_arr, 
  remove_elements_from_existing_array 
} from '@igorpronin/utils';
```

