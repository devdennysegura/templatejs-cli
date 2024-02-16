import { AuthService } from "./auth.service";
import { Middleware } from "./function.handler";

const authMiddleware: Middleware = async (request: any, next) => {
    const authService = new AuthService();
    const token = request.headers.authorization?.split(' ')[1];
    if (!token) {
        throw new Error('Unauthorized: Missing token');
    }
    try {
        const decoded = authService.verifyToken(token);
        request.user = decoded;
        next();
    } catch (error) {
        throw new Error('Unauthorized: Invalid token');
    }
};

export default authMiddleware;