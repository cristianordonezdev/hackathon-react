export function isEmail(value) {
  if (value && value.length > 0) return value.includes('@');
  return false
}

export function isNotEmpty(value) {
  return value.trim() !== '';
}

export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export function isEqualsToOtherValue(value, otherValue) {
  return value === otherValue;
}