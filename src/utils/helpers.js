export function capitalizeWords(string) {
    return string.replace(/\b(\w)/g, s => s.toUpperCase());
}
