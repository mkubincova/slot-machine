function Spin({data}){

    //add color based on item value e.g. cherry -> .red
    const reelClass = (item) => {
        switch (item){
        case "lemon":
            return "reel yellow";
        case "apple":
            return "reel green";
        case "cherry":
            return "reel red";
        case "banana":
            return "reel yellow-dark";
        default:
            return "reel"
        }
    }
    return(
      <div className="spin">
        <div className={reelClass(data.reel1)}>{!data ? "Loading..." : data.reel1}</div>
        <div className={reelClass(data.reel2)}>{!data ? "Loading..." : data.reel2}</div>
        <div className={reelClass(data.reel3)}>{!data ? "Loading..." : data.reel3}</div>
      </div>
    )
}

export default Spin