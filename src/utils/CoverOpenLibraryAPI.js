class CoverOpenLibraryApi {
    constructor({ address }) {
        this._address = address;
    }

    getCoverList(searchCover) {
        return fetch(`${this._address}${searchCover}`)
            .then((res) =>
                res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
            );
    }
}

export const coverOpenLibraryApi = new CoverOpenLibraryApi({
    address: 'http://covers.openlibrary.org/b/',

});
