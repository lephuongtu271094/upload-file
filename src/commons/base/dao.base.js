/**
 * @file dao.base.js
 * In an application the Data Access Object (DAO) is a part of Data access layer. It is an object
 * that provides an interface to some type of persistence mechanism. By mapping application calls
 * to the persistence layer, DAO provides some specific data operations without exposing details
 * of the database. This isolation supports the Single responsibility principle. It separates what
 * data accesses the application needs, in terms of domain-specific objects and data types
 * (the public interface of the DAO), from how these needs can be satisfied with a specific DBMS,
 * database schema, etc.
 *
 * ref: https://www.tutorialspoint.com/design_pattern/data_access_object_pattern.htm
 */

class BaseDAO {
    constructor(schema) {
        this.Schema = schema;
    }

    getRecordById(id) {
        return this.Schema.findById(id);
    }

    updateRecordById(_id, data) {
        return this.Schema.updateOne({ _id }, data);
    }

    deleteRecordById(id) {
        return this.Schema.findByIdAndDelete(id);
    }

    deleteManyRecord(data) {
        return this.Schema.deleteMany(data);
    }

    async insertRecord(recordData) {
        const record = new this.Schema(recordData);
        await record.save();

        return record;
    }

    updateRecord(record) {
        return record.save();
    }

    getRawRecordById(id) {
        return this.Schema.findById(id);
    }

    async getRawRecordsByIds(ids) {
        const conditions = {
            _id: {
                $in: ids
            }
        };

        const records = await this.Schema.find(conditions);

        return records;
    }

    countRecords(conditions) {
        return this.Schema.countDocuments(conditions);
    }
}

export default BaseDAO;
