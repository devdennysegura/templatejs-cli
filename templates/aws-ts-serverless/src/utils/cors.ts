const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET, DELETE',
};

const setCorsHeaders = (response) => {
    if (response) {
        response.headers = {
            ...response.headers,
            ...corsHeaders,
        };
    }
};

const handleCors = (request, next): any => {
    if (request.method === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: corsHeaders,
        };
    }
    next();
};
export { setCorsHeaders, handleCors };