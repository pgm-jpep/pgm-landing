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
var import_styled_components = __toModule(require("styled-components"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const sheet = new import_styled_components.ServerStyleSheet();
  let markup = (0, import_server.renderToString)(sheet.collectStyles(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  })));
  const styles = sheet.getStyleTags();
  markup = markup.replace("__STYLES__", styles);
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/jakepepple/pgm/pgm-landing/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());

// app/styles/root.css
var root_default = "/build/_assets/root-Y2MH32LR.css";

// app/assets/logo.png
var logo_default = "/build/_assets/logo-YWPIQDAA.png";

// route-module:/Users/jakepepple/pgm/pgm-landing/app/root.jsx
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
    },
    {
      rel: "shortcut icon",
      href: logo_default
    },
    {
      rel: "icon",
      href: logo_default
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
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "shortcut icon",
    href: "https://ik.imagekit.io/pgm/Logo_Qz3WeWg4H.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652302711550"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    href: "https://ik.imagekit.io/pgm/Logo_Qz3WeWg4H.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652302711550"
  }), /* @__PURE__ */ React.createElement("title", null, "PGM"), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null), typeof document === "undefined" ? "__STYLES__" : null), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), false, /* @__PURE__ */ React.createElement("script", {
    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
    integrity: "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p",
    crossOrigin: "anonymous"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "https://kit.fontawesome.com/791d156385.js",
    crossOrigin: "anonymous"
  })));
}

// route-module:/Users/jakepepple/pgm/pgm-landing/app/routes/splash.jsx
var splash_exports = {};
__export(splash_exports, {
  default: () => Index
});
init_react();

// app/components/Footer.jsx
init_react();
var import_imagekitio_react = __toModule(require("imagekitio-react"));

// app/styles/splash.js
init_react();
var import_styled_components2 = __toModule(require("styled-components"));

// app/assets/fonts/HelveticaNeueLTPro-Blk.otf
var HelveticaNeueLTPro_Blk_default = "/build/_assets/HelveticaNeueLTPro-Blk-HVYOXMFI.otf";

// app/styles/splash.js
var SplashPageContainer = import_styled_components2.default.div`
  background-color: black;
  background-size: 100% auto;
  height: 100%;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  @font-face {
    font-family: 'Neue Helvetica Pro 95 Black';
    src: url(${HelveticaNeueLTPro_Blk_default});
  }
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
`;
var SplashLogoContainer = import_styled_components2.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 500px;
  margin: -5%;
`;
var SplashLogo = import_styled_components2.default.img`
  max-width: 300px;
`;
var SplashBanner = import_styled_components2.default.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  min-height: 500px;
  margin: 24px 0px 48px;
`;
var SplashBannerMaxed = import_styled_components2.default.div`
    width: 100%;
  max-width: 850px;
  position: relative;
  min-height: 500px;
  margin: 24px 0px 48px;
`;
var SplashButton = import_styled_components2.default.div`
  width: 100%;
  max-width: 1200px;
  position: absolute;
  top: 45%;
  display: flex;
  cursor: pointer;
  opacity: 0.7;
  transition: all .2s ease-in-out;
  &:hover {
    opacity: 1;
    transform: scale(1.05);

  }
`;
var ClickableImage = import_styled_components2.default.div`
    cursor: pointer;
  opacity: ${(props) => props.opacity || 0.7};
  transition: all .2s ease-in-out;
  &:hover {
    opacity: 1;
    transform: scale(1.05);

  }
  ${(props) => props.margin && `margin: ${props.margin}`}
`;

// app/styles/footer.js
init_react();
var import_styled_components3 = __toModule(require("styled-components"));
var FooterContainer = import_styled_components3.default.div`
  margin: 12px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
var FooterBar = import_styled_components3.default.img`
  width: 100%;
  max-width: 1200px;
`;
var SocialLinks = import_styled_components3.default.div`
  margin: 24px auto;
  display: flex;
  justify-content: center;
  gap: 12px;
`;
var SocialLink = import_styled_components3.default.img`
  max-height: 50px;
`;
var InputContainer = import_styled_components3.default.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;
var InputFieldBox = import_styled_components3.default.div`
    width: 600px;
`;
var InputField = import_styled_components3.default.input`
  background: #443050;
  width: 600px;
  border: 1px solid #443050;
  border-radius: 4px;
  line-height:28px;
  color: white;
  font-size: 16px;

  &::placeholder {
    color: white;
    font-size: 16px;
  }
`;
var InputIconBox = import_styled_components3.default.div`
  height: 32px;
  width: 32px;
  ${({ solid }) => solid && `
  background: #e3afff;
  border: 1px solid #e3afff;
  `}
  border-radius: 4px;
`;
var InputBracketBox = import_styled_components3.default.div`
  height: 56px;
`;

// app/components/Footer.jsx
var Variations = {
  PURPLE: "purple",
  PINK: "pink",
  YELLOW: "yellow",
  GREEN: "green"
};
var getInstagramImagePath = (variation) => {
  return {
    [Variations.PURPLE]: "/instagram-purple_1YkVL_3WXp8SY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716304712",
    [Variations.PINK]: "/PGM%20website%20files/PinkInstagram.png?updatedAt=1706389306027",
    [Variations.YELLOW]: "/instagram-yellow_84f2YzvbsF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716211792",
    [Variations.GREEN]: "/instagram-green_CRdS4msc7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647922144271"
  }[variation];
};
var getTwitterImagePath = (variation) => {
  return {
    [Variations.PURPLE]: "/twitter-purple_dBcNgQlNe2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716211896",
    [Variations.PINK]: "/PGM%20website%20files/PinkTwitter.png?updatedAt=1706389266841",
    [Variations.YELLOW]: "/twitter-yellow_Ydkia8xH9T.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716211930",
    [Variations.GREEN]: "/twitter-green_BLOI2JRs_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647922144360"
  }[variation];
};
var Footer = ({ variation = Variations.PURPLE }) => {
  const TwitterPath = getTwitterImagePath(variation);
  const InstagramPath = getInstagramImagePath(variation);
  return /* @__PURE__ */ React.createElement(FooterContainer, null, /* @__PURE__ */ React.createElement(SocialLinks, null, /* @__PURE__ */ React.createElement(ClickableImage, {
    onClick: () => window.open("https://twitter.com/pharaohgodmob", "_blank"),
    opacity: 0.9
  }, /* @__PURE__ */ React.createElement(import_imagekitio_react.IKImage, {
    path: TwitterPath,
    transformation: [{
      height: "50"
    }]
  })), /* @__PURE__ */ React.createElement(ClickableImage, {
    onClick: () => window.open("https://instagram.com/pharaohgodmob", "_blank"),
    opacity: 0.9
  }, /* @__PURE__ */ React.createElement(import_imagekitio_react.IKImage, {
    path: InstagramPath,
    transformation: [{
      height: "50"
    }]
  }))));
};
var Footer_default = Footer;

// route-module:/Users/jakepepple/pgm/pgm-landing/app/routes/splash.jsx
var import_imagekitio_react2 = __toModule(require("imagekitio-react"));
function Index() {
  return /* @__PURE__ */ React.createElement(import_imagekitio_react2.IKContext, {
    urlEndpoint: "https://ik.imagekit.io/pgm"
  }, /* @__PURE__ */ React.createElement(SplashPageContainer, null, /* @__PURE__ */ React.createElement(SplashLogoContainer, {
    style: { maxWidth: "400px" }
  }, /* @__PURE__ */ React.createElement(import_imagekitio_react2.IKImage, {
    path: "/w-pharaoh_yBUimLV0dw.gif",
    transformation: [{
      width: "500"
    }],
    loading: "lazy",
    lqip: { active: true }
  }), /* @__PURE__ */ React.createElement(import_imagekitio_react2.IKImage, {
    path: "/letters_UiWE76Yiy.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1673723677319",
    transformation: [{
      width: "500"
    }],
    loading: "lazy",
    lqip: { active: true },
    style: { maxWidth: "300px", margin: "-130px auto 0px" }
  })), /* @__PURE__ */ React.createElement(SplashBanner, {
    style: { marginTop: "-100px" }
  }, /* @__PURE__ */ React.createElement(import_imagekitio_react2.IKVideo, {
    path: "/meeting_trans4k_QyO8Q230-2.mov?updatedAt=1678931219297",
    style: {
      width: "100%"
    },
    autoPlay: true,
    loop: true
  }), /* @__PURE__ */ React.createElement(SplashButton, {
    onClick: () => window.location.href = "/home"
  }, /* @__PURE__ */ React.createElement(import_imagekitio_react2.IKImage, {
    path: "/enter-button-final_4i9f4_Ec8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651981728961",
    transformation: [{
      "width": "350"
    }],
    loading: "lazy",
    lqip: { active: true },
    style: {
      "margin": "auto"
    }
  }))), /* @__PURE__ */ React.createElement(Footer_default, null)));
}

// route-module:/Users/jakepepple/pgm/pgm-landing/app/routes/vision.jsx
var vision_exports = {};
__export(vision_exports, {
  default: () => Vision
});
init_react();
var import_imagekitio_react5 = __toModule(require("imagekitio-react"));

// app/components/Navbar.jsx
init_react();
var import_imagekitio_react3 = __toModule(require("imagekitio-react"));

// app/styles/navbar.js
init_react();
var import_styled_components4 = __toModule(require("styled-components"));
var NavLink = import_styled_components4.default.a`
  color: #fff;
  font-style: italic;
  font-weight: 500;
  letter-spacing: 1.2px;
  caret-color: transparent;
  text-align: end;
  transition: .15s;
  cursor: pointer;
  text-decoration: none;
`;

// app/components/Navbar.jsx
var Navbar = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("nav", {
    id: "nav",
    className: "navbar navbar-expand-md navbar-light sticky-top"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/splash",
    id: "pgm-brand",
    className: "navbar-brand"
  }, /* @__PURE__ */ React.createElement(import_imagekitio_react3.IKImage, {
    path: "/logo-vector_1gzBYRGiHGR4.png",
    transformation: [{
      height: "130"
    }],
    loading: "lazy",
    lqip: { active: true }
  })), /* @__PURE__ */ React.createElement("button", {
    "aria-controls": "responsive-navbar-nav",
    id: "nav-toggle",
    type: "button",
    "aria-label": "Toggle navigation",
    className: "navbar-dark navbar-toggler",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarToggler"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "navbar-toggler-icon"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarToggler",
    style: { justifyContent: "space-between" }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "navbar-nav",
    id: "nav-bar"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    title: "HOME",
    href: "/home"
  }, "HOME"), /* @__PURE__ */ React.createElement(NavLink, {
    title: "VISION",
    href: "/vision"
  }, "VISION"), /* @__PURE__ */ React.createElement(NavLink, {
    title: "TEAM",
    href: "/team"
  }, "TEAM")))));
};
var Navbar_default = Navbar;

// app/styles/home.js
init_react();
var import_styled_components5 = __toModule(require("styled-components"));
var HomePageContainer = import_styled_components5.default.div`
  background-image: url(https://ik.imagekit.io/pgm/PGM%20website%20files/Pink%20background_RlupOo6jpO.png?updatedAt=1706237713198);
  background-size: 100% auto;
  height: 100%;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  @font-face {
    font-family: 'Neue Helvetica Pro 95 Black';
    src: url(${HelveticaNeueLTPro_Blk_default});
  }
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
var TextContainer = import_styled_components5.default.div`
  width: 100%;
  padding: 32px;
`;
var ParagraphText = import_styled_components5.default.p`
  font-size: 1.4em;
  color: ${({ color }) => color};
  text-align: center;
`;
var HeaderText = import_styled_components5.default.h1`
  text-align: center;
  font-size: 2.4em;
  font-weight: 900;
  margin: 24px 0px;
`;
var SubheaderText = import_styled_components5.default.h3`
  text-align: center;
  font-size: 1.8em;
  font-weight: 800;
  margin: 24px 0px;
`;
var CenteredText = import_styled_components5.default.p`
  width: 100%;
  text-align: center;

`;
var MainSection = import_styled_components5.default.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  margin: 24px 0px;
  ${({ center }) => center && `
    text-align: center
  `};
  ${({ column }) => column && `
    display: flex;
    flex-direction: column;
    gap: 64px;
  `}
`;
var Divider = import_styled_components5.default.div`
  background-color: #e3afff;
  width: 100%;
  max-width: 1200px;
  height: 4px;
`;

// app/styles/vision.js
init_react();
var import_styled_components6 = __toModule(require("styled-components"));
var VisionPageContainer = (0, import_styled_components6.default)(HomePageContainer)`
  background-image: url(https://ik.imagekit.io/pgm/background-yellow-final__q8HmKfNy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652304184890)
`;

// app/components/EmailInput.jsx
init_react();
var import_imagekitio_react4 = __toModule(require("imagekitio-react"));

// app/styles/forms.js
init_react();
var import_styled_components7 = __toModule(require("styled-components"));
var InputContainer2 = import_styled_components7.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
var InputFieldBox2 = import_styled_components7.default.div`
    width: 600px;
`;
var InputField2 = import_styled_components7.default.input`
  ${({ color }) => color && `
    background: ${color};
    border: 1px solid ${color}
  `};
  width: 600px;
  border-radius: 4px;
  line-height:28px;
  color: white;
  font-size: 16px;

  &::placeholder {
    color: white;
    font-size: 16px;
  }
`;
var InputIconBox2 = import_styled_components7.default.div`
  height: 32px;
  width: 32px;
  ${({ color }) => color && `
  background: ${color};
  border: 1px solid ${color};
  `}
  border-radius: 4px;
`;
var InputBracketBox2 = import_styled_components7.default.div`
  height: 56px;
`;

// app/components/EmailInput.jsx
var Variations2 = {
  GREEN: "green",
  PINK: "pink",
  YELLOW: "yellow"
};
var getInputColor = (variation) => {
  return {
    [Variations2.PINK]: "#443050",
    [Variations2.YELLOW]: "#485508",
    [Variations2.GREEN]: "#53702c"
  }[variation];
};
var getInputIconColor = (variation) => {
  return {
    [Variations2.PINK]: "#e3afff",
    [Variations2.YELLOW]: "#CAD913",
    [Variations2.GREEN]: "#263A0B"
  }[variation];
};
var getLeftBracketPath = (variation) => {
  return {
    [Variations2.PINK]: "/left-bracket-pink_6K2LI739qq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647916171574",
    [Variations2.YELLOW]: "/left-bracket-yellow_i0Hxi4GbTw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647916234146",
    [Variations2.GREEN]: "/left-bracket-green_cv5DIzo-6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647922205783"
  }[variation];
};
var getRightBracketPath = (variation) => {
  return {
    [Variations2.PINK]: "/right-bracket-pink_Vjhzhsrc5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647916185573",
    [Variations2.YELLOW]: "/right-bracket-yellow_7zGMd1buh8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647916234119",
    [Variations2.GREEN]: "/right-bracket-green_MiZlkJC722.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647922205791"
  }[variation];
};
var EmailInput = ({ variation = Variations2.PINK }) => {
  const inputColor = getInputColor(variation);
  const inputIconColor = getInputIconColor(variation);
  const leftBracketPath = getLeftBracketPath(variation);
  const rightBracketPath = getRightBracketPath(variation);
  return /* @__PURE__ */ React.createElement(InputContainer2, null, /* @__PURE__ */ React.createElement(InputBracketBox2, null, /* @__PURE__ */ React.createElement(import_imagekitio_react4.IKImage, {
    path: leftBracketPath,
    transformation: [{
      height: "56"
    }]
  })), /* @__PURE__ */ React.createElement(InputFieldBox2, null, /* @__PURE__ */ React.createElement(InputField2, {
    color: inputColor,
    type: "email",
    placeholder: "Email address"
  })), /* @__PURE__ */ React.createElement(InputIconBox2, {
    color: inputIconColor
  }, /* @__PURE__ */ React.createElement(import_imagekitio_react4.IKImage, {
    path: "/dotted-arrow_Q-88Z_X2q.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647711227720",
    transformation: [{
      height: "32"
    }]
  })), /* @__PURE__ */ React.createElement(InputBracketBox2, null, /* @__PURE__ */ React.createElement(import_imagekitio_react4.IKImage, {
    path: rightBracketPath,
    transformation: [{
      height: "56"
    }]
  })));
};
var EmailInput_default = EmailInput;

// route-module:/Users/jakepepple/pgm/pgm-landing/app/routes/vision.jsx
function Vision() {
  return /* @__PURE__ */ React.createElement(import_imagekitio_react5.IKContext, {
    urlEndpoint: "https://ik.imagekit.io/pgm"
  }, /* @__PURE__ */ React.createElement(VisionPageContainer, null, /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }), /* @__PURE__ */ React.createElement(SplashBanner, null, /* @__PURE__ */ React.createElement(import_imagekitio_react5.IKVideo, {
    path: "/Vision_page_banner_vHUR5MUBQ.mov?ik-sdk-version=javascript-1.4.3&updatedAt=1673726455306",
    style: {
      width: "100%"
    },
    autoPlay: true,
    loop: true
  })), /* @__PURE__ */ React.createElement(MainSection, null, /* @__PURE__ */ React.createElement(TextContainer, null, /* @__PURE__ */ React.createElement(HeaderText, null, "THE VISION"), /* @__PURE__ */ React.createElement(ParagraphText, {
    color: "#CAD913"
  }, "PGM is a collection of 5,000 NFTs existing on the ethereum blockchain. Each unique digital illustration signifies your seat in the mob. Those on the inside benefit from all future roadmap endeavors."))), /* @__PURE__ */ React.createElement(MainSection, {
    center: true
  }, /* @__PURE__ */ React.createElement(SubheaderText, null, "KEEP ME POSTED"), /* @__PURE__ */ React.createElement(EmailInput_default, {
    variation: Variations.YELLOW
  })), /* @__PURE__ */ React.createElement(Footer_default, {
    variation: Variations.YELLOW
  })));
}

// route-module:/Users/jakepepple/pgm/pgm-landing/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2
});
init_react();
var import_imagekitio_react6 = __toModule(require("imagekitio-react"));
function Index2() {
  return /* @__PURE__ */ React.createElement(import_imagekitio_react6.IKContext, {
    urlEndpoint: "https://ik.imagekit.io/pgm"
  }, /* @__PURE__ */ React.createElement(SplashPageContainer, null, /* @__PURE__ */ React.createElement(ClickableImage, {
    onClick: () => {
      window.location.href = "/home";
    },
    opacity: 0.9
  }, /* @__PURE__ */ React.createElement(import_imagekitio_react6.IKImage, {
    path: "/PGM%20website%20files/Enter%20page%20top_62hBeVPXs.png?updatedAt=1706237708156",
    transformation: [{
      "width": "250"
    }],
    loading: "lazy",
    lqip: { active: true },
    style: {
      "margin": "auto"
    }
  })), /* @__PURE__ */ React.createElement(ClickableImage, {
    onClick: () => {
      window.location.href = "/vision";
    }
  }, /* @__PURE__ */ React.createElement(import_imagekitio_react6.IKImage, {
    path: "/PGM%20website%20files/Enter%20page%20middle_fWHav05Yh.png?updatedAt=1706237707522",
    transformation: [{
      "width": "200"
    }],
    loading: "lazy",
    lqip: { active: true },
    style: {
      "margin": "auto"
    }
  })), /* @__PURE__ */ React.createElement(ClickableImage, {
    onClick: () => {
      window.location.href = "/team";
    }
  }, /* @__PURE__ */ React.createElement(import_imagekitio_react6.IKImage, {
    path: "/PGM%20website%20files/Enter%20page%20bottom_7FID6S29v.png?updatedAt=1706237709417",
    transformation: [{
      "width": "250"
    }],
    loading: "lazy",
    lqip: { active: true },
    style: {
      "margin": "auto"
    }
  })), /* @__PURE__ */ React.createElement(ClickableImage, {
    onClick: () => {
      window.location.href = "/mint";
    },
    opacity: 0.9,
    margin: "-100px 0px 0px 0px"
  }, /* @__PURE__ */ React.createElement(import_imagekitio_react6.IKImage, {
    path: "/PGM%20website%20files/Enter%20page%20mint%20button_WGhSyf389.gif?updatedAt=1706237709621",
    transformation: [{
      "width": "250"
    }],
    loading: "lazy",
    lqip: { active: true },
    style: {
      "margin": "auto"
    }
  }))));
}

// route-module:/Users/jakepepple/pgm/pgm-landing/app/routes/home.jsx
var home_exports = {};
__export(home_exports, {
  default: () => Home
});
init_react();
var import_imagekitio_react7 = __toModule(require("imagekitio-react"));
var SPLASH_LOGO_WIDTH = "250";
function Home() {
  return /* @__PURE__ */ React.createElement(import_imagekitio_react7.IKContext, {
    urlEndpoint: "https://ik.imagekit.io/pgm"
  }, /* @__PURE__ */ React.createElement(HomePageContainer, null, /* @__PURE__ */ React.createElement(SplashLogoContainer, null, /* @__PURE__ */ React.createElement(import_imagekitio_react7.IKImage, {
    path: "/PGM%20website%20files/Untitled_Artwork%203_O1c4PqmNX.gif?updatedAt=1706237717815",
    transformation: [{
      width: SPLASH_LOGO_WIDTH
    }],
    loading: "lazy",
    lqip: { active: true },
    height: SPLASH_LOGO_WIDTH,
    width: SPLASH_LOGO_WIDTH
  })), /* @__PURE__ */ React.createElement(import_imagekitio_react7.IKImage, {
    path: "/PGM%20website%20files/Pink%20page%20gif_TFZUIeOWN.gif?updatedAt=1706237708422",
    style: {
      width: "75%",
      margin: "0 auto"
    },
    autoPlay: true,
    loop: true
  }), /* @__PURE__ */ React.createElement(MainSection, null, /* @__PURE__ */ React.createElement(TextContainer, null, /* @__PURE__ */ React.createElement(CenteredText, null, "Deliverance."), /* @__PURE__ */ React.createElement(CenteredText, null, "3.21.22"))), /* @__PURE__ */ React.createElement(Footer_default, {
    variation: Variations.PINK
  })));
}

// route-module:/Users/jakepepple/pgm/pgm-landing/app/routes/team.jsx
var team_exports = {};
__export(team_exports, {
  default: () => Team
});
init_react();
var import_imagekitio_react8 = __toModule(require("imagekitio-react"));

// app/styles/team.js
init_react();
var import_styled_components8 = __toModule(require("styled-components"));
var TeamPageContainer = (0, import_styled_components8.default)(HomePageContainer)`
  background-image: url(https://ik.imagekit.io/pgm/yellow-background-final-2_7DhPl_vM7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652305741932)
`;
var FlexList = import_styled_components8.default.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ${({ alignCenter }) => alignCenter && `
    justify-content: center
  `}
`;
var FlexListItem = import_styled_components8.default.div`
  flex: 1 1 30%;
  display: flex;
  ${({ alignCenter }) => alignCenter && `justify-content: center`}
`;

// route-module:/Users/jakepepple/pgm/pgm-landing/app/routes/team.jsx
function Team() {
  return /* @__PURE__ */ React.createElement(import_imagekitio_react8.IKContext, {
    urlEndpoint: "https://ik.imagekit.io/pgm"
  }, /* @__PURE__ */ React.createElement(TeamPageContainer, null, /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }), /* @__PURE__ */ React.createElement(MainSection, null, /* @__PURE__ */ React.createElement(TextContainer, null, /* @__PURE__ */ React.createElement(HeaderText, null, "THE TEAM"), /* @__PURE__ */ React.createElement(FlexList, {
    alignCenter: true
  }, /* @__PURE__ */ React.createElement(FlexListItem, {
    alignCenter: true
  }, /* @__PURE__ */ React.createElement(import_imagekitio_react8.IKImage, {
    path: "/rob_nft_G_onHXetGZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673723110093",
    transformation: [{
      width: "300"
    }],
    style: { margin: "24px auto" }
  })), /* @__PURE__ */ React.createElement(FlexListItem, {
    alignCenter: true
  }, /* @__PURE__ */ React.createElement(import_imagekitio_react8.IKImage, {
    path: "/jake_nft_P2sCj8D9K.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673723110070",
    transformation: [{
      width: "300"
    }],
    style: { margin: "24px auto" }
  })), /* @__PURE__ */ React.createElement(FlexListItem, {
    alignCenter: true
  }, /* @__PURE__ */ React.createElement(import_imagekitio_react8.IKImage, {
    path: "/ben_nft_LeAi5sepHs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673723110092",
    transformation: [{
      width: "300"
    }],
    style: { margin: "24px auto" }
  }))), /* @__PURE__ */ React.createElement(ParagraphText, {
    color: "#263A0B"
  }, "PGM is a collection of 5,000 NFTs existing on the ethereum blockchain. Each unique digital illustration signifies your seat in the mob. Those on the inside benefit from all future roadmap endeavors."))), /* @__PURE__ */ React.createElement(MainSection, {
    center: true
  }, /* @__PURE__ */ React.createElement(SubheaderText, null, "KEEP ME POSTED"), /* @__PURE__ */ React.createElement(EmailInput_default, {
    variation: Variations.GREEN
  })), /* @__PURE__ */ React.createElement(Footer_default, {
    variation: Variations.GREEN
  })));
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
  "routes/splash": {
    id: "routes/splash",
    parentId: "root",
    path: "splash",
    index: void 0,
    caseSensitive: void 0,
    module: splash_exports
  },
  "routes/vision": {
    id: "routes/vision",
    parentId: "root",
    path: "vision",
    index: void 0,
    caseSensitive: void 0,
    module: vision_exports
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
  },
  "routes/team": {
    id: "routes/team",
    parentId: "root",
    path: "team",
    index: void 0,
    caseSensitive: void 0,
    module: team_exports
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
