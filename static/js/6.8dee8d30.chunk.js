(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[6],{175:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(5),r=n(20),c=n(0),o=function(e){var t=e.data;return Object(c.jsx)("article",{className:"degree-container",children:Object(c.jsxs)("header",{children:[Object(c.jsx)("h4",{className:"degree",children:t.degree}),Object(c.jsxs)("p",{className:"school",children:[Object(c.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},s=function(e){var t=e.data;return Object(c.jsxs)("div",{className:"education",children:[Object(c.jsx)("div",{className:"link-to",id:"education"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(c.jsx)(o,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(e){var t=e.data;return Object(c.jsx)("article",{className:"degree-container",children:Object(c.jsxs)("header",{children:[Object(c.jsx)("h4",{className:"degree",children:t.degree}),Object(c.jsxs)("p",{className:"school",children:[Object(c.jsx)("a",{href:t.link,children:t.establishment}),", ",t.year]})]})})},m=function(e){var t=e.data;return Object(c.jsxs)("div",{className:"education",children:[Object(c.jsx)("div",{className:"link-to",id:"other%20education"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Other Education"})}),t.map((function(e){return Object(c.jsx)(u,{data:e},e.school)}))]})};m.defaultProps={data:[]};var p=m,d=function(e){var t=e.data;return Object(c.jsxs)("article",{className:"jobs-container",children:[Object(c.jsxs)("header",{children:[Object(c.jsxs)("h4",{children:[Object(c.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(c.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(c.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(c.jsx)("li",{children:e},e)}))})]})},y=function(e){var t=e.data;return Object(c.jsxs)("div",{className:"experience",children:[Object(c.jsx)("div",{className:"link-to",id:"experience"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(c.jsx)(d,{data:e},e.company)}))]})};y.defaultProps={data:[]};var b=y,h=function(e){var t=e.data;return Object(c.jsxs)("article",{className:"jobs-container",children:[Object(c.jsxs)("header",{children:[Object(c.jsxs)("h4",{children:[Object(c.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(c.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(c.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(c.jsx)("li",{children:e},e)}))})]})},g=function(e){var t=e.data;return Object(c.jsxs)("div",{className:"experience",children:[Object(c.jsx)("div",{className:"link-to",id:"other%20experience"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Other Experience"})}),t.map((function(e){return Object(c.jsx)(h,{data:e},e.company)}))]})};g.defaultProps={data:[]};var j=g;function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var v=n(22);function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var k=n(77);function S(e,t){if(t&&("object"===Object(k.a)(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=O(e);if(t){var i=O(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return S(this,n)}}var x=n(61),P=n(60),C=function(e){var t=e.handleClick,n=e.active,a=e.label;return Object(c.jsx)("button",{className:"skillbutton ".concat(n[a]?"skillbutton-active":""),type:"button",onClick:function(){return t(a)},children:a})},D=function(e){var t=e.data,n=e.categories,a=t.category,i=t.competency,r=t.title,o={background:n.filter((function(e){return a.includes(e.name)})).map((function(e){return e.color}))[0]},s=Object(P.a)(Object(P.a)({},o),{},{width:"".concat(String(Math.min(100,Math.max(i/5*100,0))),"%")});return Object(c.jsxs)("div",{className:"skillbar clearfix",children:[Object(c.jsx)("div",{className:"skillbar-title",style:o,children:Object(c.jsx)("span",{children:r})}),Object(c.jsx)("div",{className:"skillbar-bar",style:s}),Object(c.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};D.defaultProps={categories:[]};var w=D,N=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Object(v.a)(e,t)}(r,e);var t,n,a,i=A(r);function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=i.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,a){return Object(P.a)(Object(P.a)({},n),{},Object(x.a)({},a,e===a&&!t.buttons[a]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(P.a)(Object(P.a)({},e),{},Object(x.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=r,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(c.jsx)(w,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(c.jsx)(C,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"skills",children:[Object(c.jsx)("div",{className:"link-to",id:"skills"}),Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h3",{children:"Skills"}),Object(c.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),Object(c.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(c.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&f(t.prototype,n),a&&f(t,a),Object.defineProperty(t,"prototype",{writable:!1}),r}(a.Component);N.defaultProps={skills:[],categories:[]};var E=N,W=function(e){var t=e.data,n=e.last;return Object(c.jsxs)("li",{className:"course-container",children:[Object(c.jsxs)("a",{href:t.link,children:[Object(c.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(c.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(c.jsx)("div",{className:"course-dot",children:Object(c.jsx)("p",{className:"course-name",children:" \u2022"})})]})};W.defaultProps={last:!1};var L=W,U=function(e){var t,n=e.data;return Object(c.jsxs)("div",{className:"courses",children:[Object(c.jsx)("div",{className:"link-to",id:"courses"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Selected Courses"})}),Object(c.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(c.jsx)(L,{data:e,last:n===t.length-1},e.title)})))})]})};U.defaultProps={data:[]};var T=U,M=function(){return Object(c.jsxs)("div",{className:"references",children:[Object(c.jsx)("div",{className:"link-to",id:"references"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)(i.b,{to:"/contact",children:Object(c.jsx)("h3",{children:"References are available upon request"})})})]})},I=[{title:"Discrete Mathematics",number:"CS 111",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Introduction to Computer Science",number:"CS 110",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Calculus I",number:"CS 100",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Introduction to Bioscience and its Impact on Research Business and Society",number:"CSE 162",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"History of the Modern World",number:"CHSS 128",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Calculus 2",number:"CS 101",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Linear Algebra",number:"CS 104",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Introduction to Object-Oriented Programming",number:"CS 120",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Data Mining",number:"CSE 241",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Mechanics",number:"CS 140",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Data Structures",number:"CSE 121",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Calculus 3",number:"CS 102",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Real Analysis",number:"CS 103",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Computer Organization",number:"CS 130",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Introduction to Political Science",number:"PSIA 101",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Introduction to Algorithms",number:"CS 211",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Ordinary Differential Equations",number:"CS 105",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Introduction to Philosophy",number:"CHSS 110",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Probability",number:"CS 107",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Numerical Analysis",number:"CS 112",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Optimization",number:"CS 213",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Statistics",number:"CS 108",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Data Science",number:"CS 252",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Artificial Intelligence: Decision Support",number:"CS 246",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Trade",number:"CHSS 282",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Social, Legal & Ethical Environment of Business",number:"BUS 112",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Database Systems",number:"CS 222",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"The Human Brain",number:"CSE 264",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Information Visualizations",number:"CS 375",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Machine Learning",number:"CS 251",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Theory of Communication Networks",number:"CS 132 ",link:"https://cse.aua.am/courses/",univerity:"AUA"},{title:"Philosophy, Politics and Economics Seminar",number:"CHSS 210",link:"https://cse.aua.am/courses/",univerity:"AUA"}],R=[{school:"American University of Armenia",degree:"BS in Computer Science",link:"https://aua.am/",year:2020},{school:"American University of Armenia",degree:"Minor in Philosophy, Politics, & Economics (PPE)",link:"https://aua.am/",year:2020},{school:"Hakob Kojoyan Art Educational Complex",degree:"High School",link:"https://kojoyan.schoolsite.am/",year:2015}],B=[{company:"Dabble Lab",position:"Software Developer",link:"http://dabblelab.com",daterange:"December 2019 - Present",points:["Leading Teams and Maintaining Projects","Developing and maintaining fullstack applications","Working on Data Science and Data Engineering projects","Working on backend technologies such as Node.js, Express, MongoDB, and PostgreSQL","Involved in development with various technologies"]},{company:"TutWiser",position:"Cofounder, C.E.O.",link:"https://tutwiser.com",daterange:"September 2019 - 2020",points:["Created a system for private education sector.","Participated in EPIC incubation program.","Won second place at Startup Boost Weekend"]}],H=[{establishment:"Romanos Melikyan State Musical College",degree:"Piano Student",year:2011},{establishment:"Tumo Center for Creative Technologies",degree:"Member",link:"https://tumo.org/",year:2015},{establishment:"OWASP Armenia",degree:"Cyber Security Trainee",link:"https://owasp.org/www-chapter-armenia/",year:2016},{establishment:"PicsArt Armenia",degree:"Machine Learning Trainee",link:"https://picsart.com/",year:2017},{establishment:"FAST Foundation",degree:"Machine Learning Trainee",link:"https://fast.foundation/",year:2019},{establishment:"Nooor \u2013 Armenian Blockchain Association",degree:"Blockchain Trainee",link:"https://nooor.io/",year:2020}],z=[{company:"Entrepreneurship and Product Innovation Center",position:"Resident and Alumni",link:"https://epic.aua.am/",daterange:"2019 - 2020",points:["Our team was a resident startup at EPIC incubator.","We were developing entrepreneurial skills and creating our business."]},{company:"ISTC Foundation",position:"Participant of Data Science Datathon.",link:"https://www.istc.am/",daterange:"2019",points:["Developed a deep supervised learning solution for classification of telomeric sequences."]},{company:"Open Government Data Hackathon",position:"Participant and 2nd Place Winner.",daterange:"2019",points:["Won 2nd place and was awarded with financial prize and opportunities of partnership with government institutions for suggesting a feedback system for ambulance services.","During the 2-day hackathon we developed a web-app to provide a comprehensive feedback system for ambulance service users with convenient user ID database lookup, accessible interface and user SMS verification."]},{company:"Startup Boost Weekend",position:"Participant and Winner of SBW",link:"http://sbw.am/",daterange:"2018 and 2019",points:["Participated and presented original startup ideas.","Won 2nd place in SBW 2019."]},{company:"AEGEE-Yerevan",position:"Participant of AMEU 2016",link:"https://www.facebook.com/AEGEE.Yerevan/",daterange:"2016",points:["Was part of the ECON Committee.","Was a spokesperson of the Committee."]},{company:"FINTEGRATION",position:"Participant of Financial Technologies Hackathon",daterange:"2016",points:["Developed and presented a currency price prediction model."]},{company:"EYP Armenia",position:"Participant of AYSOR 2017",link:"https://www.members.eyp.org/national-committees/eyp-armenia",daterange:"2017",points:["Was part of the ECON Committee.","Was a spokesperson of the Committee."]},{company:"EYP Armenia",position:"Organizer of FIND 2017",link:"https://www.members.eyp.org/national-committees/eyp-armenia",daterange:"2017",points:["Was part of organizing team of the conference.","Handled the organizational tasks related to venues and logistics."]},{company:"EYP Armenia",position:"Trainee",link:"https://www.members.eyp.org/national-committees/eyp-armenia",daterange:"2017",points:["Participated in the training for organizers."]},{company:"EYP Romania",position:"Participant of ORADEA 2017",link:"https://www.eypromania.eu/en/",daterange:"2017",points:["Was part of the DROI Committee.","Was a spokesperson of the Committee."]},{company:"EYP Armenia",position:"Organizer of IEFA 2017",link:"https://www.members.eyp.org/national-committees/eyp-armenia",daterange:"2017",points:["Was part of organizing team of the conference.","Handled the organizational tasks related to venues and logistics."]}],J=n(17);var G=n(23);var F,Y=[{title:"Javascript",competency:4,category:["Web Development","Programming Languages","Javascript"]},{title:"Node.js",competency:4,category:["Web Development","Javascript"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"Next.js",competency:4,category:["Web Development","Javascript"]},{title:"Prisma",competency:4,category:["Databases","Web Development","Javascript"]},{title:"Sequelize",competency:4,category:["Databases","Web Development","Javascript"]},{title:"Docker",competency:4,category:["Tools"]},{title:"Bash",competency:2,category:["Tools","Programming Languages"]},{title:"Amazon Web Services",competency:4,category:["Web Development","Tools"]},{title:"Puppeteer",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Databases","Web Development"]},{title:"Angular",competency:2,category:["Web Development","Javascript"]},{title:"MySQL/PostgreSQL/SQLite3/SQL",competency:4,category:["Databases","Web Development","Programming Languages"]},{title:"Matlab",competency:3,category:["Data Science","Data Engineering","Programming Languages"]},{title:"Data Mining",competency:3,category:["Data Science"]},{title:"Express.js",competency:4,category:["Web Development","Javascript"]},{title:"GPT-3",competency:3,category:["Data Science"]},{title:"Alexa Skills",competency:4,category:["Smart Assistants","SMS/Communication"]},{title:"Twilio",competency:4,category:["Smart Assistants","SMS/Communication"]},{title:"Flask",competency:2,category:["Web Development","Python"]},{title:"Git",competency:4,category:["Tools"]},{title:"Google Cloud Compute",competency:3,category:["Tools","Web Development"]},{title:"Kubernetes",competency:2,category:["Tools","Data Engineering"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python"]},{title:"Tensorflow + Keras",competency:3,category:["Data Science","Python"]},{title:"Jupyter",competency:4,category:["Data Science","Python"]},{title:"Typescript",competency:2,category:["Web Development","Programming Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:2,category:["Web Development","Programming Languages"]},{title:"Python",competency:5,category:["Programming Languages","Python"]},{title:"C++",competency:3,category:["Programming Languages"]},{title:"Go",competency:2,category:["Programming Languages"]},{title:"MATLAB",competency:2,category:["Programming Languages"]},{title:"R",competency:4,category:["Programming Languages","Data Science"]},{title:"Data Visualization",competency:3,category:["Data Science","Data Engineering"]},{title:"GraphQL",competency:3,category:["Web Development","Databases"]},{title:"Pandas",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","Data Science","Python"]},{title:"Hadoop",competency:2,category:["Data Engineering","Data Science"]},{title:"PyTorch",competency:3,category:["Data Science","Python"]},{title:"Photoshop",competency:3,category:["Media"]},{title:"Lightroom",competency:3,category:["Media"]},{title:"Premiere Pro",competency:4,category:["Media"]},{title:"Java",competency:3,category:["Programming Languages"]},{title:"Assembly",competency:2,category:["Programming Languages"]},{title:"Public Speaking",competency:4,category:["Other"]},{title:"Piano",competency:4,category:["Other"]},{title:"Guitar",competency:2,category:["Other"]},{title:"Microsoft Office",competency:4,category:["Other"]},{title:"GNU/Linux",competency:4,category:["Tools"]},{title:"Armenian",competency:5,category:["Languages"]},{title:"English",competency:5,category:["Languages"]},{title:"Russian",competency:5,category:["Languages"]},{title:"German",competency:4,category:["Languages"]},{title:"French",competency:1,category:["Languages"]}].map((function(e){return Object(P.a)(Object(P.a)({},e),{},{category:e.category.sort()})})),Q=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b","#32b347","#f2ec44"],q=(F=new Set(Y.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(J.a)(e)}(F)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(F)||Object(G.a)(F)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:Q[t]}})),_=["Education","Other Education","Experience","Other Experience","Skills","Courses","References"];t.default=function(){return Object(c.jsx)(r.a,{title:"Resume",description:"Mark Hovsepyan's Resume.",children:Object(c.jsxs)("article",{className:"post",id:"resume",children:[Object(c.jsx)("header",{children:Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h2",{"data-testid":"heading",children:Object(c.jsx)(i.b,{to:"resume",children:"Resume"})}),Object(c.jsx)("div",{className:"link-container",children:_.map((function(e){return Object(c.jsx)("h4",{children:Object(c.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(c.jsx)(l,{data:R}),Object(c.jsx)(p,{data:H}),Object(c.jsx)(b,{data:B}),Object(c.jsx)(j,{data:z}),Object(c.jsx)(E,{skills:Y,categories:q}),Object(c.jsx)(T,{data:I}),Object(c.jsx)(M,{})]})})}},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(61);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},61:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},77:function(e,t,n){"use strict";function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=6.8dee8d30.chunk.js.map