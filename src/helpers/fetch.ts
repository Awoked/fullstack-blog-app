async function fetchData(
    url: string,
    init?: RequestInit
) {
    try {
        const response = await fetch(`${process.env.API_URL + url}`, init);
        const data = await response.json();

        return {
            success: response.status === 200 ? true : false,
            data
        };
    } catch (error) {
        return {
            success: false,
            data: []
        }
    }
}

export default fetchData;