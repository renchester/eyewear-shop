function ThemeSwitcher() {
  return (
    <div className="switch">
      <input className="switch__input" type="checkbox" id="themeSwitch" />
      <label aria-hidden="true" className="switch__label" htmlFor="themeSwitch">
        On
      </label>
      <div aria-hidden="true" className="switch__marker" />
    </div>
  );
}

export default ThemeSwitcher;
