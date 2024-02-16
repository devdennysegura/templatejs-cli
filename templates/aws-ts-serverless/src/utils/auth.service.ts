import { Tokenizador } from './jwtTokenizer';

export class AuthService {
    private readonly tokenizer: Tokenizador;

    constructor() {
        this.tokenizer = new Tokenizador();
    }

    async verifyToken(token: string): Promise<any> {
        return await this.tokenizer.verify(token);
    }
}
