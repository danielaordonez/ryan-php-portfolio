import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const paragraphs = [
    <>
      Senior Full Stack Engineer with <strong>6+ years</strong> of experience building scalable{' '}
      <strong>fintech</strong>, <strong>SaaS</strong>, <strong>blockchain</strong>, <strong>AI-powered</strong>,{' '}
      <strong>Shopify</strong>, and <strong>enterprise</strong> platforms. <strong>PHP</strong> is my first language; I
      lean on <strong>Laravel</strong> and <strong>Symfony</strong> for robust backends, pair them with{' '}
      <strong>Vue.js</strong> and <strong>React</strong> (and <strong>Node.js</strong> when the product calls for it),
      and use <strong>Java</strong> with <strong>Spring Boot</strong> where enterprise stacks require it—across startup,
      consulting, and enterprise delivery.
    </>,
    <>
      Strong <strong>eCommerce</strong>, <strong>blockchain</strong>, and <strong>fintech</strong> domain experience:
      crypto trading surfaces, wallet systems, transaction monitoring dashboards, payment workflows,{' '}
      <strong>DeFi</strong> integrations, and operational tooling—with emphasis on <strong>security</strong>,{' '}
      <strong>performance</strong>, and <strong>real-time data</strong>. Hands-on with <strong>Shopify Plus</strong>,{' '}
      <strong>WordPress</strong>, <strong>WooCommerce</strong>, and <strong>headless commerce</strong>: apps,{' '}
      <strong>Liquid</strong> customization, gateway and CRM integrations, CMS-driven storefronts, and API-driven
      automation.
    </>,
    <>
      I translate <strong>Figma</strong> and product design into responsive, accessible UIs using{' '}
      <strong>Vue.js</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>HTML5</strong>, and{' '}
      <strong>CSS3</strong>, with attention to <strong>Core Web Vitals</strong> and frontend performance. On the server
      side I ship <strong>REST</strong> and <strong>GraphQL</strong> services, authentication, workflow automation, CMS
      integrations, and internal tools backed by <strong>MySQL</strong>, <strong>PostgreSQL</strong>,{' '}
      <strong>MongoDB</strong>, <strong>Redis</strong>, <strong>Kafka</strong>, and <strong>RabbitMQ</strong>—including
      thoughtful schema design, query optimization, and secure transactional flows.
    </>,
    <>
      I embed <strong>AI</strong> where it helps the business: <strong>OpenAI</strong>, <strong>RAG</strong>, agents,
      recommendations, and automation inside commerce and SaaS. For delivery I work comfortably in Linux-based
      environments with <strong>AWS</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>,{' '}
      <strong>GitHub Actions</strong>, <strong>GitLab CI/CD</strong>, <strong>Vercel</strong>, <strong>ECS</strong>, and{' '}
      <strong>CloudFront</strong>—shipping maintainable systems through architecture discussion, code review, and
      mentoring in fast-moving teams.
    </>,
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="title-highlight">Me</span>
        </motion.h2>

        <div className="about-wrapper">
          <div className="about-content">
            {paragraphs.map((content, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                {content}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
