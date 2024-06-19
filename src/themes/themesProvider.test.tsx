import { render, screen, act } from '@testing-library/react';
import ThemesProvider from './themesProvider';
import ThemesContext from './themesContext';
import { useThemes } from 'lomind-react';

// 模拟 useThemes 钩子
vi.mock('lomind-react', () => ({
  useThemes: vi.fn()
}));

describe('ThemesProvider', () => {
  beforeAll(() => {
    // 模拟 window.matchMedia
    window.matchMedia = vi.fn().mockImplementation((query) => {
      return {
        matches: false, // 你可以根据需要调整这里的返回值
        media: query,
        onchange: null,
        addListener: vi.fn(), // 这些方法可以是空的 vi 函数
        removeListener: vi.fn()
      };
    });
  });

  beforeEach(() => {
    // 清除之前的 mock 调用和设置的 cookies
    vi.clearAllMocks();
    document.cookie = '';
  });

  it('正确渲染子元素', () => {
    (useThemes as any).mockReturnValue([
      'light',
      'light',
      {
        setTheme: vi.fn(),
        addThemes: vi.fn(),
        getThemeValue: vi.fn(),
        getThemeName: vi.fn(),
        getThemesAvailable: vi.fn()
      }
    ]);

    render(
      <ThemesProvider def='light' list={['light', 'dark']} saveKey='theme' saveExpired={3600}>
        <div>测试内容</div>
      </ThemesProvider>
    );

    (expect(screen.getByText('测试内容')) as any).toBeInTheDocument();
  });

  it('ThemesContext.Provider 正确传递值', () => {
    (useThemes as any).mockReturnValue([
      'light',
      'light',
      {
        setTheme: vi.fn(),
        addThemes: vi.fn(),
        getThemeValue: vi.fn(),
        getThemeName: vi.fn(),
        getThemesAvailable: vi.fn()
      }
    ]);

    const TestConsumer = () => <ThemesContext.Consumer>{({ name }) => <div>当前主题: {name}</div>}</ThemesContext.Consumer>;

    render(
      <ThemesProvider def='light' list={['light', 'dark']} saveKey='theme' saveExpired={3600}>
        <TestConsumer />
      </ThemesProvider>
    );

    (expect(screen.getByText(/^当前主题:/)) as any).toHaveTextContent('当前主题: light');
  });

  it('调用 setCookie 时传递正确参数', () => {
    const mockSetTheme = vi.fn((value, name) => {
      document.cookie = `theme=${name}; path=/;`;
    });

    (useThemes as any).mockReturnValue([
      'light',
      'light',
      {
        setTheme: mockSetTheme,
        addThemes: vi.fn(),
        getThemeValue: vi.fn(),
        getThemeName: vi.fn(),
        getThemesAvailable: vi.fn()
      }
    ]);

    render(
      <ThemesProvider def='light' list={['light', 'dark']} saveKey='theme' saveExpired={3600}>
        <div>测试内容</div>
      </ThemesProvider>
    );

    // 模拟设置主题，确保调用 setCookie
    act(() => {
      mockSetTheme('dark', 'dark');
    });

    // 验证 cookie 是否被正确设置
    expect(document.cookie).toContain('theme=dark');
  });

  it('切换主题时更新 context 值', () => {
    let contextValue: any;
    const mockSetTheme = vi.fn((value, name) => {
      contextValue = { value, name };
      document.cookie = `theme=${name}; path=/;`;
    });

    (useThemes as any).mockReturnValue([
      'light',
      'light',
      {
        setTheme: mockSetTheme,
        addThemes: vi.fn(),
        getThemeValue: vi.fn(),
        getThemeName: vi.fn(),
        getThemesAvailable: vi.fn()
      }
    ]);

    const TestConsumer = () => (
      <ThemesContext.Consumer>
        {(context) => {
          contextValue = context;
          return <div>当前主题: {context.name}</div>;
        }}
      </ThemesContext.Consumer>
    );

    render(
      <ThemesProvider def='light' list={['light', 'dark']} saveKey='theme' saveExpired={3600}>
        <TestConsumer />
      </ThemesProvider>
    );

    // 模拟切换主题
    act(() => {
      contextValue.setTheme('dark', 'dark');
    });

    expect(contextValue.name).toBe('dark');
  });
});
