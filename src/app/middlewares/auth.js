import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

function authMiddleware(req, res, next) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).json({ error: 'Token not provided!' });
    }

    const token = authToken.split(' ').at(1);
  //const [_, token] = authToken.split (' ');

    try {
        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if (err) {
                throw new Error();
            } 
            req.userId = decoded.id;
            req.userName = decoded.name;
        });

    } catch {
        return res.status(401).json({ error: 'Token is invalid!' })
    }

    return next(); //Next --> Poder de parar e executar o fluxo da aplicação;
};

export default authMiddleware;