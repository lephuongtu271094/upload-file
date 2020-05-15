/**
 * Class return data paging for list data
 * @returns:
 * "data": {
 *      "items": Array,
 *      "_prevOffset": eq items length - 1, default is null,
 *      "_nextOffset": eq items length + 1, default is null,
 *      "_totalCount": Number of null
 *  }
 */
class PagedData {
    constructor(items, totalCount, offset) {
        if (items && items.length) {
            this.items = items;
            this._prevOffset = offset - 1 || null;
            if (this._prevOffset === null) {
                this._nextOffset = totalCount > this._prevOffset + items.length ? this._prevOffset + items.length : null;
            } else {
                this._nextOffset = totalCount > this._prevOffset + items.length + 1 ? this._prevOffset + items.length + 1 : null;
            }
        } else {
            this.items = [];
            this._prevOffset = null;
            this._nextOffset = null;
        }
        this._totalCount = totalCount;
    }
}

export default PagedData;
