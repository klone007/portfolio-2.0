import React from 'react';
import {motion} from "framer-motion";

type Props = {
    
};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0
     w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10
     hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img
            initial={{
                y: -100,
                opacity:0
            }}
            transition={{
                duration:1.2
            }}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEHBhIQEREQEBIQEBUVFhAQDw8OFRUYFRIYGBcTFRcYHigjJBslGxkYITEmJSorLi4uGB8zODMsNygtLisBCgoKDg0OGhAQGi0lICUtLS8tKy8tLS0tLS0vLS0tLS8tLS0tLTAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBBAUDCAL/xAA/EAACAQIDAwgHBQYHAAAAAAAAAQIDEQQFBhIhMQdBUWFxgZGhExQiMlKCwSNiorHRQnJzkrLCFSUzVGPS4f/EABoBAQACAwEAAAAAAAAAAAAAAAADBAIFBgH/xAArEQEAAgIBAwMCBgMBAAAAAAAAAQIDEQQFEiExQVFhcRMiIzIzgZGx8BT/2gAMAwEAAhEDEQA/ALsIWYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEez/VdPJcWqThOpLZUnstRST4b3z7j1c4/Dtmr3ROodDJM5pZ1hnOk3eO6UJbpRfX1dYQ5sF8VtWdE8QgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAArLlFjs6i/eoQfnJfQ9bzps/o/28dC4t4fUdOKe6qpQa+VyXml4hnz6RbDv4WoeNA0s3zKnlGXTr1b7EFwik223ZRS6WzKtZtOoZVrNp1DQ05qnD6guqblCcVd0qiSlb4lZtNdneZXxzVlfHanq7ZGjZAAAAAAAAAAAAAAAAAAAAAAAAAAABFdd5nWy+hSjSk4Ko5bU48fZStFPv8iDkXtWI02nS8GPLae+N69nG0/qurh8So15upTk7OUt8o/ev0dJDjz2idWXuX06lqzbHGp/2sIuudVxymw2c4pS6aFv5akv+wluumT+naPq4mmZ7GoMO/8Amj57vqIWuVG8NvsuMObV/wAreP2MFQw6e+pN1JLqgrJPqu7/AClnj18zKzxq+ZlDdE1pUdVYZxbu6my+tSTTT7ifJH5ZT5ojsleJr2vZAAAAAAAAAAAAAAAAAAAAAAAAAAAeiOa9wnrOn5SXGjOM+73ZeT8iDPXdPs2HTMnZyIj58K3pu6Ne6da+msV65klKbd3s7L7YvZ+nmbPFbupDkeZj/DzWqiHKlG2Kwz+5UXnEyle6XPi0IvkUrZzQ/jQ/qR7C/wAj+K32XWeuZUpyiZh6/qurZ3VFRor5LuX4pSXcX8NdUXsFdU+7d5L8v9b1F6V+7hoOXzTTjHy2n3GGe2q6eci2q6W6UlJkAAAAAAAAAAAAAAAAAAAAAAAAAAAHhjcOsXg6lJ8KkJRfzJo8mNxpnjt2Xi0e0qXSdKo4vjFtPtTszWTGp07Otu6sTCweTvFekwVWl8E1Jdkl+q8y3xrbrMNB1fHrJF/mGhyqxtQw0vvzX4U/oT2YdLn81o+iF5NO2a0P41P+tCs+Wzz/AMdvsunMcXHA4GpWl7tKnKb+WLf0JKxuYhzFY34fO9Ss8RWlOXvTk5Ptk7vzZs9a8NnEa8Le5Lcv9V066rVpYibl8sPZj/c+8o8i27aU+Rbd9O5qXUFHTmX+mrbTvLZjCCi5zdr2SbS4cW2YY8c3nUIGdOZ/R1Fl/pqO0kpbMoTSU4Ste0km1w507DJjmk6kdUjAAAAAAAAAAAAAAAAAAAAAAABgDIGAKl1hhfUtS1VwVRqovn4/i2ihnrq8uq6dk7+PH08OhoHF+hzxQ5qsJR717S/J+J7x51bSHquPuw93xLp8rC/yehLoxNvGlP8AQuX9Gt6ZP6k/ZXuXVlRx1KbdlGrCTfQlJNsxrLb5a91JiFkcqmZeqaWcE/axNSMFb4V7UvJW7y5x67ttzeCu7/ZT1CDrVFGO+UmopdLbsl4l23he3qH0TgMNHLctp0lZRo04xu926Md7f5mst+azWzO52orXOpHqTOnOLfoKd4UVvXs33za6ZPf2WRtMOPsqxTjkXw0oZdiarvsTqRjHobhF7TX8yXcVuZMbiHqxykAAAAAAAAAAAAAAAAAAAAAAADzr1PQ0ZS47MW7diMcluys2+GVa91ohF/8AHq0p3vFL4dlW/U5qeq8iZ3Gvs3H/AIMWtO1lWarHey0ozS4cz60bfhc+OR+WY1LX8jizi8x6IlyoYTZlQrpfFTk/xR/uJ+TXxEtj0fJ5tT+0UyjF+qZhSqfBUi+6+/yuVqzq0S2/Ix9+K1fmE45VIbel4yXCGIpy8Yyj/cX8n7XN9O8ZtfSVU05EcN8282xlbNsJRpzqbSw6koJ9ErcXz2skuot4M/Z4mFPJxK7m1fEy99D4L0mr8LCaslUcu1wi5pLvSLl8tbUmaqPIpalZ2mHK5qf1PBrA0pfaVo3qtPfGnfdHtlv7k+kw4uLc90taqrL8JPH42nRpranVmoRXW3bf1c76kXrTERuXj6MyPLIZNlNLDw3qlBLa4bT/AGpvrbu+809791ty9b5gAAAAAAAAAAAAAAAAAAAAAAADDV1Z70+YTETGpEIzLC+o42UObjF9T4fp3HI8zj/g5Zr7ezoePl/Fxxb3eeHruhWjNcYu6IMWScd4tHszyUi9ZrLs6yoLM9J1JR3uMY1Y/K7teF0ddNoy4otH3anhWnDyYifnSqKM7lJ1SR5ln8sz0nLCTi3UWxsVE1v2JJ2lfnsuJYjP+XUtVPT+zP8Ai09PhCnCVF2knHtVj2toWpiXtTmSRLxuYTESw2IjUg7ShJSi+hp3TJK2mGN6ReJrPo4efzq181nWqyc5VpOW3w+XqsrJdSRuONki9NR7Of5XHnDb6J7yNZIquIqY2a3U/sqd1u2mk5zXYrL5mRcvJ47YVVsmvAAAAAAAAAAAAAAAAAAAAAAAAAwBxdUYT0uDVRcab3/uvj4cfE1fVcHfj749YX+n5e3J2z7ovGRzbdTCTacrrE4OVGW+19z54y4r8/E6HpObuxzin2/003PxzS8ZI/6VQVqLwWLnSlxpzlB/K7XJbRqdOmx3i9ItHu2KUjBk2o2lGzs10Peeb0xmGtiMsUlenufw8z7Ogmrl14lHbH8OerwlZ7muZlqs78wi1r1YxdH1nDOPPxXaixgyTS8Sr8nFGTHMLg5O8IsHovCpKznSVR9tRuf5NLuJeRbd5c1pJCAAAAAAAAAAAAAAAAAAAAAAAAAAB+KsFVpuL3qSaa7UeWrFo1L2J1O4V/iqLwmKlTfGErdvQ/A4/PinFkmk+zp8V4yUi0e7NGtKlNSi3Frg07Mjpe1Ld1Z1JelbRq0NDHZRSx+KlVltKc3eUou1302tYsxzsvrPlljtOOsVr6Q0aun5Q/05qXVJbL8UT058T+6E0Z/mGnKlLDztOLi+v6Mu0yVvG6ymi0W9HtCRkNXM8N6Sltr3orf1r/wlxX1Okd67jblwkXIlCu7SrvprC2/29Pyiibe3MZ66y2j6uqeIgAAAAAAAAAAAAAAAAAAAAAAAAAAItrDB7M411z+xLt/Zf5rwNJ1bB6ZI+0tv0zL645+8I7GRpG1mHrGR4xmHrGR4xYr0Y4ilsyV0/FdaMqZLY53UiZidwjtei8LiHB83B9K5mbzFkjJXuhcrbujbMXczZSjc/sqsl8La8GXqz4Vp8SvjIcO8LkmHpvjCjBPt2VcsuWzW7slp+rfCMAAAAAAAAAAAAAAAAAAAAAAAAAADwxmGjjMLKnLhNW7OhrsMMuOMlJrPuzx3mlotHsrrE0JYPFSpz3Si7dvQ11M5LNitjvNLezqMWSuSkWqRmQsph6xkeMZh6xkeMZcjP7KrTfO1JeDX6mz4E+LQnwe7RpyL6do6Zy559qaNNK8PSOc3zKEXd37dy7y7ijemt5eb8PHMr1LLmgAAAAAAAAAAAAAAAAAAAAAAAAAAAADj6hyZZnR2o2VWC3PgpL4WUebw4z13H7oXeHy5wW1P7ZQV3pVHGScZRdnFqzT60c3kx2pPbaNOhrat47qzuHrGZGTD0VTZV20kudiImfEMNI7mOOWMxd17sVZdfSzc8bD+HTU+q1jp2w1K9SdWUaFGMqletuhCCu+uXUl08C3Sk2lHny1x13aVo6H0vHTWW2laVerZ1Jrhu4Qj91Xfa2zYUp2w5flcic1vp7JIZqzJ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAB6Obm+SUc2h9pFqSW6rB7E49/Oup3RFkw0yRq0bTYeRkwzukohj9HY6g36viKFaPMq1J0prtlF2fgihbpeKfRtsfVaT/JWf6cavpDNsVK01Tt0RrQjHwW89x8GKfthajqXFj5/w6OXcnVaTTrVoU1zqnF1JdzdkvMsV43zKDL1iutY6/wCUzyPT2HyOD9DD25e9Vm9upPtl0dSsl0FitIrHhps2e+ad3l1TJCyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAD0ZPBgABkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAB//9k="
            alt=""
        />
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">CEO of BI3D</h4>
            <p className="font-bold text-2xl mt-1">BI3D</p>
            <div className="flex space-x-2 my-2">
                <img 
                    className="h-10 w-15 rounded-full"
                    src="https://i.pinimg.com/originals/94/ae/2d/94ae2dcd4fa410811cab4e1fbb403340.png"/>
                <img 
                    className="h-10 w-15 rounded-full"
                    src="https://i.pinimg.com/originals/94/ae/2d/94ae2dcd4fa410811cab4e1fbb403340.png"/>
                <img 
                    className="h-10 w-15 rounded-full"
                    src="https://i.pinimg.com/originals/94/ae/2d/94ae2dcd4fa410811cab4e1fbb403340.png"/>
            </div>
            <p className="uppercase py-5 text-gray-300">Started work.. -Ended...</p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Summary</li>
                <li>Summary</li>
                <li>Summary</li>
                <li>Summary</li>
                <li>Summary</li>
            </ul>
        </div>

        
    </article>
  )
}

export default ExperienceCard