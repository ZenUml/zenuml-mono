/**
 * Capitalizes the input text
 * @param text Text to capitalize
 */
export function capitalize (text) {
  if (text) {
    return text[0].toUpperCase() + text.substr(1)
  }
}
