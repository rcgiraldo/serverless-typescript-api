"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeopleRepository = void 0;
const aws_sdk_1 = require("aws-sdk");
const dynamoDB = new aws_sdk_1.DynamoDB.DocumentClient();
const TABLE_NAME = 'People';
class PeopleRepository {
    async getAll() {
        const params = {
            TableName: TABLE_NAME,
        };
        try {
            const result = await dynamoDB.scan(params).promise();
            return result.Items;
        }
        catch (error) {
            console.error('Error fetching people:', error);
            throw new Error('Error fetching people');
        }
    }
}
exports.PeopleRepository = PeopleRepository;
