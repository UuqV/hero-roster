"use strict";

import "../mithril.js";
import { addADC, addAMarvel } from "../unsavedstate.js";

export const addhero = {
  oninit: function(vnode) {
    vnode.state.user = vnode.attrs.user;
  },

  view: function(vnode) {
    return m(
      ".Addbutton-container",
      m(
        ".Add-DC-button",
        {
          onclick: () => addADC(vnode.state.user.pk)
        },
        "Add DC"
      ),
      m(
        ".Add-Marvel-button",
        {
          onclick: () => addAMarvel(vnode.state.user.pk)
        },
        "Add Marvel"
      )
    );
  }
};
