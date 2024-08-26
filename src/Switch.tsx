import styles from './Switch.module.less';
import useThemesContext from './themes/useThemesContext';

const Switch = () => {
  const { themeValue, themeName, setTheme, getAvailableThemes } = useThemesContext();

  return (
    <div className={styles.container}>
      <h1>Theme: {themeValue}</h1>
      <ul className={styles.list}>
        <li onClick={() => setTheme('auto')}>
          <input
            type='radio'
            id={`radio-auto`}
            name='themes'
            value={themeValue}
            checked={themeValue === 'auto'}
            onChange={(e) => {
              setTheme(e.target.value);
            }}
          />
          <label htmlFor={`radio-auto`}>auto</label>
        </li>
        {getAvailableThemes().map((theme: string) => (
          <li onClick={() => setTheme(theme)} className={themeValue === theme ? styles.active : undefined} key={theme}>
            <input
              type='radio'
              id={`radio-${theme}`}
              name='themes'
              value={theme}
              checked={themeValue === theme}
              onChange={(e) => {
                setTheme(e.target.value);
              }}
            />
            <label htmlFor={`radio-${theme}`}>{theme}</label>
          </li>
        ))}
      </ul>

      {['auto', 'light', 'dark'].includes(themeValue) && (
        <label htmlFor={styles.checkbox}>
          <input
            type='checkbox'
            id={styles.checkbox}
            checked={themeName === 'dark'}
            onChange={() => {
              setTheme(themeName === 'light' ? 'dark' : 'light');
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

export default Switch;
