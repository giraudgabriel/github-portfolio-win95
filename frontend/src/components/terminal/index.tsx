export const Terminal = () => {
  return (
    <div className="terminal">
      {/* <div className="terminal__header">
        <div className="terminal__header__buttons">
          <div className="terminal__header__button terminal__header__button--red" />
          <div className="terminal__header__button terminal__header__button--yellow" />
          <div className="terminal__header__button terminal__header__button--green" />
        </div>
        <div className="terminal__header__title">Terminal</div>
      </div> */}
      <div className="terminal__body">
        <div className="terminal__body__content">
          <div className="terminal__body__content__line">
            <span className="terminal__body__content__line__text">Welcome to the terminal</span>
          </div>
          <div className="terminal__body__content__line">
            <span className="terminal__body__content__line__text">Type 'help' to see available commands</span>
          </div>
        </div>
        <div className="terminal__body__input">
          <span className="terminal__body__input__text"></span>
          <textarea className="terminal__body__input__input" />
        </div>
      </div>
    </div>
  );
};
