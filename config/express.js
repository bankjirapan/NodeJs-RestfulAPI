import configApp from './config';
import fs from 'fs';

process.env.NODE_ENV = 'development';

const setupRoutes = (app) => {
    fs
    .readdirSync(__dirname + '/../app/routes/')
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        const route = require(__dirname + '/../app/routes/' + file)
        route.setup(app)
    })
}


const createApp =  {

    setup: () => {
 
        const app = express();


        if (process.env.NODE_ENV === 'development') {
            app.use(morgan('dev'));
        } else {
            app.use(compression());
        }



        app.use(cors());
        setupRoutes(app);



        app.use( (req, res) => {
            var json = { status: 'error', type: '404 NOT FOUND' };
            res.status(404);
            res.json(json);
        });

        app.listen(config.port, () => console.log('App listening on http://localhost:' + config.port));
    }


};

export default createApp;