export const post = (url, data) => {
    let formData = new FormData();
    for (const key in data) {
        formData.append(key, data[key]);
    }
    return fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.text())
        .then(result => console.log(result));
}