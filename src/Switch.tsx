import styles from './Switch.module.less';
import { ReactNode } from 'react';
import Themes from './themes';
import { IThemesContext } from './themes/interfaces';

const Switch = () => {
  const themes = (context: IThemesContext): ReactNode => {
    return (
      <div className={styles.container}>
        <h1>Theme: {context.value}</h1>
        <ul className={styles.list}>
          <li onClick={() => context.setTheme('auto')}>
            <input
              type='radio'
              id={`radio-auto`}
              name='themes'
              value={context.value}
              checked={context.value === 'auto'}
              onChange={(e) => {
                context.setTheme(e.target.value);
              }}
            />
            <label htmlFor={`radio-auto`}>auto</label>
          </li>
          {context.getAvailableThemes().map((theme: string) => (
            <li onClick={() => context.setTheme(theme)} className={context.value === theme ? styles.active : undefined} key={theme}>
              <input
                type='radio'
                id={`radio-${theme}`}
                name='themes'
                value={theme}
                checked={context.value === theme}
                onChange={(e) => {
                  context.setTheme(e.target.value);
                }}
              />
              <label htmlFor={`radio-${theme}`}>{theme}</label>
            </li>
          ))}
        </ul>

        {['auto', 'light', 'dark'].includes(context.value) && (
          <label htmlFor={styles.checkbox}>
            <input
              type='checkbox'
              id={styles.checkbox}
              checked={context.name === 'dark'}
              onChange={() => {
                context.setTheme(context.name === 'light' ? 'dark' : 'light');
              }}
            />
            <div className={styles.toggle}>
              <div className={styles.cloud} />
              <div className={styles.star} />
              <div className={styles.sea} />
              <div className={styles.mountains} />
            </div>
          </label>
        )}
      </div>
    );
  };

  return <Themes>{themes}</Themes>;
};

export default Switch;
