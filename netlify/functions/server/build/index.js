var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/jakepepple/pharoah-god-mob/pgm-landing/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());

// app/styles/root.css
var root_default = "/build/_assets/root-2BOTZCX3.css";

// route-module:/Users/jakepepple/pharoah-god-mob/pgm-landing/app/root.jsx
function meta() {
  return { title: "New Remix App" };
}
var links = () => {
  return [
    {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
      rel: "stylesheet",
      integrity: "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
      crossOrigin: "anyonymous"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    },
    {
      rel: "stylesheet",
      href: root_default
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), false, /* @__PURE__ */ React.createElement("script", {
    src: "https:/cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
    integrity: "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p",
    crossOrigin: "anonymous"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "https://kit.fontawesome.com/791d156385.js",
    crossOrigin: "anonymous"
  })));
}

// route-module:/Users/jakepepple/pharoah-god-mob/pgm-landing/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();

// app/assets/logo.png
var logo_default = "/build/_assets/logo-YWPIQDAA.png";

// route-module:/Users/jakepepple/pharoah-god-mob/pgm-landing/app/routes/index.jsx
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "common-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-5 mb-lg-0 row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-4 col-12 offset-lg-4"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "img-fluid d-block mx-auto custom-logo pt-4",
    src: logo_default,
    alt: "pgm header logo",
    width: "300px",
    height: "300px"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "px-0 col-12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-4 mb-lg-5 container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-0 col-12"
  })))), /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", justifyContent: "center" }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "welcome pt-lg-4 row"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "common-title mb-3 text-center"
  }, "WELCOME TO", /* @__PURE__ */ React.createElement("br", null), "PGM"), /* @__PURE__ */ React.createElement("button", {
    className: "bayc-button mb-4 w-100",
    type: "button",
    onClick: () => window.location.href = "/home"
  }, "ENTER"))))));
}

// route-module:/Users/jakepepple/pharoah-god-mob/pgm-landing/app/routes/home.jsx
var home_exports = {};
__export(home_exports, {
  default: () => Home
});
init_react();

// app/components/Navbar.jsx
init_react();
var import_react = __toModule(require("react"));
var Navbar = () => {
  return /* @__PURE__ */ import_react.default.createElement("nav", {
    id: "nav",
    className: "navbar navbar-expand-md navbar-light sticky-top"
  }, /* @__PURE__ */ import_react.default.createElement("a", {
    href: "#/",
    id: "pgm-brand",
    className: "navbar-brand"
  }, /* @__PURE__ */ import_react.default.createElement("img", {
    src: logo_default,
    className: "d-inline-block align-top",
    alt: "pgm logo",
    height: "75px",
    width: "auto"
  })), /* @__PURE__ */ import_react.default.createElement("button", {
    "aria-controls": "responsive-navbar-nav",
    id: "nav-toggle",
    type: "button",
    "aria-label": "Toggle navigation",
    className: "navbar-dark navbar-toggler",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarToggler"
  }, /* @__PURE__ */ import_react.default.createElement("span", {
    className: "navbar-toggler-icon"
  })), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarToggler",
    style: { justifyContent: "space-between" }
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "navbar-nav",
    id: "nav-bar"
  }, /* @__PURE__ */ import_react.default.createElement("a", {
    id: "nav-link",
    title: "BUY AN APE",
    href: "#/home#buy-an-ape",
    className: "nav-link"
  }, "BUY"), /* @__PURE__ */ import_react.default.createElement("a", {
    id: "nav-link",
    title: "ROADMAP",
    href: "#/home#roadmap",
    className: "nav-link"
  }, "ROADMAP"), /* @__PURE__ */ import_react.default.createElement("span", {
    id: "nav-link",
    title: "TEAM",
    href: "#/home#team",
    className: "nav-link"
  }, "TEAM"), /* @__PURE__ */ import_react.default.createElement("a", {
    id: "nav-link",
    title: "GALLERY",
    href: "#/gallery",
    "data-rb-event-key": "/gallery",
    className: "nav-link"
  }, "GALLERY"), /* @__PURE__ */ import_react.default.createElement("a", {
    id: "nav-link",
    title: "PROVENANCE",
    href: "#/provenance",
    "data-rb-event-key": "/provenance",
    className: "nav-link"
  }, "PROVENANCE"), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "nav-item dropdown"
  }, /* @__PURE__ */ import_react.default.createElement("a", {
    "aria-haspopup": "true",
    "aria-expanded": "false",
    id: "nav-dropdown",
    href: "#",
    className: "dropdown-toggle nav-link",
    role: "button"
  }, "MEMBERS"))), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "navbar-nav",
    id: "nav-social"
  }, /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://www.youtube.com/watch?v=Yqga_WgX58k"
  }, /* @__PURE__ */ import_react.default.createElement("i", {
    className: "fa fa-youtube-play social-icon pr-lg-0"
  })), /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://www.instagram.com/boredapeyachtclub"
  }, /* @__PURE__ */ import_react.default.createElement("i", {
    className: "fa fa-instagram social-icon pr-lg-0"
  })), /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://twitter.com/BoredApeYC"
  }, /* @__PURE__ */ import_react.default.createElement("i", {
    className: "fa fa-twitter social-icon pr-lg-0"
  })))));
};
var Navbar_default = Navbar;

// app/assets/banner.png
var banner_default = "/build/_assets/banner-MPDAYSRO.png";

// route-module:/Users/jakepepple/pharoah-god-mob/pgm-landing/app/routes/home.jsx
function Home() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("img", {
    src: banner_default,
    className: "img-fluid px-0"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "px-4 mt-md-4 container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-5 row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-4 row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-4 col-lg-7 col-12"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "d-flex font-italic welcome-title mb-3"
  }, "WELCOME TO THE", /* @__PURE__ */ React.createElement("br", null), "PHAROAH GOD MOB"), /* @__PURE__ */ React.createElement("p", {
    className: "common-p mb-0"
  }, "PGM is a collection of NFTs\u2014unique digital collectibles living on the Ethereum blockchain. Your Pharoah doubles as your PGM Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.")), /* @__PURE__ */ React.createElement("div", {
    className: "my-lg-auto col-lg-4 col-12 offset-lg-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "common-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pb-2 pr-2 col-6"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "img-fluid",
    src: "https://ik.imagekit.io/bayc/assets/ape1.png",
    alt: "ape1",
    "aria-label": "ape1"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "pb-2 pl-2 col-6"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "img-fluid",
    src: "https://ik.imagekit.io/bayc/assets/ape2.png",
    alt: "ape2",
    "aria-label": "ape2"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pt-2 pr-2 col-6"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "img-fluid",
    src: "https://ik.imagekit.io/bayc/assets/ape3.png",
    alt: "ape3",
    "aria-label": "ape3"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "pt-2 pl-2 col-6"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "img-fluid",
    src: "https://ik.imagekit.io/bayc/assets/ape4.png",
    "aria-label": "ape4"
  })))))), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-3 col-12"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "fair-title"
  }, "FAIR DISTRIBUTION"), /* @__PURE__ */ React.createElement("h4", {
    className: "ponzi"
  }, "(BONDING CURVES ARE A PONZI)")), /* @__PURE__ */ React.createElement("div", {
    className: "mb-2 mb-lg-0 col-lg-7 col-12"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "common-p mb-lg-0"
  }, "There are no bonding curves here. Buying a Pharoah costs 0.08 ETH. There are no price tiers; PGM membership costs the same for everyone.")), /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-4 col-12 offset-lg-1"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "note text-justify mb-0"
  }, "Note: Thirty Pharoahs are being withheld from the sale. These will be used for giveaways, puzzle rewards\u2014and for the creators' PGM memberships."))))), /* @__PURE__ */ React.createElement("hr", {
    className: "gray-line mb-5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mb-5 row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "common-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-3 col-lg-7 col-12"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "common-title mb-3"
  }, "THE SPECS"), /* @__PURE__ */ React.createElement("p", {
    className: "common-p"
  }, "Each Pharoah is unique and programmatically generated from over 170 possible traits, including expression, headwear, clothing, and more. All pharoahs are dope, but some are rarer than others.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "The pharoahs are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. (", /* @__PURE__ */ React.createElement("a", {
    className: "link",
    href: "#/provenance"
  }, "See Record and Proof."), ") Purchasing an pharoah costs 0.08 ETH.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "To access members-only areas such as\xA0", /* @__PURE__ */ React.createElement("a", {
    className: "link",
    href: "#/bathroom"
  }, "THE BATHROOM"), ", members will need to be signed into their Metamask Wallet.")), /* @__PURE__ */ React.createElement("div", {
    className: "my-auto col-lg-4 col-12 offset-lg-1"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "img-fluid w-100",
    src: "https://ik.imagekit.io/bayc/assets/mystery-ape.gif",
    alt: "mystery token"
  })))))), /* @__PURE__ */ React.createElement("hr", {
    className: "gray-line mb-5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mb-5 row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "team",
    className: "common-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-3 col-lg-7 col-12"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "common-title mb-3"
  }, "THE TEAM"), /* @__PURE__ */ React.createElement("p", {
    className: "common-p"
  }, "PGM was created by four friends who set out to make some dope art, test our skills, and try to build something (ridiculous)."), /* @__PURE__ */ React.createElement("p", {
    className: "common-p"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "bayc-color bold-text"
  }, "SOMEONE."), " ", /* @__PURE__ */ React.createElement("span", {
    className: "font-italic"
  }, "STARCRAFT OBSESSED. EATS SMURFS.")), /* @__PURE__ */ React.createElement("p", {
    className: "common-p"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "bayc-color bold-text"
  }, "SOMEONE ELSE."), " ", /* @__PURE__ */ React.createElement("span", {
    className: "font-italic"
  }, "REFORMED LEVERAGE ADDICT.")), /* @__PURE__ */ React.createElement("p", {
    className: "common-p"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "bayc-color bold-text"
  }, "A THIRD PERSON."), " ", /* @__PURE__ */ React.createElement("span", {
    className: "font-italic"
  }, "SPENT ALL THEIR MONEY ON FIRST PRESSES AND PET-NAT.")), /* @__PURE__ */ React.createElement("p", {
    className: "common-p"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "bayc-color bold-text"
  }, "NO SASS."), " ", /* @__PURE__ */ React.createElement("span", {
    className: "font-italic"
  }, " ", "HERE FOR THE NFTS. NOT FOR THE SASS."))), /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-4 col-12 offset-lg-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "common-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pb-2 pr-2 col-6"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "img-fluid",
    src: "https://ik.imagekit.io/bayc/assets/garga.png",
    alt: "garga",
    "aria-label": "garga"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "pb-2 pl-2 col-6"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "img-fluid",
    src: "https://ik.imagekit.io/bayc/assets/gordy.png",
    alt: "gordy",
    "aria-label": "gordy"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pt-2 pr-2 col-6"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "img-fluid",
    src: "https://ik.imagekit.io/bayc/assets/tomato.png",
    alt: "tomato",
    "aria-label": "tomato"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "pt-2 pl-2 col-6"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "img-fluid",
    src: "https://ik.imagekit.io/bayc/assets/sass.png",
    "aria-label": "sass"
  })))))))))));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
