/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string} - The capitalized string.
 */
export declare function capitalize(str: string): string;
/**
 * Reverses a string.
 * @param {string} str - The input string.
 * @returns {string} - The reversed string.
 */
export declare function reverse(str: string): string;
/**
 * Truncates a string to a specified length and appends an ellipsis if necessary.
 * @param {string} str - The input string.
 * @param {number} maxLength - The maximum length of the truncated string.
 * @returns {string} - The truncated string.
 */
export declare function truncate(str: string, maxLength: number): string;
/**
 * Checks if a string starts with a specified substring.
 * @param {string} str - The input string.
 * @param {string} substring - The substring to check.
 * @returns {boolean} - Whether the string starts with the substring.
 */
export declare function startsWith(str: string, substring: string): boolean;
/**
 * Checks if a string ends with a specified substring.
 * @param {string} str - The input string.
 * @param {string} substring - The substring to check.
 * @returns {boolean} - Whether the string ends with the substring.
 */
export declare function endsWith(str: string, substring: string): boolean;
/**
 * Checks if a string contains a specified substring.
 * @param {string} str - The input string.
 * @param {string} substring - The substring to check.
 * @returns {boolean} - Whether the string contains the substring.
 */
export declare function contains(str: string, substring: string): boolean;
/**
 * Replaces all occurrences of a substring in a string with a new substring.
 * @param {string} str - The input string.
 * @param {string} searchValue - The substring to search for.
 * @param {string} replaceValue - The substring to replace with.
 * @returns {string} - The string with replaced substrings.
 */
export declare function replaceAll(str: string, searchValue: string, replaceValue: string): string;
/**
 * Converts the first character of each word in a string to uppercase.
 * @param {string} str - The input string.
 * @returns {string} - The string with each word capitalized.
 */
export declare function capitalizeWords(str: string): string;
/**
 * Counts the number of occurrences of a substring in a string.
 * @param {string} str - The input string.
 * @param {string} substring - The substring to count.
 * @returns {number} - The number of occurrences of the substring.
 */
export declare function countOccurrences(str: string, substring: string): number;
/**
 * Removes leading and trailing whitespace from a string.
 * @param {string} str - The input string.
 * @returns {string} - The string with leading and trailing whitespace removed.
 */
export declare function trim(str: string): string;
/**
 * Checks if a string is empty (contains only whitespace).
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is empty.
 */
export declare function isEmpty(str: string): boolean;
/**
 * Checks if a string is a palindrome (reads the same forward and backward).
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a palindrome.
 */
export declare function isPalindrome(str: string): boolean;
/**
 * Converts a string to title case (each word starts with an uppercase letter).
 * @param {string} str - The input string.
 * @returns {string} - The string converted to title case.
 */
export declare function toTitleCase(str: string): string;
/**
 * Extracts the numbers from a string and returns them as an array.
 * @param {string} str - The input string.
 * @returns {number[]} - An array of numbers extracted from the string.
 */
export declare function extractNumbers(str: string): number[];
/**
 * Removes all whitespace from a string.
 * @param {string} str - The input string.
 * @returns {string} - The string with whitespace removed.
 */
export declare function removeWhitespace(str: string): string;
/**
 * Converts a string to lowercase.
 * @param {string} str - The input string.
 * @returns {string} - The string converted to lowercase.
 */
export declare function toLowerCase(str: string): string;
/**
 * Converts a string to uppercase.
 * @param {string} str - The input string.
 * @returns {string} - The string converted to uppercase.
 */
export declare function toUpperCase(str: string): string;
/**
 * Checks if a string is a valid email address.
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a valid email address.
 */
export declare function isValidEmail(str: string): boolean;
/**
 * Reverses the order of words in a string.
 * @param {string} str - The input string.
 * @returns {string} - The string with reversed word order.
 */
export declare function reverseWords(str: string): string;
/**
 * Removes a specified substring from a string.
 * @param {string} str - The input string.
 * @param {string} substring - The substring to remove.
 * @returns {string} - The string with the substring removed.
 */
export declare function removeSubstring(str: string, substring: string): string;
/**
 * Checks if a string is a valid URL.
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a valid URL.
 */
export declare function isValidUrl(str: string): boolean;
/**
 * Checks if a string is a valid phone number.
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a valid phone number.
 */
export declare function isValidPhoneNumber(str: string): boolean;
/**
 * Converts a string to kebab case (lowercase letters separated by hyphens).
 * @param {string} str - The input string.
 * @returns {string} - The string converted to kebab case.
 */
export declare function toKebabCase(str: string): string;
/**
 * Counts the number of words in a string.
 * @param {string} str - The input string.
 * @returns {number} - The number of words in the string.
 */
export declare function countWords(str: string): number;
/**
 * Pads a string with a specified character to a specified length.
 * @param {string} str - The input string.
 * @param {number} length - The desired length of the padded string.
 * @param {string} char - The character used for padding.
 * @returns {string} - The padded string.
 */
export declare function padString(str: string, length: number, char: string): string;
/**
 * Converts a string to snake case (lowercase letters separated by underscores).
 * @param {string} str - The input string.
 * @returns {string} - The string converted to snake case.
 */
export declare function toSnakeCase(str: string): string;
/**
 * Checks if a string is a valid password.
 * Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a valid password.
 */
export declare function isValidPassword(str: string): boolean;
/**
 * Converts a string to camel case (lowercase letters with the first letter of each subsequent word capitalized).
 * @param {string} str - The input string.
 * @returns {string} - The string converted to camel case.
 */
export declare function toCamelCase(str: string): string;
/**
 * Removes all non-alphanumeric characters from a string.
 * @param {string} str - The input string.
 * @returns {string} - The string with non-alphanumeric characters removed.
 */
export declare function removeNonAlphanumeric(str: string): string;
/**
 * Checks if a string is a valid username.
 * Username must be alphanumeric and can contain underscores and hyphens.
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a valid username.
 */
export declare function isValidUsername(str: string): boolean;
/**
 * Splits a string into an array of substrings using a specified delimiter.
 * @param {string} str - The input string.
 * @param {string} delimiter - The delimiter used for splitting the string.
 * @returns {string[]} - An array of substrings.
 */
export declare function splitString(str: string, delimiter: string): string[];
/**
 * Checks if a string is a valid credit card number.
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a valid credit card number.
 */
export declare function isValidCreditCardNumber(str: string): boolean;
/**
 * Removes duplicate characters from a string.
 * @param {string} str - The input string.
 * @returns {string} - The string with duplicate characters removed.
 */
export declare function removeDuplicates(str: string): string;
/**
 * Converts a string to a slug (lowercase letters separated by hyphens).
 * @param {string} str - The input string.
 * @returns {string} - The string converted to a slug.
 */
export declare function toSlug(str: string): string;
/**
 * Checks if a string is a valid hexadecimal color code (e.g., #FFFFFF).
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a valid hexadecimal color code.
 */
export declare function isValidHexColor(str: string): boolean;
/**
 * Masks a credit card number by replacing all but the last four digits with asterisks.
 * @param {string} str - The input string (credit card number).
 * @returns {string} - The masked credit card number.
 */
export declare function maskCreditCardNumber(str: string): string;
/**
 * Generates a random alphanumeric string of a specified length.
 * @param {number} length - The desired length of the generated string.
 * @returns {string} - The randomly generated alphanumeric string.
 */
export declare function generateRandomString(length: number): string;
/**
 * Checks if a string is a palindrome when only considering alphanumeric characters and ignoring case.
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a alphanumeric palindrome.
 */
export declare function isAlphanumericPalindrome(str: string): boolean;
