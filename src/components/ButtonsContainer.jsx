import RedesButton from "./RedesButton"

function ButtonsContainer({isWhite}){

    return(
        <div className=" h-14 flex p-4 justify-end items-center pr-20">
            <RedesButton isWhite={isWhite}/>
        </div>
    )
}

export default ButtonsContainer