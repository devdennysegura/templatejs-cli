import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event): Promise<APIGatewayProxyResult> => {
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
