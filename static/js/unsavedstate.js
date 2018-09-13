"use strict";

import "./stream.js";

//Current unsaved state
export var additionHeroes = m.stream([]);

export var subtractionHeroes = m.stream([]);

export const deleteFromAdditions = function(relationpk) {
  additionHeroes().splice(relationpk, 1);
};

//Delete from the user's relation list
export const relationToRemove = function(relationpk) {
  subtractionHeroes(subtractionHeroes().concat(relationpk));
};

export const addAMarvel = function(userpk) {
  return m
    .request({ url: "/heroes/random/", data: { universe: "Marvel" } })
    .then(result => {
      additionHeroes(additionHeroes().concat(result));
    });
};

export const addADC = function(userpk) {
  return m
    .request({ url: "/heroes/random/", data: { universe: "DC" } })
    .then(result => {
      additionHeroes(additionHeroes().concat(result));
    });
};

export const saveList = function(userpk) {
  return Promise.all([
    addHeroes(userpk, additionHeroes().map(hero => hero.pk)),
    deleteHeroes(userpk, subtractionHeroes())
  ]);
};

const addHeroes = function(userpk, relationpks) {
  return m.request({
    method: "PATCH",
    url: "/users/" + userpk + "/edit/",
    data: {
      add: relationpks
    }
  });
};

const deleteHeroes = function(userpk, relationpks) {
  return m.request({
    method: "PATCH",
    url: "/users/" + userpk + "/edit/",
    data: {
      remove: relationpks
    }
  });
};

export const clearList = function(userpk) {
  additionHeroes([]);
  subtractionHeroes([]);
};
