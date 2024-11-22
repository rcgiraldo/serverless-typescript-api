"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeopleService = void 0;
class PeopleService {
    constructor(peopleRepository) {
        this.peopleRepository = peopleRepository;
    }
    async getAllPeople() {
        return this.peopleRepository.getAll();
    }
}
exports.PeopleService = PeopleService;
