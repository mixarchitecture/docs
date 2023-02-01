import clsx from 'clsx';
import React from 'react';
import { FeatureList, TextFeatureList } from './feature.list';
import styles from './styles.module.css';

function Feature({ Svg, title, description }) {
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

function KeyFeatureTitle({ lang }) {
  if (lang == "en") return "Key Features";
  if (lang == "tr") return "Ana Özellikler";
  return "Key Features";
}

function TextFeature({ title, description }) {
  return (
    <div className={clsx('col col--4', styles.textFeature)}>
      <div className="text--center">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures({ lang = "en" }) {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList[lang].map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className={styles.divider}></div>
        <div className='row'>
          <div className={clsx('col col--12', styles.title)}><h2 className='text--center'>
            <KeyFeatureTitle
            lang={lang}
          />
          </h2></div>
          {TextFeatureList[lang].map((props, idx) => (
            <TextFeature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
