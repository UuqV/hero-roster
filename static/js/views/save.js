"use strict";

import "../mithril.js";
import { clearList, saveList } from "../unsavedstate.js";

export const savecancel = {
  oninit: function(vnode) {
    vnode.state.user = vnode.attrs.user;
  },

  view: function(vnode) {
    return m(
      ".Addbutton-container",
      m(
        ".Add-Marvel-button",
        {
          onclick: () => clearList(vnode.state.user.pk)
        },
        "Cancel"
      ),
      m(
        ".Add-DC-button",
        {
          onclick: () => saveList(vnode.state.user.pk)
        },
        "Save"
      )
    );
  }
};
