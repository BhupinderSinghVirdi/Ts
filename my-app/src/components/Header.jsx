export const Header = (props) => {
    return (
      <header>
        <h1>{props.title}</h1>
        <span className='stats'>Grocery List: {props.totalItems}</span>
      </header>
    );
  };