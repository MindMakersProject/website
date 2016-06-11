
const team = [
  {
    src: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/MichelleEaster200x200.jpg?raw=true',
    name: 'Michelle Easter',
    role: 'Founder',
    type: 'Team',
    description: 'After working as a fashion model for years in the US, Europe, Asia and the Middle East, Michelle started college from scratch at the age of 26. She finished at the top of her class with a degree in Mechanical Engineering and now works as a Mechatronics Engineer for NASA\'s Jet Propulsion Laboratory. She believes strongly in the role of mentorship in providing a platform for success, and is passionate about sharing her education to empower people from all backgrounds. Michelle cares deeply about outreach and exposing children to atypical and minority role models with technical backgrounds.'
  },
  {
    src: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/IsisAnchalee200x200.jpg?raw=true',
    name: 'Isis Anchalee',
    role: 'Advisor',
    type: 'Team',
    description: 'Isis is an autodidactic software engineer at Uber, on the Advisory Board of Women Who Code, and the accidental founder of the global #iLookLikeAnEngineer movement. She works hard towards empowering people to be their best selves through spoken and written word, and redefining the term ISIS in the media. Born with opportunity that others do not have, she feels that she has a responsibility to give back to the world and create a positive impact in her communities. She believes that Mind Makers is important because it sets and example that anyone is capable of achieving technical greatness.'
  },
  {
    src: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/BobakFerdowsi200x200.jpg?raw=true',
    name: 'Bobak Ferdowski',
    role: 'Advisor',
    type: 'Team',
    description: 'Bobak is a member of the Flight System Engineering team on the Europa mission at NASA’s Jet Propulsion Laboratory, and system architect for Flight Software Product Line. His prior positions have included Launch, Cruise, Approach Engineering Lead and Flight Director on Mars Science Laboratory Curiosity, as well as Science Planner on the Cassini mission. Bobak has always wanted to find life elsewhere in our universe. He believes the future will require scientific and technical minds to tackle complex problems and that Mind Makers can both help individuals succeed and empower people to improve their world.'
  },
  {
    src: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/charles-dandino.jpg?raw=true',
    name: 'Charles Dandino',
    role: 'Advisor',
    type: 'Team',
    description: 'Mechanical engineer with experience on the Curiosity and Mars 2020 (future) Rovers, and currently working on the Asteroid Redirect Mission which will snatch a large asteroid out of orbit and put it in orbit around the moon for exploration. After nearly 20 years of boring schooling, Charles is eager to contribute to a fast-paced, hands-on STEAM learning project. Charles has learned more through projects and mentors than he has through books. Your results may vary, but probably not.'
  },
  {
    src: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/MelodySchuster200x200.jpg?raw=true',
    name: 'Melody Schuster',
    role: 'Operation\'s Manager',
    type: 'Team',
    description: 'Left her home town at age 17 to work as a model for years in cities including Milan, Paris, Hamburg, Los Angeles and Miami. After years of working in fashion, Melody began college and is now pursuing a career in Elementary Education, participating in an accelerated teaching credentials program. This will leave her in the ideal place to become an educator for children, which is where her true passion lies. She supports Mind Makers as a proponent of education and science for people of all ages. She believes in the importance of inspiring and motivating other people from all different backgrounds to do whatever they dream.'
  },
  {
    src: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/EricEspinosa200x200.jpg?raw=true',
    name: 'Eric Espinosa',
    role: 'Advisor & Sponsor',
    type: 'Sponsor',
    description: 'Eric is an executive producer for TEDx, CEO of the Creative Horizon Foundation, and Do Good Mafia. Eric’s career has spanned marketing, film, technology, innovation, and has been featured in media outlets such as TED.com, Wired, and FastCompany. Outside of work, Eric shares his passion by volunteering at various nonprofit organizations throughout Los Angeles, serves on the advisory board of LA Startup Week, Earth Angels, and as a mentor for USC’s Marshall School of Business, The School of Cinematic Arts, and at Union Station Homeless Services. Eric believes Mind Makers will enable dreamers and innovators to pursue what they once thought to be impossible.'
  },
  {
    src: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/CarlaHouston200x200.jpg?raw=true',
    name: 'Carla Houston',
    role: '',
    type: 'Volunteer Coordinator',
    description: 'Carla is an actress, model, Co-Founder of Earth Angels and serves on the board of the Grassroots Global Development Foundation. She is an avid volunteer, engaging and educating herself on the different opportunities available in her community while pursuing a career in acting. Carla now serves as President and Executive Director of Earth Angels, a non-profit organization which is focused on getting the community involved in service, solutions and one another. Carla supports this project because she believes that kids and adults alike will be learning from each other in ways that truly make a difference both educationally and behaviorally.'
  },
  {
    src: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/SinaJandscheidt200x200.jpg?raw=true',
    name: 'Sina Henrie',
    role: '',
    type: 'Volunteer Coordinator',
    description: 'Sina is Head of Community of Golden, an app to make volunteering effortless and to help nonprofit organizations work towards their mission. Sina, as well, has worked as model and actress for over a decade, allowing her to pursue higher education and to continuously find new ways to set a positive example for her peers. She\'s a talented motivator, capable of rallying teams and individuals to work enthusiastically toward a community goal. Sina believes that the Mind Makers project is a powerful tool to inspire individuals, break down stereotypes, awake curiosity, enable self-realization and give back to everyone involved.'
  },
  {
    src: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/ErikaEarl200x200.jpg?raw=true',
    name: 'Erika Earl',
    role: 'Exhibit Project Manager',
    type: 'Technical Leader',
    description: 'Erika is an Audio Engineer with over a decade of experience in designing, servicing, and maintaining audio electronics for professional recording studios. Her career highlights include, Director of Hardware Engineering at Slate Digital, Head of Technology / Sr. Technical Engineer at LA\'s legendary The Village Recording Studios, and a position on The Advisory Council for the Producers & Engineering Wing of The Recording Academy. Erika believes anyone with desire, discipline, and a little imagination can leave giant footprints and she sees the spirit of innovation and social activism in Mind Makers.'
  },
  {
    src: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/PhoebeRhodes-Wickett200x200.jpg?raw=true',
    name: 'Phoebe Rhodes-Wickett',
    role: 'Engineering Mentor Coordinator',
    type: 'Technical Leader',
    description: 'Phoebe is a mechanical engineer at NASA’s Jet Propulsion Laboratory who is heavily engaged in youth and adult outreach. She has been a mentor for young students through FIRST for four seasons and has also mentored adult students from her college after her graduation. In college she was the outreach lead for her rocketry team, planning and executing many events to encourage kids to pursue STEM and even taught rocket-building to the girls’ volleyball team that she coached. She supports Mind Makers as a program empowering people to believe they can do and be anything, that teaches society to view their fellow humans through eyes which look for potential and are blind to stereotypes.'
  },
  {
    src: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/MieszkoSalamon200x200.jpg?raw=true',
    name: 'Mieszko Salamon',
    role: 'Exhibit Design Coordinator',
    type: 'Technical Leader',
    description: 'Mieszko is a mechanical engineer at NASA\'s Jet Propulsion Laboratory who is passionate about science and volunteering, working with the Boy Scouts of America and mentoring for FIRST. He enjoys working on cars and coming up with new inventions and hopes to never stop learning and sharing his experiences with the world. Through participating in the Mind Makers project, Mieszko wants to help show young minds that curiosity to learn how things work can not only lead to a successful career but can actually be really cool.'
  },
  {
    src: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/TaylorHalsey200x200.jpg?raw=true',
    name: 'Taylor Halsey',
    role: 'Education Coordinator',
    type: 'Technical Leader',
    description: 'Taylor is a Masters student at Cal Poly Pomona, studying Microbiology and Biotechnology. Her first introduction to STEM came from participating on an all-female FIRST Robotics team in high school, to which she has returned to serve as a mentor for the past four years. Taylor volunteers with LA FIRST Tech Challenge as Team Communications Director and board member for the 501(c)3 Robotics Boosters of Southern California. She is thrilled to be a part of Mind Makers because she too once believed that STEM professions were out of her reach. She was encouraged through mentorship and exposure and aims to inspire STEM confidence and passion in the project participants.'
  },
  {
    src: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/NathanEsquenazi200x200.jpg?raw=true',
    name: 'Nathan Esquenazi',
    role: 'Educational Advisor',
    type: 'Codepath',
    description: 'Nathan is a co-founder and Lead Android Instructor at CodePath. He has developed curriculums and content used by companies like Dropbox, Hipmunk and Yahoo to efficiently ramp up professional engineers on Android development and is also the primary author of CodePath\'s popular Open Source Android Guides used by hundreds of thousands of Android developers each month. Prior to CodePath, Nathan founded and worked at early-stage startups for over a decade developing across web, mobile, and desktop platforms.'
  },
  {
    src: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/MichaelEllison200x200.jpg?raw=true',
    name: 'Michael Ellison',
    role: 'Educational Advisor',
    type: 'Codepath',
    description: 'Michael is currently the Chief Operating Officer of CodePath where he leads product, operations, and business development. CodePath is an education technology startup that teaches accelerated programming classes to engineers and designers across many of the top technology companies in the world. CodePath also aggressively provides free programming classes across high schools, colleges and universities, and a handful of countries in the developing world. Prior to CodePath, Michael founded 3 social enterprises and was an Entrepreneur in Residence at Riviera Partners. Michael is also a founding board member for Women Who Code.'
  },
  {
    src: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/JulieMackBoyce200x200.jpg?raw=true',
    name: 'Julie Mack Boyce',
    role: '',
    type: 'Designer',
    description: 'With more than a decade’s worth of experience encompassing print media, branding/identity work, illustration, and production management, Julie sees where emotion and technology intersect to create a larger world for everyone. She works to help others share their stories through visual architecture and nuanced messaging. She supports Mind Makers as part of the new wave of education, where any individual can become part of a community that empowers each to grow, learn, and make the world a brighter place.'
  },
  {
    src: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/JuanManuelCornejo200x200.jpg?raw=true',
    name: 'Juan Manuel Cornejo',
    role: '',
    type: 'Designer',
    description: 'Sound engineer and autodidactic designer and developer. Juan has worked on projects ranging from acoustic research and education to UX/UI in productivity apps, in Spain, France and Ecuador. He recently founded IncaDevs, a community for Ecuadorian developers to give back to the community through software and is currently developing Rocotoco, an app to enable people in the city to connect directly to local farmers. He believes that Mind Makers can change the shape and course of the world by showing people the empowering nature of engineering and the magnificence of sharing knowledge with others.'
  },
  {
    src: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/CherStewart200x200.jpg?raw=true',
    name: 'Cher Stewart',
    role: 'Software Engineer',
    type: 'Technical Leader',
    description: "Cher is an autodidactic full-stack software engineer, currently at Blizzard Entertainment. Cher began teaching herself web markup languages in the late 1990's when she was just fifteen years old. She has always eagerly worked on small, non-paying web applications for many causes and organizations with the purpose to help others; simultaneously growing her career. Cher is driven by a thirst for knowledge, experimentation and connection the universe. Passionately curious and in love with the cosmos, she studied astrophysics, medical physics and mathematics at the University of Missouri."
  }
]

export default team
