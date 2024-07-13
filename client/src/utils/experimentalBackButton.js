export default function isBackButtonClicked(e) {
    const beforeElementWidth = 100;
    const beforeElementHeight = 35;

    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - beforeElementHeight;
    const offsetY = e.clientY - rect.top + beforeElementHeight;

    if (offsetX < beforeElementWidth && offsetY < beforeElementHeight) {
        return true;
    }

    return false;
}