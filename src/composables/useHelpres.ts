export function useHelpers() {
    function formatDate(date: Date, locale = "pt-BR") {
        return new Intl.DateTimeFormat(locale).format(date);
    }

    function randomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return { formatDate, randomInt, capitalizeFirstLetter };
}
