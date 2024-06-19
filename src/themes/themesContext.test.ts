import ThemesContext from './themesContext';

describe('ThemesContext', () => {
  it('ThemesContext 被成功创建', () => {
    expect(ThemesContext).not.toBeUndefined();
  });

  it('ThemesContext 默认值符合预期', () => {
    // 检查 ThemesContext 是否具有预期的默认值
    const contextDefaultValue = (ThemesContext as any)._currentValue;
    expect(contextDefaultValue.value).toEqual('auto');
    expect(contextDefaultValue.name).toEqual('auto');
    expect(contextDefaultValue.setTheme).toBeInstanceOf(Function);
    expect(contextDefaultValue.addThemes).toBeInstanceOf(Function);
    expect(contextDefaultValue.getThemeValue()).toEqual('auto');
    expect(contextDefaultValue.getThemeName()).toEqual('auto');
    expect(contextDefaultValue.getThemesAvailable()).toEqual(['light', 'dark']);
  });
});
