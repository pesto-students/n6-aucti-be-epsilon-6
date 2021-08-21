import React from 'react'

function Filter() {
    return (
        <div className="w-1/5 h-full p-3 flex-col justify-center rounded hover:shadow-lg">
            <div className="align-center font-sofia text-3xl p-2">Filter Title</div>
            <div className="align-center font-sofia text-xl ml-2">
            <ul className="font-sofia">
            <li><input type="checkbox" name="choice1"value="choice1"/> Choice 1 </li>
            <li><input type="checkbox" name="choice2"value="choice2"/> Choice 2 </li>
            <li><input type="checkbox" name="choice3"value="choice3"/> Choice 3 </li>
            <li><input type="checkbox" name="choice4"value="choice4"/> Choice 4 </li>
            <li><input type="checkbox" name="choice5"value="choice5"/> Choice 5 </li>
            </ul> 
            </div>
        </div>
    )
}

export default Filter
