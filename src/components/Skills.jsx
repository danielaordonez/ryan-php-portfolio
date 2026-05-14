import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiRedux,
  SiGraphql,
  SiTailwindcss,
  SiSass,
  SiVuedotjs,
  SiDocker,
  SiGit,
  SiExpo,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGithub,
  SiPostman,
  SiFigma,
  SiJest,
  SiWebpack,
  SiVite,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMysql,
  SiRedis,
  SiBootstrap,
  SiAdobexd,
  SiSketch,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiStorybook,
  SiCypress,
  SiSelenium,
  SiMocha,
  SiAngular,
  SiShopify,
  SiWordpress,
  SiSvelte,
  SiFlutter,
  SiKotlin,
  SiIonic,
  SiSwift,
  // SiJava,
  SiLaravel,
  SiPhp,
  SiSymfony,
  SiSpringboot,
  SiNestjs,
  SiOracle,
  SiAmazon,
  SiGoogle,
  SiKubernetes,
  SiJenkins,
  SiGitlab,
  SiPytorch,
  SiOpenai,
  SiGithubcopilot,
  SiClaude,
  // SiOracle,
} from 'react-icons/si'
import { 
  FaMobileAlt, 
  FaDatabase, 
  FaServer, 
  FaCode,
  FaPalette,
  FaCog,
  FaComments,
  FaLightbulb,
  FaCrown,
  FaRocket,
  FaUsers,
  FaHeart,
  FaBrain
} from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Technical')

  const tabs = [
    { name: 'Technical', icon: <FaCode /> },
    { name: 'Soft Skills', icon: <FaUsers /> },
    { name: 'Tools', icon: <FaCog /> }
  ]

  const technicalSkillsTop = [
    {
      title: 'PHP & Node Backend',
      icon: <SiPhp />,
      skills: [
        { name: 'PHP', icon: <SiPhp /> },
        { name: 'Laravel', icon: <SiLaravel /> },
        { name: 'Symfony', icon: <SiSymfony /> },
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'NestJS', icon: <SiNestjs /> },
        { name: 'Java / Spring Boot', icon: <SiSpringboot /> },
        { name: 'GraphQL', icon: <SiGraphql /> },
        { name: 'REST APIs', icon: <FaServer /> }
      ]
    },
    {
      title: 'Shopify & CMS',
      icon: <SiShopify />,
      skills: [
        { name: 'Shopify Plus', icon: <SiShopify /> },
        { name: 'Liquid & OS 2.0', icon: <SiShopify /> },
        { name: 'Hydrogen (Remix)', icon: <SiReact /> },
        { name: 'Storefront / Admin API', icon: <SiGraphql /> },
        { name: 'Metafields', icon: <SiShopify /> },
        { name: 'Checkout extensions', icon: <SiShopify /> },
        { name: 'Shopify Functions', icon: <SiShopify /> },
        { name: 'Theme & app extensions', icon: <SiShopify /> },
        { name: 'Apps & webhooks', icon: <SiNodedotjs /> },
        { name: 'WordPress / WooCommerce', icon: <SiWordpress /> }
      ]
    },
    {
      title: 'Frontend',
      icon: <FaCode />,
      skills: [
        { name: 'Vue.js', icon: <SiVuedotjs /> },
        { name: 'React', icon: <SiReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Angular', icon: <SiAngular /> },
        { name: 'Svelte', icon: <SiSvelte /> },
        { name: 'HTML5', icon: <SiHtml5 /> },
        { name: 'CSS3', icon: <SiCss3 /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Redux', icon: <SiRedux /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: <FaDatabase />,
      skills: [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Oracle', icon: <SiOracle /> },
        { name: 'Redis', icon: <SiRedis /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'AWS', icon: <SiAmazon /> },
        { name: 'Azure', icon: <SiOracle /> },
        { name: 'GCP', icon: <SiGoogle /> },
        { name: 'Docker', icon: <SiDocker /> },
        { name: 'Kubernetes', icon: <SiKubernetes /> },
        { name: 'CI/CD', icon: <SiJenkins /> }
      ]
    }
  ]

  const technicalSkillsBottom = [
    {
      title: 'Mobile',
      icon: <FaMobileAlt />,
      skills: [
        { name: 'React Native', icon: <SiReact /> },
        { name: 'Expo', icon: <SiExpo /> },
        { name: 'Flutter', icon: <SiFlutter /> },
        { name: 'Kotlin', icon: <SiKotlin /> },
        { name: 'Swift', icon: <SiSwift /> },
        { name: 'Ionic', icon: <SiIonic /> },
        { name: 'Redux', icon: <SiRedux /> },
        { name: 'TypeScript', icon: <SiTypescript /> }
      ]
    },
    {
      title: 'AI/ML',
      icon: <FaBrain />,
      skills: [
        { name: 'OpenAI', icon: <SiOpenai /> },
        { name: 'GitHub Copilot', icon: <SiGithubcopilot /> },
        { name: 'Claude', icon: <SiClaude /> },
        { name: 'PyTorch', icon: <SiPytorch /> },
        { name: 'LLM', icon: <FaBrain /> },
        { name: 'Python', icon: <SiPython /> },
        { name: 'TensorFlow', icon: <FaBrain /> },
        { name: 'Machine Learning', icon: <FaBrain /> }
      ]
    }
  ]

  const technicalSkillsAll = [...technicalSkillsTop, ...technicalSkillsBottom]

  const softSkills = [
    {
      title: 'Communication',
      icon: <FaComments />,
      description: 'Effective verbal and written communication with stakeholders, team members, and clients.'
    },
    {
      title: 'Problem Solving',
      icon: <FaLightbulb />,
      description: 'Analytical thinking and creative problem-solving abilities to tackle complex technical challenges.'
    },
    {
      title: 'Leadership',
      icon: <FaCrown />,
      description: 'Experience leading teams, mentoring junior developers, and driving project success.'
    },
    {
      title: 'Adaptability',
      icon: <FaRocket />,
      description: 'Quick learner with ability to adapt to new technologies and changing project requirements.'
    },
    {
      title: 'Team Collaboration',
      icon: <FaUsers />,
      description: 'Strong team player with experience in agile methodologies and cross-functional collaboration.'
    },
    {
      title: 'Attention to Detail',
      icon: <FaHeart />,
      description: 'Meticulous approach to code quality, testing, and delivering polished user experiences.'
    }
  ]

  const tools = [
    {
      title: 'Development Tools',
      icon: <FaCode />,
      tools: [
        { name: 'VS Code', icon: <FaCode /> },
        { name: 'Git', icon: <SiGit /> },
        { name: 'GitHub', icon: <SiGithub /> },
        { name: 'GitLab', icon: <SiGitlab /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'Webpack', icon: <SiWebpack /> },
        { name: 'Vite', icon: <SiVite /> },
        { name: 'npm', icon: <FaCode /> },
        { name: 'yarn', icon: <FaCode /> },
        { name: 'Docker', icon: <SiDocker /> }
      ]
    },
    {
      title: 'Design Tools',
      icon: <FaPalette />,
      tools: [
        { name: 'Figma', icon: <SiFigma /> },
        { name: 'Adobe XD', icon: <SiAdobexd /> },
        { name: 'Sketch', icon: <SiSketch /> },
        { name: 'Photoshop', icon: <SiAdobephotoshop /> },
        { name: 'Illustrator', icon: <SiAdobeillustrator /> },
        { name: 'Storybook', icon: <SiStorybook /> }
      ]
    },
    {
      title: 'Testing & Deployment',
      icon: <FaCog />,
      tools: [
        { name: 'Jest', icon: <SiJest /> },
        { name: 'Cypress', icon: <SiCypress /> },
        { name: 'Selenium', icon: <SiSelenium /> },
        { name: 'Mocha', icon: <SiMocha /> },
        { name: 'Testing Library', icon: <SiJest /> },
        { name: 'Jenkins', icon: <SiJenkins /> }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.p 
          className="skills-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          PHP-first backend engineering (Laravel, Symfony, Node.js), Vue and React frontends, and Shopify-led commerce—aligned from APIs to storefronts
        </motion.p>

        {/* Skill Tabs */}
        <motion.div 
          className="skill-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.name}
              className={`skill-tab ${activeTab === tab.name ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'Technical' && (
            <motion.div
              key="technical"
              className="skills-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="technical-grid-3x2">
                {technicalSkillsAll.map((category, index) => (
                  <motion.div
                    key={category.title}
                    className="skill-category-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    whileHover={{ y: -3 }}
                  >
                    <div className="category-header">
                      <div className="category-icon-circle">{category.icon}</div>
                      <h3 className="category-title-tech">{category.title}</h3>
                    </div>
                    <div
                      className={
                        category.title === 'Shopify & CMS' ||
                        category.title === 'PHP & Node Backend'
                          ? 'skills-list-tech skills-list-tech--layout-2x5'
                          : 'skills-list-tech'
                      }
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <div key={`${skill.name}-${skillIndex}`} className="skill-badge-with-icon">
                          <span className="skill-icon-small">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'Soft Skills' && (
            <motion.div
              key="soft-skills"
              className="skills-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="soft-skills-grid">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="soft-skill-card-compact"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                  >
                    <div className="soft-skill-icon-compact">{skill.icon}</div>
                    <h3 className="soft-skill-title-compact">{skill.title}</h3>
                    <p className="soft-skill-description-compact">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'Tools' && (
            <motion.div
              key="tools"
              className="skills-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="technical-grid-3">
                {tools.map((category, index) => (
                  <motion.div
                    key={index}
                    className="skill-category-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                  >
                    <div className="category-header">
                      <div className="category-icon-circle">{category.icon}</div>
                      <h3 className="category-title-tech">{category.title}</h3>
                    </div>
                    <div className="skills-list-tech">
                      {category.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="skill-badge-with-icon">
                          <span className="skill-icon-small">{tool.icon}</span>
                          <span>{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Skills
