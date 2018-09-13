"use strict";

import "../mithril.js";
import { userpage } from "./username.js";
import { addhero } from "./addhero.js";
import { herolist } from "./herolist.js";
import { savecancel } from "./save.js";
import { loadUser, currentUser } from "../load.js";

let page = {
  oninit: function(vnode) {
    loadUser().then(user => {
      vnode.state.user = user;
    });
  },

  view: function(vnode) {
    return vnode.state.user
      ? [
          m(userpage, { user: vnode.state.user }),
          m(
            "div",

            [
              m(addhero, { user: vnode.state.user }),
              m(herolist, { user: vnode.state.user }),
              m(savecancel, { user: vnode.state.user })
            ]
          )
        ]
      : null;
  }
};

m.mount(document.body, page);
