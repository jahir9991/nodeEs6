import express from 'express';
import {Helper} from '../libs';
import {productController as controller} from '../controllers';

const Routes = express.Router();
const routeName = 'products';

export const productRoutes = Routes;

Routes.use([`/${routeName}`], (req, res, next) => {

    Helper.logger.info(`a ${req.method} request in ${routeName} route.`);
    next();

});

Helper.restApiPlaceHolder(Routes, controller, routeName);
