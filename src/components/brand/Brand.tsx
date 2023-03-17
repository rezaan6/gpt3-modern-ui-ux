import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';
import Image from 'next/image';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <Image src={google} alt="google"/>
    </div>
    <div>
      <Image src={slack} alt="slack" />
    </div>
    <div>
      <Image src={atlassian} alt="atlassian" />
    </div>
    <div>
      <Image src={dropbox} alt="dropbox" />
    </div>
    <div>
      <Image src={shopify} alt="shopify" />
    </div>
  </div>
);

export default Brand;
