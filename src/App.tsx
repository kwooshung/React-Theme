import ThemesProvider from './themes/themesProvider';
import Switch from './Switch';

/**
 * @zh 主题列表
 * @en Theme list
 */
const ThemeList = ['light', 'dark', 'blue', 'green'];

const App = () => {
  return (
    <>
      <ThemesProvider def='auto' list={ThemeList}>
        <Switch />
      </ThemesProvider>
    </>
  );
};

export default App;
