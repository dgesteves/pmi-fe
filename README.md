# PmiFe

## PMI FE decomposing use case:

**Synopsis**: PMI has engaged into a digital transformation process which aims to transform
both the organizational landscape and the technology landscape, aiming to transition
towards a Product Based Organization.

Under the current setup, the company is running a platform that enables the entire digital
portfolio and our intent is to decompose the platform in more specific and targeted
products.

As a starting point, we have decided to decompose out Face to Face technologies first into
different product areas, as follows:

- Field Force Application
- Direct Retail Application
- Indirect Retail Application
- Direct Retail POS Application

These applications offer the same functionality including, but not limited to:

- Consumer Registration
- Interaction gathering
- Sales on spot
- Stock tracking
- Data + Privacy

The reason for decomposition is to give more freedom to each of these streams so that they
can shape their own application experience and tailor fit these applications to market /
regions needs. Because of this, it is important not to have dependencies between these
applications that will slow down changes in the future.

The expectations for this decomposition efforts are as follows:

- We want to achieve a consistent look and feel across these applications, despite
  multiple teams working on them.
- We want to be cost efficient with the engineering process and reuse as much as
  possible between the teams, without creating dependencies.
- We want any of the product groups to be able to deploy their applications in isolation
- We want the teams to be accountable end to end for a piece of functionality,
  backend to front-end
- We want the teams to operate under a “you build it, you run it mantra”
  The ask: Focusing first and foremost on the front-end aspects, deliver a strategy that would
  lead to us achieving our decomposition efforts of Face-to-Face solutions, in a format of your
  choosing (Presentation, documentation, proof of concept, etc).
  Considerations:

- The strategy should focus mostly on the front-end engineering aspects
- The strategy should be able to be implemented in an agile, iterative approach
- The current applications have to continue to be operational throughout the
  transformation process and not impact customer experience or revenue
- The strategy should cover organization, processes and technology as a minimum

## Solution:

<img width="2495" alt="Screenshot 2023-09-24 at 20 06 14" src="https://github.com/dgesteves/pmi-fe/assets/34245953/d0dd9f4c-d4ca-4751-a71f-61627746ab1f">
<img width="2495" alt="Screenshot 2023-09-24 at 20 06 57" src="https://github.com/dgesteves/pmi-fe/assets/34245953/290c7652-bbf2-4acb-a573-1e4f21de7e5a">

### To achieve the decomposition of Face-to-Face solutions into separate product areas I suggest two possible solutions:

1. First approach uses a monorepo with decoupled applications that consume shared libraries and services, and can be deployed separately. Using a website that takes care of branding and marketing, and standalone applications for each area or product. this applications can be assessed directly by accessing there specific domain or routed from the marketing and branding website.
2. Second approach uses a micro frontend architecture, where there is a shell application or host that has a remote application for each product area defined on the use case, and each of those applications consume shared libraries and services, and can be deployed separately.

### Both of those options have pros and cons

Application using a micro frontend architecture tend to be slower since they are imported dynamically at run time, they can make the development process more complex, and they are harder to test E2E.
In the other hand the monorepo approach with an standalone application for each product area or product can be harder to migrate to if there is already independent libraries and services polished or if the current platform is rendering those products or product areas side by side n the same main application, and introduces more complexity at a CI/CD level.

### Organisation:

- **Team Formation**: Create cross-functional teams for each product area (Field Force Application, Direct Retail Application, Indirect Retail Application, Direct Retail POS Application). Each team should include front-end and back-end developers, UX/UI designers, testers, and product owners.
- **Ownership**: Assign clear ownership of each product area to a specific team. those teams should be responsible for the end-to-end development and operation of their respective applications.

### Processes:

- **Design System**: Develop a design system and UI/UX guidelines that ensure a consistent look and feel across all applications. This system should include reusable components, styles, and design patterns.
- **Code Standards**: Establish coding standards and best practices for front-end development. Ensure that all teams adhere to these standards to maintain consistency.
- **Shared Libraries**: Develop and maintain shared libraries for common functionalities like user registration, interaction gathering, and data privacy. These libraries can be versioned and used by all teams.
- **Testing**: Each team should be responsible for creating and maintaining there own unit, integration and e2e test, and the consumed libraries and services if any change is made.
- **CI/CD Pipeline**: Implement a robust Continuous Integration and Continuous Deployment (CI/CD) pipeline for each team. Automate testing, building, and deployment processes to ensure efficiency.
- **Monitoring and Alerts**: Implement comprehensive monitoring and alerting systems for each application. Teams should monitor their applications' performance and address issues promptly.
- **Agile**: Each team should use an Agile development methodology (Scrum or Kanban) to facilitate iterative development and continuous improvement cycles. after each cycle each team should have feedback loop with the product team by demoing what was archived during that cycle to gather insights and continuously refine the applications based on product vision and users feedback.
- **Phased Decomposition**: Decomposition should be dine in phases, using feature flags to ensure that the current applications remain operational during the transition and allow region or specific clients transition defined by the product team.
- **Documentation**: Maintain comprehensive documentation for each application, including architecture diagrams, API documentation, and deployment instructions across teams.
- **Application metrics and user interaction**: Each team should use Performance Indicators to measure the success of the decomposition efforts. Monitor metrics related to user satisfaction, application uptime, and development efficiency.

### Technologies:

- NX for monorepo tooling
- TypeScript as compiled typed language
- Next.js 13 as a React.js framework
- Cypress as a E2E testing tool
- jest as a unit and integration test runner
- React testing library as a assertion library
- Styled components as a CSS-in-JS solution (optional)
- Eslint as code analyses and syntax linter tool
- Prettier as a code formatter
- AWS Amplify as a full stack serverless cloud solution (optional)
- Next-Auth for user authentication (optional)
- LaunchDarkly as a feature flag tool (optional)
- MixPanel as a user analytics tool (optional)
- Sentry as a application monitoring tool (optional)
- Node.js as javaScript runtime
- Webpack as a bundler
- Babel as a polyfiller and transpiler
- CI/CD tools (To be defined)
- Repository host tool (To be defined)

## Conclusion:

In conclusion, among various solution approaches for decomposing the current monolithic Frontend, these two stand out as the most efficient and scalable options. Given more time, I could have provided a more comprehensive description and a detailed implementation example for this solution. However, with only half a day, I've highlighted the key aspects.
