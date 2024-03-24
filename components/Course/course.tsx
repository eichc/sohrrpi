import { CourseProps } from "./course.types";
import style from "./course.module.css"
import {format} from "date-fns";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const Course = (props: CourseProps) => { {/*will need to create the graphic to show information here */}
    const currentDate = new Date();
    return (
        <div className="container mx-auto p-4"> 
            <div className="mb-4">
                <h2 className="text-center">{format(currentDate, "MMMM yyyy")}</h2>
            </div>
            <div className="grid grid-cols-7 gap-2">
                {WEEKDAYS.map((day) => {
                    return (
                        <div key={day} className="font-bold text-center">
                            {day}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}