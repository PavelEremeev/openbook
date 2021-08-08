class OpenLibraryApi {
    constructor({ address }) {
        this._address = address;
    }

    getDataList(searchWord) {
        return fetch(`${this._address}${searchWord}`)
            .then((res) =>
                res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
            );
    }
}

export const openLibraryApi = new OpenLibraryApi({
    address: 'http://openlibrary.org/search.json?title=',

});
