import jwt from 'jsonwebtoken';

export class Tokenizador {
    private readonly publicKey: string;
    private readonly privateKey: string;
    private readonly signOptions: jwt.SignOptions;

    constructor() {
        this.publicKey = process.env.JWT_PUBLIC_KEY!;
        this.privateKey = process.env.JWT_PRIVATE_KEY!;
        this.signOptions = {
            algorithm: process.env.JWT_ALGORITHM,
            expiresIn: process.env.JWT_ACCESS_TOKEN_LIFETIME!,
            issuer: process.env.JWT_ISSUER!,
        };
    }

    generate(payload: { [key: string]: any }): string {
        return jwt.sign(payload, this.privateKey, this.signOptions);
    }

    verify(token: string): { [key: string]: any } | null {
        try {
            const payload = jwt.verify(token, this.publicKey) as jwt.JwtPayload;
            console.log(payload);
            return {
                ...payload
            };
        } catch (error) {
            return null;
        }
    }
}
