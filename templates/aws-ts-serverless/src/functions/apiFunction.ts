import { APIGatewayProxyHandler } from 'aws-lambda';
import axios from 'axios';

export const handler: APIGatewayProxyHandler = async (event) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error al llamar a la API externa' }),
        };
    }
};
