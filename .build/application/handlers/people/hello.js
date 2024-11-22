"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const main = async (event, context) => {
    console.log('Event received:', event);
    try {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Hello from TypeScript!',
            }),
        };
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error:', error.message);
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: 'Internal Server Error',
                    error: error.message,
                }),
            };
        }
        else {
            console.error('Unknown error:', error);
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: 'Internal Server Error',
                }),
            };
        }
    }
};
exports.main = main;
