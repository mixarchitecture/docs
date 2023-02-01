import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Decompose, Decompose thoroughly!',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        Mix Architecture is a modular architecture. It is a modular architecture that is easy to understand and easy to maintain.
      </>
    ),
  },
  {
    title: 'Researched, The Best!',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        Mix Architecture is a blend of the best patterns and architectural solutions. It is the best of the best. Moreover language independent!
      </>
    ),
  },
  {
    title: 'Test, Test, Test...',
    Svg: require('@site/static/img/4.svg').default,
    description: (
      <>
        Mix Architecture makes your application independent with the architectures it uses. In this way, an easily testable structure is formed.
      </>
    ),
  },
];

const TextFeatureList = [
  {
    title: 'Frontend Supported',
    description: (
      <>
        Mix Architecture is frontend supported. It offers architectural and pattern-based solutions suitable for the frontend area.
      </>
    ),
  },
  {
    title: 'Open Source',
    description: (
      <>
        Mix Architecture is open source. You can report the wrong places, express your wishes, ask questions to the community or use it for free.
      </>
    ),
  },
  {
    title: 'Real Use Cases',
    description: (
      <>
        Mix Architecture is have real use cases. You can see the real use cases of Mix Architecture in the Examples section or you can request an example of your choice.
      </>
    ),
  },
  {
    title: 'Language Independent',
    description: (
      <>
        Mix Architecture is language independent. You can use it in any language you want. It is not limited to a specific language.
      </>
    ),
  },
  {
    title: 'You Are in Control',
    description: (
      <>
      Mix Architecture ensures that frameworks work for you, not you for frameworks. You are in control of the frameworks you use.
      </>
    ),
  },
  {
    title: 'Whatever You Want',
    description: (
      <>
      Mix Architecture prevents a packet, protocol or anything from interfering with your logic and parses it. You can even use many of them at the same time.
      </>
    ),
  }
]

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function TextFeature({title, description}) {
  return (
    <div className={clsx('col col--4', styles.textFeature)}>
      <div className="text--center">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className={styles.divider}></div>
        <div className='row'>
          <div className={clsx('col col--12', styles.title)}><h2 className='text--center'>Key Features</h2></div>
          {TextFeatureList.map((props, idx) => (
            <TextFeature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
