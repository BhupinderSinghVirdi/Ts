type Props = {
    title : string,
    totalItems : number
}


export const Header = (props : Props) => {
    return (
      <header className="app-Header">
        <h1>{props.title}</h1>
        <span className='stats'>Grocery List: {props.totalItems}</span>
      </header>
    );
  };