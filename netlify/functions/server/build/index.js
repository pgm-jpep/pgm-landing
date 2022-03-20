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
var root_default = "/build/_assets/root-UXWZWFM4.css";

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
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null), typeof document === "undefined" ? "__STYLES__" : null), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), false, /* @__PURE__ */ React.createElement("script", {
    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
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

// app/components/Footer.jsx
init_react();
var import_imagekitio_react = __toModule(require("imagekitio-react"));

// app/styles/footer.js
init_react();
var import_styled_components2 = __toModule(require("styled-components"));
var FooterContainer = import_styled_components2.default.div`
  margin: 12px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
var FooterBar = import_styled_components2.default.img`
  width: 100%;
  max-width: 1200px;
`;
var SocialLinks = import_styled_components2.default.div`
  margin: 24px auto;
  display: flex;
  justify-content: center;
  gap: 12px;
`;
var SocialLink = import_styled_components2.default.img`
  max-height: 50px;
`;

// app/components/Footer.jsx
var Variations = {
  PURPLE: "purple",
  PINK: "pink",
  YELLOW: "yellow"
};
var getFooterBarImagePath = (variation) => {
  console.log(variation);
  return {
    [Variations.PURPLE]: "/bar-purple_zL2qHlmDLQ0Ug.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716394704",
    [Variations.PINK]: "/bar-pink_5box97MV6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647740115147",
    [Variations.YELLOW]: "/bar-yellow_BXbrtuCWY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647740115220"
  }[variation];
};
var getInstagramImagePath = (variation) => {
  return {
    [Variations.PURPLE]: "/instagram-purple_1YkVL_3WXp8SY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716304712",
    [Variations.PINK]: "/instagram-pink_SEsHVWNNU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716211708",
    [Variations.YELLOW]: "/instagram-yellow_84f2YzvbsF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716211792"
  }[variation];
};
var getTwitterImagePath = (variation) => {
  return {
    [Variations.PURPLE]: "/twitter-purple_dBcNgQlNe2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716211896",
    [Variations.PINK]: "/twitter-pink_5IvjTJvCcA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716211908",
    [Variations.YELLOW]: "/twitter-yellow_Ydkia8xH9T.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716211930"
  }[variation];
};
var getDiscordImagePath = (variation) => {
  return {
    [Variations.PURPLE]: "/discord-purple_QGcqb_xHlVkLc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716279853",
    [Variations.PINK]: "/discord-pink_sNIlBiwsAq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716211863",
    [Variations.YELLOW]: "/discord-yellow_zzDwUgrlvJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716211878"
  }[variation];
};
var Footer = ({ variation = Variations.PURPLE }) => {
  const FooterBarPath = getFooterBarImagePath(variation);
  const TwitterPath = getTwitterImagePath(variation);
  const InstagramPath = getInstagramImagePath(variation);
  const DiscordPath = getDiscordImagePath(variation);
  return /* @__PURE__ */ React.createElement(FooterContainer, null, /* @__PURE__ */ React.createElement(import_imagekitio_react.IKImage, {
    path: FooterBarPath,
    transformation: [{
      width: "1200"
    }]
  }), /* @__PURE__ */ React.createElement(SocialLinks, null, /* @__PURE__ */ React.createElement(import_imagekitio_react.IKImage, {
    path: TwitterPath,
    transformation: [{
      height: "50"
    }]
  }), /* @__PURE__ */ React.createElement(import_imagekitio_react.IKImage, {
    path: DiscordPath,
    transformation: [{
      height: "50"
    }]
  }), /* @__PURE__ */ React.createElement(import_imagekitio_react.IKImage, {
    path: InstagramPath,
    transformation: [{
      height: "50"
    }]
  })));
};
var Footer_default = Footer;

// app/styles/splash.js
init_react();
var import_styled_components3 = __toModule(require("styled-components"));

// app/assets/fonts/HelveticaNeueLTPro-Blk.otf
var HelveticaNeueLTPro_Blk_default = "/build/_assets/HelveticaNeueLTPro-Blk-HVYOXMFI.otf";

// app/styles/splash.js
var SplashPageContainer = import_styled_components3.default.div`
  background-image: url(https://ik.imagekit.io/pgm/splash-page-background_ispuh5fagl.png);
  background-size: 100% auto;
  height: 100%;
  min-height: 100vh;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  @font-face {
    font-family: 'Neue Helvetica Pro 95 Black';
    src: url(${HelveticaNeueLTPro_Blk_default});
  }
  justify-content: center;
  align-items: center;
`;
var SplashLogoContainer = import_styled_components3.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 500px;
`;
var SplashLogo = import_styled_components3.default.img`
  max-width: 300px;
`;
var SplashBanner = import_styled_components3.default.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  min-height: 500px;
  margin: 24px 0px 48px;
`;
var SplashButton = import_styled_components3.default.div`
  width: 100%;
  max-width: 1200px;
  position: absolute;
  top: 45%;
  display: flex;
  cursor: pointer;
`;

// route-module:/Users/jakepepple/pharoah-god-mob/pgm-landing/app/routes/index.jsx
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
    path: "/PGM_OXTYtPPw7yvd1.png",
    transformation: [{
      width: "500"
    }],
    loading: "lazy",
    lqip: { active: true },
    style: { maxWidth: "300px", margin: "-130px auto 0px" }
  })), /* @__PURE__ */ React.createElement(SplashBanner, {
    style: { marginTop: "-100px" }
  }, /* @__PURE__ */ React.createElement(import_imagekitio_react2.IKImage, {
    path: "/splash-page-banner_5zTRhCoW-.png",
    loading: "lazy",
    lqip: { active: true },
    style: {
      width: "100%"
    }
  }), /* @__PURE__ */ React.createElement(SplashButton, {
    onClick: () => window.location.href = "/home"
  }, /* @__PURE__ */ React.createElement(import_imagekitio_react2.IKImage, {
    path: "/enter_button_cropped_toafS3QB-ntK.png",
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

// route-module:/Users/jakepepple/pharoah-god-mob/pgm-landing/app/routes/home.jsx
var home_exports = {};
__export(home_exports, {
  default: () => Home
});
init_react();
var import_imagekitio_react4 = __toModule(require("imagekitio-react"));

// app/components/Navbar.jsx
init_react();
var import_imagekitio_react3 = __toModule(require("imagekitio-react"));
var Navbar = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("nav", {
    id: "nav",
    className: "navbar navbar-expand-md navbar-light sticky-top"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#/",
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
  }))));
};
var Navbar_default = Navbar;

// app/styles/home.js
init_react();
var import_styled_components4 = __toModule(require("styled-components"));
var HomePageContainer = import_styled_components4.default.div`
  background-image: url(https://ik.imagekit.io/pgm/main-page-background_BxJCwGSlS.png);
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
`;
var TextContainer = import_styled_components4.default.div`
  width: 100%;
  padding: 32px;
`;
var ParagraphText = import_styled_components4.default.p`
  font-size: 1.4em;
  color: #e3afff;
`;
var HeaderText = import_styled_components4.default.h1`
  text-align: center;
  font-size: 2.4em;
  font-weight: 900;
  margin: 24px 0px;
`;
var SubheaderText = import_styled_components4.default.h3`
  text-align: center;
  font-size: 1.8em;
  font-weight: 800;
  margin: 24px 0px;
`;
var MainSection = import_styled_components4.default.div`
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
var Divider = import_styled_components4.default.div`
  background-color: #e3afff;
  width: 100%;
  max-width: 1200px;
  height: 4px;
`;
var InputContainer = import_styled_components4.default.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;
var InputFieldBox = import_styled_components4.default.div`
    width: 600px;
`;
var InputField = import_styled_components4.default.input`
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
var InputIconBox = import_styled_components4.default.div`
  height: 32px;
  width: 32px;
  ${({ solid }) => solid && `
  background: #e3afff;
  border: 1px solid #e3afff;
  `}
  border-radius: 4px;
`;
var InputBracketBox = import_styled_components4.default.div`
  height: 56px;
`;

// route-module:/Users/jakepepple/pharoah-god-mob/pgm-landing/app/routes/home.jsx
function Home() {
  return /* @__PURE__ */ React.createElement(import_imagekitio_react4.IKContext, {
    urlEndpoint: "https://ik.imagekit.io/pgm"
  }, /* @__PURE__ */ React.createElement(HomePageContainer, null, /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }), /* @__PURE__ */ React.createElement(SplashBanner, null, /* @__PURE__ */ React.createElement(import_imagekitio_react4.IKImage, {
    path: "/main-page-banner_MfwH9Mfib.png",
    loading: "lazy",
    lqip: { active: true },
    style: {
      width: "100%"
    }
  })), /* @__PURE__ */ React.createElement(MainSection, null, /* @__PURE__ */ React.createElement(TextContainer, null, /* @__PURE__ */ React.createElement(HeaderText, null, "WELCOME TO THE PHAROAH GOD MOB"), /* @__PURE__ */ React.createElement(ParagraphText, null, "PGM is a collection of 5,000 NFTs existing on the ethereum blockchain. Each unique digital illustration signifies your seat in the mob. Those on the inside benefit from all future roadmap endeavors."))), /* @__PURE__ */ React.createElement(MainSection, {
    center: true,
    column: true
  }, /* @__PURE__ */ React.createElement(import_imagekitio_react4.IKImage, {
    path: "/Samples_ogqPMGZD7AWvG.gif",
    transformation: [{
      width: "875"
    }],
    style: { margin: "auto" }
  }), /* @__PURE__ */ React.createElement(import_imagekitio_react4.IKImage, {
    path: "/mint-now-button_tX1SzsxSW.png",
    transformation: [{
      width: "350"
    }],
    style: { margin: "24px auto" }
  })), /* @__PURE__ */ React.createElement(MainSection, null, /* @__PURE__ */ React.createElement(Divider, null)), /* @__PURE__ */ React.createElement(MainSection, {
    center: true
  }, /* @__PURE__ */ React.createElement(HeaderText, null, "THE VISION"), /* @__PURE__ */ React.createElement(import_imagekitio_react4.IKImage, {
    path: "/seeing-eye-pyramid-crop_JHKYh1Gy5.png",
    transformation: [{
      width: "600"
    }],
    style: { margin: "48px auto" }
  })), /* @__PURE__ */ React.createElement(MainSection, null), /* @__PURE__ */ React.createElement(MainSection, {
    center: true
  }, /* @__PURE__ */ React.createElement(SubheaderText, null, "KEEP ME POSTED"), /* @__PURE__ */ React.createElement(InputContainer, null, /* @__PURE__ */ React.createElement(InputBracketBox, null, /* @__PURE__ */ React.createElement(import_imagekitio_react4.IKImage, {
    path: "/left-bracket_1__6K2LI739qq.png",
    transformation: [{
      height: "56"
    }]
  })), /* @__PURE__ */ React.createElement(InputFieldBox, null, /* @__PURE__ */ React.createElement(InputField, {
    type: "email",
    placeholder: "Email address"
  })), /* @__PURE__ */ React.createElement(InputIconBox, {
    solid: true
  }, /* @__PURE__ */ React.createElement(import_imagekitio_react4.IKImage, {
    path: "/dotted-arrow_Q-88Z_X2q.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647711227720",
    transformation: [{
      height: "32"
    }]
  })), /* @__PURE__ */ React.createElement(InputBracketBox, null, /* @__PURE__ */ React.createElement(import_imagekitio_react4.IKImage, {
    path: "/right-bracket_Vjhzhsrc5.png",
    transformation: [{
      height: "56"
    }]
  })))), /* @__PURE__ */ React.createElement(Footer_default, {
    variation: Variations.PINK
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
