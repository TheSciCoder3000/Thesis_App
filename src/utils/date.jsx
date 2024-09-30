export function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

export function convertToHtmlDate(date) {
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();

    return `${year}-${pad(month + 1, 2)}-${pad(day, 2)}`
}