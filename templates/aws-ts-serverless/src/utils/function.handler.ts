import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export type Middleware = (
    event: APIGatewayProxyEvent,
    next: () => Promise<any>
) => Promise<any>;

export const baseHandler = async (
    event: APIGatewayProxyEvent,
    init: (event: APIGatewayProxyEvent, context: any) => Promise<any>,
    middlewares: Middleware[] = []
): Promise<APIGatewayProxyResult> => {
    const request: APIGatewayProxyEvent | any = { ...event };
    const response: any = {};
    try {
        await middlewares.reduce((prev: any, middleware) => prev.then(() => middleware(request, prev)), Promise.resolve());
        if (typeof request.event.body === 'string' && request.body) {
            request.body = JSON.parse(request.body);
        }
        const result = await init(request, request.context);
        response.statusCode = 200;
        response.headers = {
            'Content-Type': 'application/json; charset=utf-8',
        };
        response.body = JSON.stringify({ data: result });
        return response;
    } catch (error) {
        response.statusCode = (error as any).statusCode || 500;
        response.body = JSON.stringify({ data: (error as any).message || 'An error occurred' });
        return response;
    }
};
