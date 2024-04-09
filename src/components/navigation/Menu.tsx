import { useState } from 'react';
import { SegmentedControl} from '@mantine/core';
import classes from './Menu.module.css';
import {LinkType} from '@/config/links';
import {NavLink} from 'react-router-dom';


export type MenuProps = {
  items: LinkType[]
}
export const Menu = ({ items }: MenuProps) => {
  const [section, setSection] = useState<'account' | 'general'>('account');
  const [active, setActive] = useState('Billing');
  const tabs = {
    account: items,
    general: [],
  }
  const links = tabs[section].map((item) => (
    <NavLink
      className={classes.link}
      data-active={item.label === active || undefined}
      to={item.url}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      {/*<item.icon className={classes.linkIcon} stroke={1.5} />*/}
      <span>{item.label}</span>
    </NavLink>
  ));

  return (
    <>
      <SegmentedControl
        value={section}
        onChange={(value: any) => setSection(value)}
        transitionTimingFunction="ease"
        fullWidth
        data={[
          { label: 'Account', value: 'account' },
          { label: 'System', value: 'general' },
        ]}
      />
      <div className={classes.navbarMain}>{links}</div>
    </>
  );


}
