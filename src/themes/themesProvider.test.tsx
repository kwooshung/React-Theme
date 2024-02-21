import { render, screen } from '@testing-library/react';
import ThemesProvider from './themesProvider';
import ThemesContext from './themesContext';

describe('ThemesProvider 组件测试', () => {
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

  it('正确渲染子元素', () => {
    render(
      <ThemesProvider def='light' list={['light', 'dark']}>
        <div>测试内容</div>
      </ThemesProvider>
    );
    expect(screen.getByText('测试内容')).toBeInTheDocument();
  });

  it('ThemesContext.Provider 正确传递值', () => {
    const TestConsumer = () => <ThemesContext.Consumer>{({ name }) => <div>当前主题: {name}</div>}</ThemesContext.Consumer>;

    render(
      <ThemesProvider def='light' list={['light', 'dark']}>
        <TestConsumer />
      </ThemesProvider>
    );

    expect(screen.getByText(/^当前主题:/)).toHaveTextContent('当前主题: light');
  });
});
