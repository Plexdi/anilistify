function EmptyButton(props){
    return (
        <div className=" flex h-9 w-24 border-solid border-[1px] border-gray-100 items-center justify-center rounded-md hover:bg-gray-100 hover:text-black transition ease-in-out duration-500 hover:scale-105 hover:bg-gray-100">
            <button>{props.text}</button>
        </div>
    )
}

export default EmptyButton;