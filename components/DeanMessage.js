import React from 'react'

export default function DeanMessage() {
    return (
        // TODO: add animation
        <div className="px-8 my-20 sm:px-12 md:px-16">
            <div className="container flex flex-col-reverse md:flex-row mx-auto font-Josefin lg:justify-between">
                <div className="px-4 md:mx-0 md:px-0 md:w-6/12 xl:w-7/12 sm:max-w-2xl 2xl:max-w-4xl">
                    <h2 className="mb-8 font-semibold text-center text-2xl md:text-left lg:mb-14 lg:text-3xl xl:text-4xl">
                        A Message from Our Dean
                    </h2>
                    <div className="text-justify text-lg font-light line-height-7 indent-7 lg:text-xl xl:text-2xl">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse sit totam doloribus quidem recusandae
                            nesciunt? Ex ipsa architecto aliquam consequatur
                            saepe enim officiis illo debitis laboriosam error
                            vero facere sunt, provident modi ipsam deserunt
                            voluptas molestiae! Magni iste delectus soluta esse
                            libero blanditiis, minus ut voluptas, rerum autem
                            aliquam consequuntur.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Impedit ut consectetur dolores repellat esse?
                            Illum incidunt blanditiis adipisci repellat, dolore
                            tempore repudiandae doloribus ipsam vitae impedit
                            eius numquam perferendis doloremque quas, placeat
                            facere hic velit! Dicta assumenda soluta explicabo
                            sed expedita magni numquam illum iure autem! Non
                            numquam quod cupiditate?
                        </p>
                    </div>
                </div>
                <div className="mx-auto mb-10 md:ml-10 md:mr-0 lg:ml-20md:mb-0 md:w-6/12 xl:w-6/12 xl:mx-20 max-w-[450px]">
                    <img
                        alt="dean of DTETI"
                        src="https://picsum.photos/500/500"
                        className="rounded-3xl mx-auto md:mx-0"
                    />
                </div>
            </div>
        </div>
    )
}
