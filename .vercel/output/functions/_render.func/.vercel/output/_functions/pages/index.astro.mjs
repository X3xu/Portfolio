/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderSlot, b as createAstro, e as renderComponent, F as Fragment, s as spreadAttributes, f as renderHead } from '../chunks/astro/server_DFXC95CP.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$j = createAstro();
const $$LinkInline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$LinkInline;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} role="link" class="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/components/LinkInline.astro", void 0);

const $$Astro$i = createAstro();
const $$EducationItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$EducationItem;
  const { title, company, link, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative mx-12 pb-12 before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]" data-astro-cid-gbg4vcug> <div class="relative pb-12 md:col-span-2" data-astro-cid-gbg4vcug> <div class="sticky top-0" data-astro-cid-gbg4vcug> <span class="text-yellow-400 -left-[42px] absolute rounded-full text-5xl" data-astro-cid-gbg4vcug>&bull;</span> <h3 class="text-xl font-bold text-yellow-400" data-astro-cid-gbg4vcug>${title}</h3> <h4 class="font-semibold text-xl" data-astro-cid-gbg4vcug>${company}</h4> <time class="p-0 m-0 text-sm" data-astro-cid-gbg4vcug>${date}</time> </div> </div> <div class="relative flex flex-col items-center justify-center gap-2 pb-4 md:col-span-3" data-astro-cid-gbg4vcug> ${link && renderTemplate`${renderComponent($$result, "LinkInline", $$LinkInline, { "href": link, "data-astro-cid-gbg4vcug": true }, { "default": ($$result2) => renderTemplate`
Saber más${" "}<svg xmlns="http://www.w3.org/2000/svg" class="w-5 icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-gbg4vcug> ${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-gbg4vcug": true }, { "default": ($$result3) => renderTemplate` <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-gbg4vcug></path> <path d="M9 6l6 6l-6 6" data-astro-cid-gbg4vcug></path> ` })} </svg> ` })}`} </div> </div> `;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/components/EducationItem.astro", void 0);

const $$Education = createComponent(($$result, $$props, $$slots) => {
  const EXPERIENCIE = [
    {
      date: "Actualidad",
      title: "Ciberseguridad en la Industria 4.0 ",
      company: "CISCO"
    },
    {
      date: "2019 - 2021",
      title: "Desarrollo de Aplicaciones Multiplataforma",
      company: "IES Sant\xEDsima Trinidad"
    },
    {
      date: "2017 - 2019",
      title: "Fullstack developer",
      company: "NTT Data"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-2gvrk3wr> <div class="flex flex-col" data-astro-cid-2gvrk3wr> <div class="flex" data-astro-cid-2gvrk3wr> <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2gvrk3wr><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-2gvrk3wr></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" data-astro-cid-2gvrk3wr></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" data-astro-cid-2gvrk3wr></path><path d="M12 12l0 .01" data-astro-cid-2gvrk3wr></path><path d="M3 13a20 20 0 0 0 18 0" data-astro-cid-2gvrk3wr></path></svg> <h3 data-astro-cid-2gvrk3wr>Educación</h3> </div> <ol id="education" class="relative mt-16" data-astro-cid-2gvrk3wr> ${EXPERIENCIE.map((experiencie) => renderTemplate`<li class="" data-astro-cid-2gvrk3wr> ${renderComponent($$result, "EducationItem", $$EducationItem, { ...experiencie, "data-astro-cid-2gvrk3wr": true })} </li>`)} </ol> </div> </section> `;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/components/Education.astro", void 0);

const $$Astro$h = createAstro();
const $$Github = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>`;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/icons/Github.astro", void 0);

const $$Astro$g = createAstro();
const $$React = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$React;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"> <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle> </svg>`;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/icons/React.astro", void 0);

const $$Astro$f = createAstro();
const $$Tailwind = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Tailwind;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clip-path="url(#a)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h54v32.4H0z"></path></clipPath></defs></svg>`;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/icons/Tailwind.astro", void 0);

const $$Astro$e = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Link;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/components/Link.astro", void 0);

const $$Astro$d = createAstro();
const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a target="_blank"${addAttribute(href, "href")} role="link" class="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/components/LinkButton.astro", void 0);

const $$Astro$c = createAstro();
const $$Sass = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Sass;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"> <path fill="#f06292" d="M39.867,25.956c-1.538,0.008-2.87,0.377-3.986,0.928c-0.408-0.815-0.822-1.532-0.891-2.065	c-0.081-0.622-0.175-0.994-0.077-1.735c0.098-0.741,0.527-1.791,0.521-1.87c-0.006-0.079-0.096-0.456-0.983-0.463	c-0.887-0.006-1.646,0.171-1.735,0.405c-0.089,0.234-0.26,0.761-0.366,1.311c-0.155,0.804-1.771,3.673-2.688,5.173	c-0.3-0.586-0.555-1.102-0.608-1.51c-0.081-0.622-0.175-0.994-0.077-1.735c0.098-0.741,0.527-1.791,0.521-1.87	c-0.006-0.079-0.096-0.456-0.983-0.463c-0.887-0.006-1.646,0.171-1.735,0.405c-0.089,0.234-0.185,0.781-0.366,1.311	c-0.182,0.529-2.329,5.314-2.892,6.555c-0.287,0.632-0.536,1.14-0.712,1.486c-0.001-0.001-0.001-0.002-0.001-0.002	s-0.011,0.023-0.029,0.062c-0.151,0.295-0.24,0.458-0.24,0.458s0.001,0.002,0.003,0.006c-0.12,0.217-0.248,0.418-0.311,0.418	c-0.044,0-0.133-0.577,0.019-1.369c0.32-1.66,1.087-4.248,1.08-4.338c-0.004-0.046,0.143-0.497-0.501-0.733	c-0.626-0.229-0.849,0.153-0.906,0.154c-0.055,0.001-0.096,0.135-0.096,0.135s0.697-2.911-1.33-2.911	c-1.268,0-3.024,1.387-3.889,2.644c-0.546,0.298-1.715,0.936-2.954,1.617c-0.476,0.262-0.962,0.529-1.423,0.783	c-0.031-0.035-0.063-0.069-0.095-0.104c-2.459-2.623-7.003-4.478-6.811-8.005c0.07-1.282,0.516-4.658,8.733-8.752	c6.731-3.354,12.12-2.431,13.051-0.386c1.33,2.923-2.88,8.354-9.87,9.138c-2.663,0.299-4.066-0.734-4.415-1.118	c-0.367-0.405-0.422-0.423-0.559-0.347c-0.223,0.124-0.082,0.481,0,0.694c0.209,0.543,1.065,1.506,2.525,1.986	c1.285,0.422,4.412,0.653,8.193-0.81c4.236-1.638,7.543-6.196,6.571-10.005c-0.988-3.874-7.412-5.148-13.492-2.988	C12.44,9.332,8.523,11.35,5.706,13.984c-3.349,3.132-3.883,5.859-3.663,6.998c0.782,4.048,6.361,6.684,8.595,8.637	c-0.11,0.061-0.214,0.118-0.308,0.17c-1.12,0.554-5.373,2.78-6.437,5.131c-1.207,2.667,0.192,4.581,1.118,4.839	c2.869,0.798,5.813-0.638,7.396-2.998c1.582-2.359,1.389-5.432,0.663-6.834c-0.009-0.017-0.019-0.034-0.028-0.052	c0.289-0.171,0.584-0.345,0.876-0.517c0.57-0.335,1.13-0.647,1.615-0.911c-0.272,0.744-0.471,1.637-0.574,2.926	c-0.122,1.514,0.499,3.471,1.311,4.241c0.358,0.339,0.788,0.347,1.06,0.347c0.945,0,1.376-0.786,1.851-1.716	c0.582-1.14,1.099-2.468,1.099-2.468s-0.648,3.586,1.118,3.586c0.644,0,1.291-0.835,1.58-1.26c0.001,0.005,0.001,0.007,0.001,0.007	s0.017-0.028,0.05-0.083c0.067-0.102,0.105-0.167,0.105-0.167s0.001-0.007,0.003-0.019c0.259-0.449,0.833-1.473,1.693-3.162	c1.112-2.182,2.178-4.916,2.178-4.916s0.099,0.668,0.424,1.774c0.191,0.65,0.597,1.369,0.918,2.059	c-0.258,0.358-0.416,0.563-0.416,0.563s0.001,0.004,0.004,0.011c-0.206,0.274-0.437,0.569-0.679,0.857	c-0.878,1.045-1.923,2.239-2.063,2.583c-0.165,0.406-0.126,0.704,0.193,0.945c0.233,0.175,0.647,0.203,1.08,0.174	c0.789-0.053,1.343-0.249,1.617-0.368c0.427-0.151,0.924-0.388,1.39-0.731c0.861-0.633,1.38-1.538,1.33-2.738	c-0.028-0.661-0.238-1.316-0.505-1.934c0.078-0.112,0.156-0.226,0.235-0.34c1.357-1.984,2.41-4.164,2.41-4.164	s0.099,0.668,0.424,1.774c0.164,0.559,0.489,1.17,0.781,1.768c-1.276,1.037-2.067,2.242-2.342,3.032	c-0.508,1.462-0.11,2.124,0.636,2.275c0.338,0.068,0.816-0.087,1.175-0.239c0.447-0.148,0.984-0.395,1.486-0.764	c0.861-0.633,1.689-1.519,1.639-2.718c-0.023-0.546-0.171-1.088-0.372-1.608c1.082-0.451,2.482-0.701,4.266-0.493	c3.827,0.447,4.577,2.836,4.434,3.836c-0.144,1-0.946,1.55-1.215,1.716c-0.268,0.166-0.35,0.224-0.328,0.347	c0.033,0.179,0.157,0.173,0.386,0.134c0.315-0.053,2.009-0.813,2.082-2.659C46.089,28.509,43.844,25.935,39.867,25.956z M10.37,35.9	c-1.268,1.383-3.038,1.905-3.798,1.465c-0.82-0.475-0.495-2.511,1.06-3.979c0.948-0.894,2.172-1.718,2.984-2.225	c0.185-0.111,0.456-0.274,0.786-0.472c0.055-0.031,0.086-0.048,0.086-0.048l-0.001-0.002c0.064-0.038,0.129-0.077,0.196-0.118	C12.25,32.61,11.701,34.449,10.37,35.9z M19.605,29.623c-0.441,1.076-1.365,3.83-1.928,3.682c-0.483-0.127-0.777-2.22-0.096-4.28	c0.342-1.037,1.074-2.276,1.504-2.757c0.692-0.774,1.454-1.027,1.639-0.713C20.959,25.955,19.882,28.948,19.605,29.623z M27.234,33.263c-0.187,0.098-0.359,0.159-0.438,0.112c-0.059-0.035,0.077-0.164,0.077-0.164s0.954-1.027,1.33-1.494	c0.219-0.272,0.472-0.595,0.748-0.955c0.002,0.036,0.003,0.072,0.003,0.107C28.952,32.099,27.764,32.929,27.234,33.263z M33.111,31.923c-0.14-0.099-0.116-0.42,0.343-1.421c0.18-0.393,0.592-1.054,1.306-1.686c0.083,0.26,0.133,0.509,0.132,0.741	C34.883,31.105,33.779,31.683,33.111,31.923z"></path> </svg>`;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/icons/Sass.astro", void 0);

const $$Astro$b = createAstro();
const $$IcoAstro = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$IcoAstro;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64"> <linearGradient id="8HdvL7yHAC4FjCBjrv-f7a_kXuRhjMIeKhk_gr1" x1="32.414" x2="32.414" y1="44.02" y2="3" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c822ff"></stop><stop offset="1" stop-color="#1a6dff"></stop></linearGradient><path fill="url(#8HdvL7yHAC4FjCBjrv-f7a_kXuRhjMIeKhk_gr1)" d="M8.631,44.021c-0.242,0-0.482-0.088-0.67-0.258c-0.303-0.273-0.409-0.703-0.269-1.086	c6.221-16.95,13.643-37.17,13.671-37.242C22.128,3.425,23.348,3,24.234,3h16.36c1.273,0,2.324,0.9,2.885,2.469	c0.099,0.273,13.656,37.207,13.656,37.207c0.146,0.397,0.025,0.843-0.3,1.114c-0.324,0.271-0.786,0.307-1.15,0.09	c-0.063-0.038-6.445-3.769-15.563-3.769c-0.434,0-0.818-0.28-0.951-0.692l-6.068-18.781c-0.131-0.51-0.412-0.833-0.688-0.833	s-0.558,0.323-0.67,0.769l-6.087,18.846c-0.133,0.413-0.518,0.692-0.951,0.692c-7.715,0-15.56,3.771-15.638,3.809	C8.93,43.987,8.779,44.021,8.631,44.021z M24.234,5c-0.468,0-0.807,0.631-1.008,1.161c-0.113,0.303-9.943,27.086-12.854,35.017	c2.856-1.137,8.137-2.909,13.603-3.058l5.849-18.099c0.323-1.301,1.372-2.218,2.591-2.218s2.268,0.917,2.609,2.282l5.829,18.032	c6.083,0.123,10.881,1.748,13.545,2.901C50.511,30.433,41.618,6.207,41.594,6.138C41.443,5.715,41.111,5,40.595,5H24.234z"></path><linearGradient id="8HdvL7yHAC4FjCBjrv-f7b_kXuRhjMIeKhk_gr2" x1="32.376" x2="32.376" y1="64" y2="7" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6abff"></stop><stop offset="1" stop-color="#6dc7ff"></stop></linearGradient><path fill="url(#8HdvL7yHAC4FjCBjrv-f7b_kXuRhjMIeKhk_gr2)" d="M25.049,7H39.78c0.305,0.832,1.979,5.397,11.267,30.697c-2.399-0.708-5.356-1.327-8.721-1.522	l-5.393-16.69c-0.595-2.173-2.438-3.68-4.52-3.68s-3.925,1.507-4.52,3.68l-5.399,16.71c-3.193,0.237-6.26,0.945-8.79,1.709	C17.391,27.861,24.359,8.874,25.049,7z M24.098,55.103c0.038-0.14,0.075-0.26,0.101-0.381c0.339-1.575,1.619-2.575,3.236-2.528	c1.576,0.046,2.413,0.844,2.656,2.626c0.1,0.731,0.1,1.479,0.11,2.221c0.021,1.524,0.414,2.932,1.242,4.205	c0.783,1.206,1.812,2.124,3.22,2.754c-0.056-0.189-0.078-0.266-0.102-0.344c-1.036-3.178-0.29-5.363,2.467-7.227	c0.897-0.606,1.817-1.181,2.686-1.824c2.173-1.608,3.539-3.728,3.861-6.474c0.132-1.127,0.034-2.235-0.345-3.332	c-0.504,0.306-0.93,0.608-1.391,0.835c-4.03,1.983-8.291,2.228-12.63,1.572c-2.81-0.425-5.523-1.179-7.482-3.557	c-1.129,3.772-0.338,8.978,2.373,11.456L24.098,55.103z"></path> </svg>`;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/icons/icoAstro.astro", void 0);

const $$Astro$a = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Projects;
  const TAGS = {
    REACT: {
      name: "React.js",
      class: "bg-black text-white",
      icon: $$React
    },
    TAILWIND: {
      name: "Tailwind CSS",
      class: "bg-[#003159] text-white",
      icon: $$Tailwind
    },
    SASS: {
      name: "Sass",
      class: "bg-[#003159] text-white",
      icon: $$Sass
    },
    Astro: {
      name: "Astro",
      class: "bg-black  text-white",
      icon: $$IcoAstro
    }
  };
  const PROJECTS = [
    {
      title: "QuizzGame - \xA1Divi\xE9rtete con entretenidas preguntas!",
      description: "Juego que consiste en preguntas aleator\xEDas que cuestionar\xE1n tu nivel de cultura, \xBFser\xE1s capaz de acertar todas?",
      link: "https://github.com/X3xu/quizzGame",
      github: "https://quizzzgame.vercel.app/",
      image: "src/assets/QuizzGame.webp",
      tags: [TAGS.REACT, TAGS.SASS]
    },
    {
      title: "Portfolio JJD | Jes\xFAs Jim\xE9nez Dillana",
      description: "Descubre como est\xE1 desarrollado este mismo portfolio con las diferentes tecnolog\xEDas.",
      link: "https://quizzzgame.vercel.app/",
      github: "https://github.com/X3xu/Portfolio",
      image: "src/assets/Portfolio.webp",
      tags: [TAGS.Astro, TAGS.TAILWIND]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="projects" data-astro-cid-amng4zvp> <div class="flex items-center justify-center mb-14" data-astro-cid-amng4zvp> <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-code white" data-astro-cid-amng4zvp><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-amng4zvp></path><path d="M7 8l-4 4l4 4" data-astro-cid-amng4zvp></path><path d="M17 8l4 4l-4 4" data-astro-cid-amng4zvp></path><path d="M14 4l-4 16" data-astro-cid-amng4zvp></path></svg> <h3 data-astro-cid-amng4zvp>Proyectos</h3> </div> <div class="flex flex-col gap-y-16" data-astro-cid-amng4zvp> ${PROJECTS.map(({ image, title, description, tags, link, github }) => renderTemplate`<article class="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0" data-astro-cid-amng4zvp> <div class="w-full md:w-1/2" data-astro-cid-amng4zvp> <div class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50" data-astro-cid-amng4zvp> <img alt="Proyectos" class="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy"${addAttribute(image, "src")} data-astro-cid-amng4zvp> </div> </div> <div class="w-full md:w-1/2 md:max-w-lg" data-astro-cid-amng4zvp> <h3 class="text-2xl font-bold" data-astro-cid-amng4zvp> ${title} </h3> <div class="flex flex-wrap mt-2 justify-center" data-astro-cid-amng4zvp> <ul class="flex flex-row mb-2 gap-x-2" data-astro-cid-amng4zvp> ${tags.map((tag) => renderTemplate`<li data-astro-cid-amng4zvp> <span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `, "class")} data-astro-cid-amng4zvp> ${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-4", "data-astro-cid-amng4zvp": true })} ${tag.name} </span> </li>`)} </ul> <div class="mt-2" data-astro-cid-amng4zvp> ${description} </div> <footer class="flex items-end justify-start mt-4 gap-x-4" data-astro-cid-amng4zvp> ${github && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": github, "data-astro-cid-amng4zvp": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GitHub", $$Github, { "class": "size-6", "data-astro-cid-amng4zvp": true })}
Code
` })}`} ${link && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": link, "data-astro-cid-amng4zvp": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Link", $$Link, { "class": "size-4", "data-astro-cid-amng4zvp": true })}
Preview
` })}`} </footer> </div> </div> </article>`)} </div> </section> `;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/components/Projects.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1 data-astro-cid-3ef6ksr2><span class="text-yellow-400 font-bold" data-astro-cid-3ef6ksr2>Jesús Jiménez Dillana </span></h1> <h2 data-astro-cid-3ef6ksr2>
Desarrollador Software</h2><h2 data-astro-cid-3ef6ksr2></h2> <header id="header-nav" data-astro-cid-3ef6ksr2> <nav class="nav" data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2><a href="#contact" data-astro-cid-3ef6ksr2>Sobre mí</a></li> <li data-astro-cid-3ef6ksr2><a href="#experiencie" data-astro-cid-3ef6ksr2>Experiencia</a></li> <li data-astro-cid-3ef6ksr2><a href="#education" data-astro-cid-3ef6ksr2>Educación</a></li> <li data-astro-cid-3ef6ksr2><a href="#skills" data-astro-cid-3ef6ksr2>Skills</a></li> <li data-astro-cid-3ef6ksr2><a href="#projects" data-astro-cid-3ef6ksr2>Proyectos</a></li> </ul> </nav> </header>   `;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/components/Footer.astro", void 0);

const $$Card = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a download href="../../src/assets/CVJesúsJiménezDillana.pdf" target="_blank" class="cardSticky" data-astro-cid-dohjnao5> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-astro-cid-dohjnao5><path d="m55.707 11.293-10-10A1.115 1.115 0 0 0 45 1H9a1 1 0 0 0-1 1v60a1 1 0 0 0 1 1h46a1 1 0 0 0 1-1V12a1.092 1.092 0 0 0-.293-.707zM52.586 11H46V4.414zM10 61V3h34v9a1 1 0 0 0 1 1h9v48z" style="fill:#28282b" data-astro-cid-dohjnao5></path><path d="M34 8h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2zM34 13h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2zM50 16H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 21H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 26H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 31H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 36H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 41H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 46H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 51H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 56H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM22 19a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5zm0-8a3 3 0 1 1-3 3 3 3 0 0 1 3-3z" style="fill:#28282b" data-astro-cid-dohjnao5></path><path d="M14 28h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H14a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1zm1.473-2a7.325 7.325 0 0 1 13.054 0zM29 8v15.164a9.325 9.325 0 0 0-14 0V8z" style="fill:#28282b" data-astro-cid-dohjnao5></path></svg> <span data-astro-cid-dohjnao5>Currículum vitae</span> </a> `;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/components/Card.astro", void 0);

const $$Astro$9 = createAstro();
const $$JavaScript = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$JavaScript;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"> <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path> </svg>`;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/icons/JavaScript.astro", void 0);

const $$Astro$8 = createAstro();
const $$HTML = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$HTML;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"> <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path> </svg>`;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/icons/HTML.astro", void 0);

const $$Astro$7 = createAstro();
const $$Java = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Java;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32"><path d="M11.622 24.74s-1.23.748.855.962c2.51.32 3.847.267 6.625-.267a10.02 10.02 0 0 0 1.763.855c-6.25 2.672-14.16-.16-9.244-1.55zm-.8-3.473s-1.336 1.015.748 1.23c2.725.267 4.862.32 8.55-.427a3.26 3.26 0 0 0 1.282.801c-7.534 2.244-15.976.214-10.58-1.603zm14.747 6.09s.908.748-1.015 1.336c-3.58 1.07-15.014 1.39-18.22 0-1.122-.48 1.015-1.175 1.7-1.282.695-.16 1.07-.16 1.07-.16-1.23-.855-8.175 1.763-3.526 2.51 12.77 2.084 23.296-.908 19.983-2.404zM12.2 17.633s-5.824 1.39-2.084 1.87c1.603.214 4.755.16 7.694-.053 2.404-.214 4.81-.64 4.81-.64s-.855.374-1.443.748c-5.93 1.55-17.312.855-14.052-.748 2.778-1.336 5.076-1.175 5.076-1.175zm10.42 5.824c5.984-3.1 3.206-6.09 1.282-5.717-.48.107-.695.214-.695.214s.16-.32.534-.427c3.794-1.336 6.786 4.007-1.23 6.09 0 0 .053-.053.107-.16zm-9.83 8.442c5.77.374 14.587-.214 14.8-2.94 0 0-.427 1.07-4.755 1.87-4.916.908-11.007.8-14.587.214 0 0 .748.64 4.542.855z" fill="#4e7896"></path><path d="M18.996.001s3.313 3.366-3.152 8.442c-5.183 4.114-1.175 6.465 0 9.137-3.046-2.725-5.236-5.13-3.74-7.373C14.294 6.893 20.332 5.3 18.996.001zm-1.7 15.335c1.55 1.763-.427 3.366-.427 3.366s3.954-2.03 2.137-4.542c-1.656-2.404-2.94-3.58 4.007-7.587 0 0-10.953 2.725-5.717 8.763z" fill="#f58219"></path></svg>`;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/icons/Java.astro", void 0);

const $$Astro$6 = createAstro();
const $$Angular = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Angular;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"> <linearGradient id="QzbsZZGqvt5vTzXzFrTWxa_j9DnICNnlhGk_gr1" x1="19.369" x2="32.915" y1="6.256" y2="43.472" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#dfe9f2"></stop><stop offset=".391" stop-color="#d6e0e9"></stop><stop offset="1" stop-color="#bfc8d1"></stop></linearGradient><path fill="url(#QzbsZZGqvt5vTzXzFrTWxa_j9DnICNnlhGk_gr1)" d="M22.959,2.339L5.285,8.49c-1.333,0.464-2.163,1.795-1.992,3.197l2.828,23.187	c0.117,0.963,0.693,1.809,1.545,2.273l14.85,8.072c0.897,0.487,1.98,0.485,2.875-0.005l14.952-8.195	c0.847-0.464,1.419-1.309,1.536-2.268l2.826-23.174c0.172-1.41-0.668-2.747-2.013-3.204L24.91,2.332	C24.277,2.117,23.59,2.119,22.959,2.339z"></path><linearGradient id="QzbsZZGqvt5vTzXzFrTWxb_j9DnICNnlhGk_gr2" x1="24" x2="24" y1="2.152" y2="39.957" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".443" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><path fill="url(#QzbsZZGqvt5vTzXzFrTWxb_j9DnICNnlhGk_gr2)" d="M42.62,12.14L39.96,34	c-0.08,0.64-0.46,1.2-1.03,1.51L24.94,43c-0.3,0.16-0.62,0.23-0.94,0.23c-0.05,0-0.09-0.01-0.14-0.01c-0.27-0.01-0.54-0.08-0.8-0.22	L9.07,35.64c-0.56-0.31-0.95-0.88-1.03-1.52L5.38,12.24c-0.12-0.93,0.44-1.82,1.32-2.13l16.62-5.87c0.18-0.06,0.36-0.1,0.54-0.1	c0.05-0.01,0.09-0.01,0.14-0.01c0.22,0,0.44,0.04,0.66,0.11c1.58,0.57,6.2,2.23,16.62,5.76C42.17,10.31,42.74,11.2,42.62,12.14z"></path><path fill="#fff" d="M11.013,34h4.409L24,15.504V5.996L11.013,34z"></path><path fill="#fff" d="M18,24h6v4h-6V24z"></path><path fill="#b31523" d="M42.62,12.14L39.96,34c-0.08,0.64-0.46,1.2-1.03,1.51L24.94,43c-0.3,0.16-0.62,0.23-0.94,0.23V4.13	c0.22,0,0.44,0.04,0.66,0.11c1.58,0.57,6.2,2.23,16.62,5.76C42.17,10.31,42.74,11.2,42.62,12.14z"></path><path fill="#bfc8d1" d="M24,6v9.508l8.578,18.496h4.409L24,6z"></path><path fill="#bfc8d1" d="M24,24.004h6v4h-6V24.004z"></path><path d="M24,5.996V6l12.987,28.004h-4.409l-2.783-6H24V28h-5.795l-2.783,6h-4.409L24,5.996 M20.06,24H24v0.004h3.94L24,15.508 v-0.004L20.06,24 M25,1.467l-1.907,4.108L10.106,33.579L9.447,35h1.566h4.409h0.639l0.269-0.579L18.843,29H23l1,0.004h5.157 l2.514,5.421l0.269,0.579h0.639h4.409h1.566l-0.659-1.421L25,5.779V1.467L25,1.467z M21.626,23l2.373-5.117l2.375,5.121H25L24,23 H21.626L21.626,23z" opacity=".05"></path><path d="M24,5.996V6l12.987,28.004h-4.409l-2.783-6H24V28h-5.795l-2.783,6h-4.409L24,5.996 M20.06,24H24v0.004h3.94L24,15.508 v-0.004L20.06,24 M24.5,3.733l-0.954,2.052L10.559,33.79L10.23,34.5h0.783h4.409h0.319l0.134-0.29l2.648-5.71H23.5l0.5,0.004 h5.476l2.648,5.71l0.134,0.29h0.319h4.409h0.783l-0.329-0.71L24.5,5.89V3.733L24.5,3.733z M20.843,23.5l3.156-6.806l3.158,6.81 H24.5L24,23.5H20.843L20.843,23.5z" opacity=".07"></path> </svg>`;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/icons/Angular.astro", void 0);

const $$Astro$5 = createAstro();
const $$Docker = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Docker;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"> <path fill="#2395ec" d="M47.527,19.847c-0.13-0.102-1.345-1.007-3.908-1.007c-0.677,0.003-1.352,0.06-2.019,0.171 c-0.496-3.354-3.219-4.93-3.345-5.003l-0.688-0.392l-0.453,0.644c-0.567,0.866-1.068,1.76-1.311,2.763 c-0.459,1.915-0.18,3.713,0.806,5.25C35.417,22.928,33.386,22.986,33,23H1.582c-0.826,0.001-1.496,0.66-1.501,1.474 c-0.037,2.733,0.353,5.553,1.306,8.119c1.089,2.818,2.71,4.894,4.818,6.164C8.567,40.184,12.405,41,16.756,41 c1.965,0.006,3.927-0.169,5.859-0.524c2.686-0.487,5.271-1.413,7.647-2.74c1.958-1.119,3.72-2.542,5.219-4.215 c2.505-2.798,3.997-5.913,5.107-8.682c0.149,0,0.298,0,0.442,0c2.743,0,4.429-1.083,5.359-1.99 c0.618-0.579,1.101-1.284,1.414-2.065L48,20.216L47.527,19.847z"></path><path fill="#2395ec" d="M8,22H5c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C9,21.552,8.552,22,8,22z"></path><path fill="#2395ec" d="M14,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C15,21.552,14.552,22,14,22z"></path><path fill="#2395ec" d="M20,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C21,21.552,20.552,22,20,22z"></path><path fill="#2395ec" d="M26,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,21.552,26.552,22,26,22z"></path><path fill="#2395ec" d="M14,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C15,15.552,14.552,16,14,16z"></path><path fill="#2395ec" d="M20,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C21,15.552,20.552,16,20,16z"></path><path fill="#2395ec" d="M26,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,15.552,26.552,16,26,16z"></path><path fill="#2395ec" d="M26,10h-3c-0.552,0-1-0.448-1-1V6c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,9.552,26.552,10,26,10z"></path><path fill="#2395ec" d="M32,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C33,21.552,32.552,22,32,22z"></path> </svg>`;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/icons/Docker.astro", void 0);

const $$Astro$4 = createAstro();
const $$PHP = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$PHP;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 0 32 32" width="64"><defs><clipPath id="A"><path d="M11.52 162C11.52 81.677 135.307 16.56 288 16.56S564.48 81.677 564.48 162 440.693 307.44 288 307.44 11.52 242.322 11.52 162"></path></clipPath><radialGradient cx="0" cy="0" fx="0" fy="0" gradientTransform="matrix(363.05789,0,0,-363.05789,177.52002,256.30713)" gradientUnits="userSpaceOnUse" id="B" r="1" spreadMethod="pad"><stop offset="0" stop-color="#aeb2d5"></stop><stop offset=".3" stop-color="#aeb2d5"></stop><stop offset=".75" stop-color="#484c89"></stop><stop offset="1" stop-color="#484c89"></stop></radialGradient><clipPath id="C"><path d="M0 324h576V0H0v324z"></path></clipPath><clipPath id="D"><path d="M0 324h576V0H0v324z"></path></clipPath></defs><g transform="matrix(.05787 0 0 -.057079 -.666665 24.945283)"><g clip-path="url(#A)"><path d="M11.52 162C11.52 81.677 135.307 16.56 288 16.56S564.48 81.677 564.48 162 440.693 307.44 288 307.44 11.52 242.322 11.52 162" fill="url(#B)"></path></g><g clip-path="url(#C)"><path d="M288 27.36c146.73 0 265.68 60.28 265.68 134.64S434.73 296.64 288 296.64 22.32 236.36 22.32 162 141.27 27.36 288 27.36" fill="#777bb3"></path></g><g clip-path="url(#D)"><path d="M161.734 145.307c12.065 0 21.072 2.225 26.77 6.61 5.638 4.34 9.532 11.862 11.573 22.353 1.903 9.806 1.178 16.653-2.154 20.348-3.407 3.774-10.773 5.688-21.893 5.688h-19.28l-10.69-55h15.673zM98.67 77.557c-.895 0-1.745.4-2.314 1.092a3 3 0 0 0-.63 2.48l28.328 145.75a3 3 0 0 0 2.945 2.427h61.054c19.188 0 33.47-5.2 42.447-15.487 9.025-10.33 11.812-24.772 8.283-42.92-1.436-7.394-3.906-14.26-7.34-20.41-3.44-6.155-7.984-11.85-13.51-16.93-6.616-6.192-14.104-10.682-22.236-13.324-8.003-2.607-18.28-3.93-30.548-3.93h-24.722l-7.06-36.322a3 3 0 0 0-2.944-2.428H98.67z"></path><path d="M159.224 197.307h16.808c13.42 0 18.083-2.945 19.667-4.7 2.628-2.914 3.124-9.058 1.435-17.767-1.898-9.75-5.416-16.663-10.458-20.545-5.162-3.974-13.554-5.988-24.94-5.988H149.7l9.523 49zm28.83 35H127a6 6 0 0 1-5.889-4.855L92.783 81.7a6 6 0 0 1 5.889-7.144h31.75a6 6 0 0 1 5.89 4.855l6.588 33.895h22.25c12.582 0 23.174 1.372 31.48 4.077 8.54 2.775 16.4 7.48 23.354 13.984 5.752 5.292 10.5 11.232 14.08 17.657s6.17 13.594 7.668 21.302c3.715 19.104.697 34.402-8.97 45.466-9.572 10.958-24.614 16.514-44.706 16.514m-45.633-90h19.313c12.8 0 22.336 2.41 28.6 7.234s10.492 12.875 12.688 24.157c2.1 10.832 1.144 18.476-2.87 22.93s-12.06 6.68-24.12 6.68h-21.754l-11.856-61m45.633 84c18.367 0 31.766-4.82 40.188-14.46s10.957-23.098 7.597-40.375c-1.383-7.117-3.722-13.624-7.015-19.52s-7.602-11.293-12.922-16.184c-6.34-5.933-13.383-10.16-21.133-12.68-7.75-2.525-17.62-3.782-29.62-3.782h-27.196l-7.53-38.75h-31.75L127 226.307h61.055" fill="#fff"></path><path d="M311.583 116.307c-.896 0-1.745.4-2.314 1.092s-.802 1.6-.63 2.48l12.53 64.49c1.192 6.133.898 10.535-.827 12.395-1.056 1.137-4.228 3.044-13.607 3.044h-22.702l-15.755-81.072a3 3 0 0 0-2.945-2.428h-31.5a3 3 0 0 0-2.945 3.572l28.328 145.75a3 3 0 0 0 2.945 2.427h31.5a3 3 0 0 0 2.945-3.572l-6.836-35.178h24.422c18.605 0 31.22-3.28 38.57-10.028 7.5-6.884 9.827-17.89 6.947-32.72l-13.18-67.825a3 3 0 0 0-2.945-2.428h-32z"></path><path d="M293.66 271.057h-31.5a6 6 0 0 1-5.89-4.855l-28.328-145.75a6 6 0 0 1 5.89-7.144h31.5a6 6 0 0 1 5.89 4.855l15.283 78.645h20.23c9.363 0 11.328-2 11.407-2.086.568-.61 1.315-3.44.082-9.78l-12.53-64.49a6 6 0 0 1 5.89-7.144h32a6 6 0 0 1 5.89 4.855l13.18 67.825c3.093 15.92.447 27.864-7.86 35.5-7.928 7.28-21.208 10.82-40.6 10.82h-20.784l6.143 31.605a6 6 0 0 1-5.89 7.145m0-6l-7.53-38.75h28.062c17.657 0 29.836-3.082 36.54-9.238s8.71-16.14 6.032-29.938l-13.18-67.824h-32l12.53 64.488c1.426 7.336.902 12.34-1.574 15.008s-7.746 4.004-15.805 4.004H281.56l-16.226-83.5h-31.5l28.328 145.75h31.5" fill="#fff"></path><path d="M409.55 145.307c12.065 0 21.072 2.225 26.77 6.61 5.638 4.34 9.532 11.86 11.574 22.353 1.903 9.806 1.178 16.653-2.155 20.348-3.407 3.774-10.773 5.688-21.893 5.688h-19.28l-10.69-55h15.673zm-63.062-67.75c-.895 0-1.745.4-2.314 1.092a3 3 0 0 0-.631 2.48l28.328 145.75a3 3 0 0 0 2.946 2.427h61.053c19.19 0 33.47-5.2 42.448-15.487 9.025-10.33 11.81-24.77 8.283-42.92-1.438-7.394-3.907-14.26-7.342-20.41-3.44-6.155-7.984-11.85-13.51-16.93-6.616-6.192-14.104-10.682-22.236-13.324-8.003-2.607-18.28-3.93-30.548-3.93H388.24l-7.057-36.322a3 3 0 0 0-2.946-2.428h-31.75z"></path><path d="M407.04 197.307h16.808c13.42 0 18.083-2.945 19.667-4.7 2.63-2.914 3.125-9.058 1.435-17.766-1.898-9.75-5.417-16.664-10.458-20.546-5.162-3.974-13.554-5.988-24.94-5.988h-12.033l9.522 49zm28.83 35h-61.054a6 6 0 0 1-5.889-4.855L340.6 81.7a6 6 0 0 1 5.889-7.144h31.75a6 6 0 0 1 5.89 4.855l6.587 33.895h22.25c12.582 0 23.174 1.372 31.48 4.077 8.54 2.775 16.4 7.48 23.356 13.986 5.752 5.29 10.488 11.23 14.078 17.655s6.17 13.594 7.668 21.302c3.715 19.105.697 34.403-8.97 45.467-9.572 10.957-24.613 16.513-44.706 16.513m-45.632-90h19.312c12.8 0 22.336 2.41 28.6 7.234s10.492 12.875 12.688 24.157c2.102 10.832 1.145 18.476-2.87 22.93s-12.06 6.68-24.12 6.68h-21.754l-11.855-61m45.632 84c18.367 0 31.766-4.82 40.188-14.46s10.957-23.098 7.597-40.375c-1.383-7.117-3.722-13.624-7.015-19.52s-7.602-11.293-12.922-16.184c-6.34-5.933-13.383-10.16-21.133-12.68-7.75-2.525-17.62-3.782-29.62-3.782h-27.196l-7.53-38.75h-31.75l28.328 145.75h61.054" fill="#fff"></path></g></g></svg>`;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/icons/PHP.astro", void 0);

const $$Astro$3 = createAstro();
const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Skills;
  const TAGS = {
    JavaScript: {
      name: "JavaScript",
      class: "bg-black text-white",
      icon: $$JavaScript
    },
    TAILWIND: {
      name: "Tailwind",
      class: "bg-[#003159] text-white",
      icon: $$Tailwind
    },
    Github: {
      name: "Github",
      class: "bg-[#003159] text-white",
      icon: $$Github
    },
    HTML: {
      name: "HTML5",
      class: "bg-[#003159] text-white",
      icon: $$HTML
    },
    icoAstro: {
      name: "Astro",
      class: "bg-[#003159] text-white",
      icon: $$IcoAstro
    },
    Sass: {
      name: "Sass",
      class: "bg-[#003159] text-white",
      icon: $$Sass
    },
    React: {
      name: "React",
      class: "bg-[#003159] text-white",
      icon: $$React
    },
    Java: {
      name: "Java",
      class: "bg-[#003159] text-white",
      icon: $$Java
    },
    Angular: {
      name: "Angular",
      class: "bg-[#003159] text-white",
      icon: $$Angular
    },
    Docker: {
      name: "Docker",
      class: "bg-[#003159] text-white",
      icon: $$Docker
    },
    PHP: {
      name: "PHP",
      class: "bg-[#003159] text-white",
      icon: $$PHP
    }
  };
  const SkillsAdvance = [
    {
      tags: [TAGS.JavaScript]
    },
    {
      tags: [TAGS.Sass]
    },
    {
      tags: [TAGS.HTML]
    },
    {
      tags: [TAGS.Java]
    }
  ];
  const SkillsIntermedium = [
    {
      tags: [TAGS.TAILWIND]
    },
    {
      tags: [TAGS.Github]
    },
    {
      tags: [TAGS.PHP]
    },
    {
      tags: [TAGS.Docker]
    },
    {
      tags: [TAGS.icoAstro]
    }
  ];
  const SkillsBasic = [
    {
      tags: [TAGS.Angular]
    },
    {
      tags: [TAGS.React]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-ab4ihpzs> <div id="skills" class="flex items-center justify-center titleSkills" data-astro-cid-ab4ihpzs> <div class="titleSkill" data-astro-cid-ab4ihpzs> <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-code white" data-astro-cid-ab4ihpzs><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-ab4ihpzs></path><path d="M7 8l-4 4l4 4" data-astro-cid-ab4ihpzs></path><path d="M17 8l4 4l-4 4" data-astro-cid-ab4ihpzs></path><path d="M14 4l-4 16" data-astro-cid-ab4ihpzs></path></svg> <h3 data-astro-cid-ab4ihpzs>Skills</h3> </div> </div> <div class="flex items-center gap-y-10 justify-center flex-col" data-astro-cid-ab4ihpzs> <h4 class="text-2xl font-semibold text-yellow-400" data-astro-cid-ab4ihpzs>Avanzado</h4> <div class="flex flex-row skillsResponsive" data-astro-cid-ab4ihpzs> ${SkillsAdvance.map(({ tags }) => renderTemplate`<article class="flex flex-row space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0" data-astro-cid-ab4ihpzs> <div class="w-full md:w-1/2 md:max-w-lg" data-astro-cid-ab4ihpzs> <div class="flex flex-wrap mt-2" data-astro-cid-ab4ihpzs> <ul class="flex flex-row mb-2 gap-x-2" data-astro-cid-ab4ihpzs> ${tags.map((tag) => renderTemplate`<li data-astro-cid-ab4ihpzs> <span${addAttribute(
    "flex gap-x-2 rounded-full text-2xl ${tag.class} py-1 px-2 items-center flex ",
    "class"
  )} data-astro-cid-ab4ihpzs> ${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-12", "data-astro-cid-ab4ihpzs": true })} ${tag.name} </span> </li>`)} </ul> </div> </div> </article>`)} </div> <h4 class="text-2xl font-semibold text-yellow-400" data-astro-cid-ab4ihpzs>Intermedio</h4> <div class="flex flex-row skillsResponsive" data-astro-cid-ab4ihpzs> ${SkillsIntermedium.map(({ tags }) => renderTemplate`<article class="flex flex-row space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0" data-astro-cid-ab4ihpzs> <div class="w-full md:w-1/2 md:max-w-lg" data-astro-cid-ab4ihpzs> <div class="flex flex-wrap mt-2" data-astro-cid-ab4ihpzs> <ul class="flex flex-row mb-2 gap-x-2" data-astro-cid-ab4ihpzs> ${tags.map((tag) => renderTemplate`<li data-astro-cid-ab4ihpzs> <span${addAttribute(
    "flex gap-x-2 rounded-full text-2xl ${tag.class} py-1 px-2 items-center flex ",
    "class"
  )} data-astro-cid-ab4ihpzs> ${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-12", "data-astro-cid-ab4ihpzs": true })} ${tag.name} </span> </li>`)} </ul> </div> </div> </article>`)} </div> <h4 class="text-2xl font-semibold text-yellow-400" data-astro-cid-ab4ihpzs>Básico</h4> <div class="flex flex-row skillsResponsive" data-astro-cid-ab4ihpzs> ${SkillsBasic.map(({ tags }) => renderTemplate`<article class="flex flex-row space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0" data-astro-cid-ab4ihpzs> <div class="w-full md:w-1/2 md:max-w-lg" data-astro-cid-ab4ihpzs> <div class="flex flex-wrap mt-2" data-astro-cid-ab4ihpzs> <ul class="flex flex-row mb-2 gap-x-2" data-astro-cid-ab4ihpzs> ${tags.map((tag) => renderTemplate`<li data-astro-cid-ab4ihpzs> <span${addAttribute(
    "flex gap-x-2 rounded-full text-2xl ${tag.class} py-1 px-2 items-center flex ",
    "class"
  )} data-astro-cid-ab4ihpzs> ${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-12", "data-astro-cid-ab4ihpzs": true })} ${tag.name} </span> </li>`)} </ul> </div> </div> </article>`)} </div> </div> </section> `;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/components/Skills.astro", void 0);

const $$Astro$2 = createAstro();
const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, company, description, link, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]" data-astro-cid-p7b4wqop> <div class="relative pb-12 md:col-span-2" data-astro-cid-p7b4wqop> <div class="sticky top-0" data-astro-cid-p7b4wqop> <span class="text-yellow-400 -left-[42px] absolute rounded-full text-5xl" data-astro-cid-p7b4wqop>&bull;</span> <h3 class="text-xl font-bold text-yellow-400" data-astro-cid-p7b4wqop>${title}</h3> <h4 class="font-semibold text-xl" data-astro-cid-p7b4wqop>${company}</h4> <time class="p-0 m-0 text-sm" data-astro-cid-p7b4wqop>${date}</time> </div> </div> <div class="relative flex flex-col gap-2 pb-4 md:col-span-3" data-astro-cid-p7b4wqop> ${description} ${link && renderTemplate`${renderComponent($$result, "LinkInline", $$LinkInline, { "href": link, "data-astro-cid-p7b4wqop": true }, { "default": ($$result2) => renderTemplate`
Saber más${" "}<svg xmlns="http://www.w3.org/2000/svg" class="w-5 icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-p7b4wqop> ${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-p7b4wqop": true }, { "default": ($$result3) => renderTemplate` <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-p7b4wqop></path> <path d="M9 6l6 6l-6 6" data-astro-cid-p7b4wqop></path> ` })} </svg> ` })}`} </div> </div> `;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/components/ExperienceItem.astro", void 0);

const $$Experiencie = createComponent(($$result, $$props, $$slots) => {
  const EXPERIENCIE = [
    {
      date: "Actualidad",
      title: "Front-End Developer",
      company: "Thinkabit",
      description: "Desarrollos a medida, an\xE1lisis de peticiones, trato directo con los clientes. Implantaci\xF3n de medidas de integraci\xF3n continua y despliegue adem\xE1s de testing. "
    },
    {
      date: " Diciembre 2021 - Jun 2022",
      title: "Front-End Developer",
      company: "Indra (Minsait)",
      description: "Desarrollo en migraci\xF3n para cliente de banca privada, en entornos de trabajo Linux, trato directo con el cliente. "
    },
    {
      date: " Mar 2021 - Diciembre 2021",
      title: "Fullstack developer",
      company: "NTT Data",
      description: "Desarrollos completos de Back to Front, desde Java (Spring) a Angular 11, adem\xE1s de testing con jUnit. "
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col" data-astro-cid-fe4nazfd> <div class="flex" data-astro-cid-fe4nazfd> <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-fe4nazfd><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-fe4nazfd></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" data-astro-cid-fe4nazfd></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" data-astro-cid-fe4nazfd></path><path d="M12 12l0 .01" data-astro-cid-fe4nazfd></path><path d="M3 13a20 20 0 0 0 18 0" data-astro-cid-fe4nazfd></path></svg> <h3 data-astro-cid-fe4nazfd>Experiencia Laboral</h3> </div> <ol id="experiencie" class="relative mt-16" data-astro-cid-fe4nazfd> ${EXPERIENCIE.map((experiencie) => renderTemplate`<li class="" data-astro-cid-fe4nazfd> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experiencie, "data-astro-cid-fe4nazfd": true })} </li>`)} </ol> </div> `;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/components/Experiencie.astro", void 0);

const $$Astro$1 = createAstro();
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="flex flex-col" data-astro-cid-xmivup5a> <div class="flex items-center justify-center" data-astro-cid-xmivup5a> <svg${spreadAttributes(Astro2.props, void 0, { "class": "astro-xmivup5a" })} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xmivup5a><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-xmivup5a></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" data-astro-cid-xmivup5a></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4" data-astro-cid-xmivup5a></path><path d="M15 19l2 2l4 -4" data-astro-cid-xmivup5a></path></svg> <h3 data-astro-cid-xmivup5a>Sobre mí</h3> </div> <div class="flex gap-16 mt-10 abaoutme" data-astro-cid-xmivup5a> <article data-astro-cid-xmivup5a> <p data-astro-cid-xmivup5a>
¡Hola! Soy Jesús, llevo 3 años dedicándome al desarrollo software a
        nivel profesional, principalmente enfocado al desarrollo web, aunque
        también tengo experiencias en back-end.
</p> <p data-astro-cid-xmivup5a>
Además, estoy acostumbrado a tener trato directo con los respectivos
        clientes. Algo sobre mí que me gusta destacar es que, considero que soy
        autodidacta y tiene interés por nuevas tecnologías.
</p> <p data-astro-cid-xmivup5a>Si deseas seguir
        conociendo mi perfil... ¡tendrás que <strong class="text-yellow-400" data-astro-cid-xmivup5a>contactar</strong> conmigo!</p> </article> <article class="" data-astro-cid-xmivup5a> <p class="text-yellow-400 font-semibold" data-astro-cid-xmivup5a>Por aquí te dejo algunas opciones de contacto:</p> <div class="flex mb-8 items-center" data-astro-cid-xmivup5a> <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 49.4 512 399.42" data-astro-cid-xmivup5a> <g fill="none" fill-rule="evenodd" data-astro-cid-xmivup5a> <g fill-rule="nonzero" data-astro-cid-xmivup5a> <path fill="#4285f4" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z" data-astro-cid-xmivup5a></path> <path fill="#34a853" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z" data-astro-cid-xmivup5a></path> <path fill="#fbbc04" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z" data-astro-cid-xmivup5a></path> </g> <path fill="#ea4335" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z" data-astro-cid-xmivup5a></path> <path fill="#c5221f" fill-rule="nonzero" d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z" data-astro-cid-xmivup5a></path> </g> </svg> <a href="mailto:jesusjimenezfp@gmail.com" data-astro-cid-xmivup5a> jesusjimenezfp@gmail.com</a> </div> <div class="flex items-center" data-astro-cid-xmivup5a> <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" data-astro-cid-xmivup5a><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2" data-astro-cid-xmivup5a></path></svg> <a target="_blank" href="https://www.linkedin.com/in/jes%C3%BAs-jim%C3%A9nez-dillana-a0bb60159/" data-astro-cid-xmivup5a>
¡Descubre mi Linkedin!</a> </div> </article> </div> </section> `;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/components/Contact.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "Contact", $$Contact, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "Experiencie", $$Experiencie, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "Skills", $$Skills, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "Projects", $$Projects, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "Education", $$Education, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "Card", $$Card, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })}  </body></html>`;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "JJD | Jes\xFAs Jim\xE9nez Dillana", "description": "Programador Software", "data-astro-cid-j7pv25f6": true })} `;
}, "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/Jesus/Desktop/Aplicaciones/Astro/Portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
