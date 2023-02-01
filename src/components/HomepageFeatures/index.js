import { translate } from '@docusaurus/Translate';
import clsx from 'clsx';
import React from 'react';
import { FeatureList, TextFeatureList } from './feature.list';
import styles from './styles.module.css';

function Feature({ Svg, i18n }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
      <h3>{translate({
          id: `features.${i18n}.title`
        })}</h3>
        <p>{translate({
          id: `features.${i18n}.description`
        })}</p>
      </div>
    </div>
  );
}

function TextFeature({ feature }) {
  return (
    <div className={clsx('col col--4', styles.textFeature)}>
      <div className="text--center">
        <h3>{translate({
          id: `features.${feature}.title`
        })}</h3>
        <p>{translate({
          id: `features.${feature}.description`
        })}</p>
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
          <div className={clsx('col col--12', styles.title)}><h2 className='text--center'>
     
              {translate({id: "features.title.title"})}
          </h2>
          </div>
          {TextFeatureList.map((feature, idx) => (
            <TextFeature key={idx} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
