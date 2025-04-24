function FilledButton(props){
    return (
        <div className=" flex bg-red-700 h-9 w-24 items-center justify-center rounded-md">
            <button>{props.text}</button>
        </div>
    )
}

export default FilledButton;