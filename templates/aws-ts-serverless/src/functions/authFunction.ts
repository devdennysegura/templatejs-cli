import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import authMiddleware from '../utils/auth.middleware';
import { handleCors } from '../utils/cors';
import { baseHandler } from '../utils/function.handler';

const init = async (_): Promise<APIGatewayProxyResult> => {
    try {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'HELLO YOU ARE MY FRIEND!!!' }),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: 'An error occured',
        };
    }
};
export const handler = async (event: APIGatewayProxyEvent) => {
    return await baseHandler(event, init, [authMiddleware, handleCors]);
};
