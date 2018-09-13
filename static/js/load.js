"use strict";

import "./stream.js";

export var currentUser = m.stream();

export var userHeroes = m.stream([]);

export var heroData = m.stream();

export const loadUser = function() {
  return m.request("/users/").then(user => {
    console.log(user[0].relations);
    return loadHeroes(user[0].relations).then(() => {
      return currentUser(user[0]);
    });
  });
};

export const loadHeroes = function(relations) {
  return Promise.all(
    relations.map(relationContent => {
      return m.request("/heroes/" + relationContent.hero + "/").then(hero => {
        return {
          pk: relationContent.pk,
          hero: hero
        };
      });
    })
  ).then(heroes => heroData(heroes));
};

export const loadHero = function(pk) {
  return m.request("/heroes/" + pk + "/");
};
