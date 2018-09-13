"use strict";

import "../mithril.js";
import "../stream.js";
import { heroData, userHeroes, loadHeroes } from "../load.js";

import {
  deleteFromAdditions,
  relationToRemove,
  additionHeroes,
  subtractionHeroes
} from "../unsavedstate.js";

export const herolist = {
  oninit: function(vnode) {
    vnode.state.user = vnode.attrs.user;
    //loadHeroes(vnode.state.user.relations);
  },

  view: function(vnode) {
    return m(
      ".Hero-grid",
      heroData()
        ? m(
            ".Hero-button-container",
            heroData()
              .filter(e => !subtractionHeroes().find(s => s === e.pk))
              .map((data, i) => {
                return m(".Hero-button", [
                  m(
                    data.hero.universe.name === "Marvel"
                      ? ".Marvel-name"
                      : ".DC-name",
                    data.hero.name
                  ),
                  m(
                    data.hero.universe.name === "Marvel"
                      ? ".Delete-Marvel-button"
                      : ".Delete-DC-button",
                    {
                      onclick: () => relationToRemove(data.pk)
                    },
                    "x"
                  )
                ]);
              }),
            additionHeroes().map((hero, i) => {
              console.log(i);
              return m(
                ".Hero-button",
                m(
                  hero.universe.name === "Marvel" ? ".Marvel-name" : ".DC-name",
                  hero.name
                ),
                m(
                  hero.universe.name === "Marvel"
                    ? ".Delete-Marvel-button"
                    : ".Delete-DC-button",
                  {
                    onclick: () => deleteFromAdditions(i)
                  },
                  "x"
                )
              );
            })
          )
        : {}
    );
  }
};
