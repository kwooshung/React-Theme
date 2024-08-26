import { renderHook } from '@testing-library/react-hooks';
import useThemesContext from './useThemesContext';
import ThemesProvider from './themesProvider';
import { useThemes } from 'lomind-react';

// 模拟 useThemes 钩子
vi.mock('lomind-react', () => ({
  useThemes: vi.fn()
}));

describe('useThemesContext', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('在没有 ThemesProvider 的情况下使用 useThemesContext 应该抛出错误', () => {
    const { result } = renderHook(() => useThemesContext());

    expect(result.error).toEqual(new Error('useThemeContext must be used within a ThemesProvider'));
  });

  it('在 ThemesProvider 中正确获取上下文', () => {
    const mockContextValue = {
      themeValue: 'light',
      themeName: 'light',
      setTheme: vi.fn(),
      addTheme: vi.fn(),
      getAvailableThemes: vi.fn().mockReturnValue(['light', 'dark'])
    };

    (useThemes as any).mockReturnValue(mockContextValue);

    const wrapper = ({ children }: any) => (
      <ThemesProvider defaultValue='light' list={['light', 'dark']}>
        {children}
      </ThemesProvider>
    );

    const { result } = renderHook(() => useThemesContext(), { wrapper });

    expect(result.current).toBe(mockContextValue);
    expect(result.current.themeValue).toBe('light');
    expect(result.current.themeName).toBe('light');
    expect(result.current.getAvailableThemes()).toEqual(['light', 'dark']);
  });
});
