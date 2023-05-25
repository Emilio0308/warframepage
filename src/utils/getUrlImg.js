export const getUrl = (url) => {
    const extension = ".png";
    const urlWithoutQueryParams = url?.split(extension)[0] + extension;
    return {
        urlWithoutQueryParams
    }
}