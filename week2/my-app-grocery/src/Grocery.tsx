type Props = {
    name : String,
    quantity : number,
    key : string
}

export const Grocery = (props : Props) => {
    console.log(props);
    return (
      <div>
        <span>{props.name}</span>
        <div>
          <button> - </button>
          <span>{props.quantity}</span>
          <button> + </button>
        </div>
      </div>
    );
  };

  