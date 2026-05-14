import { motion } from 'framer-motion'
import {
  SiShopify,
  SiNodedotjs,
  SiEthereum,
  SiOpenai,
  SiPhp,
  SiLaravel
} from 'react-icons/si'
import { FaCode } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: (
        <span className="service-icon-stack">
          <SiPhp />
          <SiLaravel />
          <SiNodedotjs />
        </span>
      ),
      title: 'PHP, Laravel & Node.js Backend',
      description:
        'PHP as a first-language foundation: Laravel and Symfony services, secure REST and GraphQL APIs, auth and transactional workflows, microservices, and Node.js (Express, NestJS) where the stack calls for it—paired with MySQL, PostgreSQL, Redis, Kafka, and RabbitMQ.'
    },
    {
      icon: <SiShopify />,
      title: 'Shopify & Commerce',
      description:
        'Shopify Plus, custom themes, Liquid, Hydrogen and headless storefronts, checkout extensions, subscription flows, performance and Core Web Vitals, plus integrations with REST/GraphQL, webhooks, and OAuth for production-grade merchant experiences.'
    },
    {
      icon: <FaCode />,
      title: 'Frontend (Vue & React)',
      description:
        'Vue.js and React (including Next.js) from Figma—reusable components, Tailwind and modern CSS, accessibility, SEO, and fast responsive UIs for commerce, SaaS, and internal tools.'
    },
    {
      icon: <SiNodedotjs />,
      title: 'Fullstack Development',
      description:
        'End-to-end delivery: Laravel or Node APIs with Vue or React clients, Shopify and headless commerce, CMS and WordPress when needed, and cohesive architecture for growing teams.'
    },
    {
      icon: <SiOpenai />,
      title: 'AI & Automation',
      description:
        'OpenAI, RAG pipelines, agents, recommendations, and intelligent workflows embedded into commerce and SaaS products.'
    },
    {
      icon: <SiEthereum />,
      title: 'Blockchain & Web3',
      description:
        'DApps, smart contracts, NFT and DeFi experiences with Ethereum and Solidity when projects need on-chain features.'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What I Build
        </motion.h2>

        <motion.p
          className="services-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          PHP-first backend and APIs (Laravel, Symfony, Node.js), Vue and React frontends, and Shopify-led commerce—from architecture through CI/CD and production operations.
        </motion.p>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card-professional"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="service-icon-professional">{service.icon}</div>
              <h3 className="service-title-professional">{service.title}</h3>
              <p className="service-description-professional">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
