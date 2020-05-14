'use strict';

const { Router } = require('express');
const authenticationRouter = Router();

const passport = require('passport');

const routeGuard = require('./../middleware/route-guard');

authenticationRouter.get('/sign-up', (req, res, next) => {
  console.log('rota get sign up');
  res.render('authentication/sign-up');
});

authenticationRouter.post(
  '/sign-up',
  passport.authenticate('sign-up', {
    successRedirect: '/',
    failureRedirect: '/authentication/sign-up'
  })
);

authenticationRouter.get('/sign-in', (req, res, next) => {
  res.render('authentication/sign-in');
});

authenticationRouter.post(
  '/sign-in',
  passport.authenticate('sign-in', {
    successRedirect: '/',
    failureRedirect: '/authentication/sign-in'
  })
);

authenticationRouter.get('/private', routeGuard, (req, res, next) => {
  const userData = req.user;
  console.log('rota private', userData);
  res.render('authentication/private', {userData});
});


module.exports = authenticationRouter;
