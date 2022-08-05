import React from 'react'

export default function DeanMessage() {
    return (
        // TODO: adjust the responsiveness to the other components
        <div className="px-16 py-8 my-7">
            <div className="container mx-auto font-Josefin">
                <div className="flex flex-col gap-x-10 items-center md:items-start md:flex-row md:justify-evenly">
                    <div className="w-full min-w-[250px] max-w-[350px] xl:max-w-md mx-auto mb-14 h-96 bg-slate-100 rounded-lg md:mx-0 lg:w-7/12 xl:-ml-10 "></div>
                    <div className="w-full lg:w-7/12 max-w-lg xl:max-w-xl md:pr-10">
                        <h3 className="mb-6 font-semibold text-center text-lg sm:text-xl md:text-left md:text-2xl lg:mb-8 lg:text-3xl">
                            A Message from Our Dean
                        </h3>
                        <p className="min-w-[250px] font-normal text-md md:text-lg lg:text-xl text-justify md:indent-7">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facere eius nostrum obcaecati architecto
                            voluptatibus soluta, ea quod incidunt voluptas, id
                            iure expedita repudiandae reprehenderit cupiditate!
                            Deleniti dignissimos ad quis sequi facere similique,
                            dolorum quas! Deleniti repudiandae vero quidem hic,
                            molestiae dicta perspiciatis sit odio porro
                            assumenda fuga repellat harum accusantium saepe
                            nostrum consequatur blanditiis reprehenderit
                            excepturi minima reiciendis quia! Recusandae
                            accusamus consequatur ut alias laboriosam itaque
                            officiis perspiciatis beatae mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
