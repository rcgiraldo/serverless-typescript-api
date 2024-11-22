"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPeople = void 0;
const PeopleRepository_1 = require("../../../infraestructure/repositories/PeopleRepository");
const PeopleService_1 = require("../../services/PeopleService");
const peopleRepository = new PeopleRepository_1.PeopleRepository();
const peopleService = new PeopleService_1.PeopleService(peopleRepository);
const getAllPeople = async (event, context) => {
    try {
        const people = await peopleService.getAllPeople();
        return {
            statusCode: 200,
            body: JSON.stringify(people),
        };
    }
    catch (error) {
        console.error('Error getting people:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error fetching people from database' }),
        };
    }
};
exports.getAllPeople = getAllPeople;
