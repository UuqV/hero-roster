"use strict";

import "../mithril.js";

export const userpage = {
  oninit: function(vnode) {
    vnode.state.user = vnode.attrs.user;
  },

  view: function(vnode) {
    return m(".user", vnode.state.user ? vnode.state.user.first_name : null);
  }
};
