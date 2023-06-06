/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string} - The capitalized string.
 */
export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 * Reverses a string.
 * @param {string} str - The input string.
 * @returns {string} - The reversed string.
 */
export function reverse(str) {
    return str.split('').reverse().join('');
}
/**
 * Truncates a string to a specified length and appends an ellipsis if necessary.
 * @param {string} str - The input string.
 * @param {number} maxLength - The maximum length of the truncated string.
 * @returns {string} - The truncated string.
 */
export function truncate(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    }
    return str.slice(0, maxLength) + '...';
}
/**
 * Checks if a string starts with a specified substring.
 * @param {string} str - The input string.
 * @param {string} substring - The substring to check.
 * @returns {boolean} - Whether the string starts with the substring.
 */
export function startsWith(str, substring) {
    return str.startsWith(substring);
}
/**
 * Checks if a string ends with a specified substring.
 * @param {string} str - The input string.
 * @param {string} substring - The substring to check.
 * @returns {boolean} - Whether the string ends with the substring.
 */
export function endsWith(str, substring) {
    return str.endsWith(substring);
}
/**
 * Checks if a string contains a specified substring.
 * @param {string} str - The input string.
 * @param {string} substring - The substring to check.
 * @returns {boolean} - Whether the string contains the substring.
 */
export function contains(str, substring) {
    return str.includes(substring);
}
/**
 * Replaces all occurrences of a substring in a string with a new substring.
 * @param {string} str - The input string.
 * @param {string} searchValue - The substring to search for.
 * @param {string} replaceValue - The substring to replace with.
 * @returns {string} - The string with replaced substrings.
 */
export function replaceAll(str, searchValue, replaceValue) {
    return str.split(searchValue).join(replaceValue);
}
/**
 * Converts the first character of each word in a string to uppercase.
 * @param {string} str - The input string.
 * @returns {string} - The string with each word capitalized.
 */
export function capitalizeWords(str) {
    return str.replace(/\b\w/g, match => match.toUpperCase());
}
/**
 * Counts the number of occurrences of a substring in a string.
 * @param {string} str - The input string.
 * @param {string} substring - The substring to count.
 * @returns {number} - The number of occurrences of the substring.
 */
export function countOccurrences(str, substring) {
    const regex = new RegExp(substring, 'g');
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}
/**
 * Removes leading and trailing whitespace from a string.
 * @param {string} str - The input string.
 * @returns {string} - The string with leading and trailing whitespace removed.
 */
export function trim(str) {
    return str.trim();
}
/**
 * Checks if a string is empty (contains only whitespace).
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is empty.
 */
export function isEmpty(str) {
    return str.trim() === '';
}
/**
 * Checks if a string is a palindrome (reads the same forward and backward).
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a palindrome.
 */
export function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
/**
 * Converts a string to title case (each word starts with an uppercase letter).
 * @param {string} str - The input string.
 * @returns {string} - The string converted to title case.
 */
export function toTitleCase(str) {
    return str.replace(/\b\w/g, match => match.toUpperCase());
}
/**
 * Extracts the numbers from a string and returns them as an array.
 * @param {string} str - The input string.
 * @returns {number[]} - An array of numbers extracted from the string.
 */
export function extractNumbers(str) {
    const regex = /\d+/g;
    const matches = str.match(regex);
    return matches ? matches.map(Number) : [];
}
/**
 * Removes all whitespace from a string.
 * @param {string} str - The input string.
 * @returns {string} - The string with whitespace removed.
 */
export function removeWhitespace(str) {
    return str.replace(/\s/g, '');
}
/**
 * Converts a string to lowercase.
 * @param {string} str - The input string.
 * @returns {string} - The string converted to lowercase.
 */
export function toLowerCase(str) {
    return str.toLowerCase();
}
/**
 * Converts a string to uppercase.
 * @param {string} str - The input string.
 * @returns {string} - The string converted to uppercase.
 */
export function toUpperCase(str) {
    return str.toUpperCase();
}
/**
 * Checks if a string is a valid email address.
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a valid email address.
 */
export function isValidEmail(str) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(str);
}
/**
 * Reverses the order of words in a string.
 * @param {string} str - The input string.
 * @returns {string} - The string with reversed word order.
 */
export function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}
/**
 * Removes a specified substring from a string.
 * @param {string} str - The input string.
 * @param {string} substring - The substring to remove.
 * @returns {string} - The string with the substring removed.
 */
export function removeSubstring(str, substring) {
    return str.replace(substring, '');
}
/**
 * Checks if a string is a valid URL.
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a valid URL.
 */
export function isValidUrl(str) {
    const regex = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/;
    return regex.test(str);
}
/**
 * Checks if a string is a valid phone number.
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a valid phone number.
 */
export function isValidPhoneNumber(str) {
    const regex = /^\d{3}-\d{3}-\d{4}$/;
    return regex.test(str);
}
/**
 * Converts a string to kebab case (lowercase letters separated by hyphens).
 * @param {string} str - The input string.
 * @returns {string} - The string converted to kebab case.
 */
export function toKebabCase(str) {
    return str.replace(/\s+/g, '-').toLowerCase();
}
/**
 * Counts the number of words in a string.
 * @param {string} str - The input string.
 * @returns {number} - The number of words in the string.
 */
export function countWords(str) {
    const words = str.split(/\s+/);
    return words.length;
}
/**
 * Pads a string with a specified character to a specified length.
 * @param {string} str - The input string.
 * @param {number} length - The desired length of the padded string.
 * @param {string} char - The character used for padding.
 * @returns {string} - The padded string.
 */
export function padString(str, length, char) {
    if (str.length >= length) {
        return str;
    }
    const padding = char.repeat(length - str.length);
    return str + padding;
}
/**
 * Converts a string to snake case (lowercase letters separated by underscores).
 * @param {string} str - The input string.
 * @returns {string} - The string converted to snake case.
 */
export function toSnakeCase(str) {
    return str.replace(/\s+/g, '_').toLowerCase();
}
/**
 * Checks if a string is a valid password.
 * Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a valid password.
 */
export function isValidPassword(str) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(str);
}
/**
 * Converts a string to camel case (lowercase letters with the first letter of each subsequent word capitalized).
 * @param {string} str - The input string.
 * @returns {string} - The string converted to camel case.
 */
export function toCamelCase(str) {
    const words = str.split(/\s+/);
    const capitalizedWords = words.map((word, index) => {
        if (index === 0) {
            return word.toLowerCase();
        }
        return capitalize(word);
    });
    return capitalizedWords.join('');
}
/**
 * Removes all non-alphanumeric characters from a string.
 * @param {string} str - The input string.
 * @returns {string} - The string with non-alphanumeric characters removed.
 */
export function removeNonAlphanumeric(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
}
/**
 * Checks if a string is a valid username.
 * Username must be alphanumeric and can contain underscores and hyphens.
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a valid username.
 */
export function isValidUsername(str) {
    const regex = /^[a-zA-Z0-9_-]+$/;
    return regex.test(str);
}
/**
 * Splits a string into an array of substrings using a specified delimiter.
 * @param {string} str - The input string.
 * @param {string} delimiter - The delimiter used for splitting the string.
 * @returns {string[]} - An array of substrings.
 */
export function splitString(str, delimiter) {
    return str.split(delimiter);
}
/**
 * Checks if a string is a valid credit card number.
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a valid credit card number.
 */
export function isValidCreditCardNumber(str) {
    const regex = /^(?:\d{4}-){3}\d{4}$|^\d{16}$/;
    return regex.test(str);
}
/**
 * Removes duplicate characters from a string.
 * @param {string} str - The input string.
 * @returns {string} - The string with duplicate characters removed.
 */
export function removeDuplicates(str) {
    return Array.from(new Set(str)).join('');
}
/**
 * Converts a string to a slug (lowercase letters separated by hyphens).
 * @param {string} str - The input string.
 * @returns {string} - The string converted to a slug.
 */
export function toSlug(str) {
    return str.toLowerCase().replace(/\s+/g, '-');
}
/**
 * Checks if a string is a valid hexadecimal color code (e.g., #FFFFFF).
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a valid hexadecimal color code.
 */
export function isValidHexColor(str) {
    const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return regex.test(str);
}
/**
 * Masks a credit card number by replacing all but the last four digits with asterisks.
 * @param {string} str - The input string (credit card number).
 * @returns {string} - The masked credit card number.
 */
export function maskCreditCardNumber(str) {
    const lastFourDigits = str.slice(-4);
    const maskedDigits = '*'.repeat(str.length - 4);
    return maskedDigits + lastFourDigits;
}
/**
 * Generates a random alphanumeric string of a specified length.
 * @param {number} length - The desired length of the generated string.
 * @returns {string} - The randomly generated alphanumeric string.
 */
export function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}
/**
 * Checks if a string is a palindrome when only considering alphanumeric characters and ignoring case.
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a alphanumeric palindrome.
 */
export function isAlphanumericPalindrome(str) {
    const alphanumericStr = str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    return alphanumericStr === alphanumericStr.split('').reverse().join('');
}
