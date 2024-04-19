// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ToggleMenuButton({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <>
            {/* fixed at right middle in half capsule shape */}
            <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-10">
                <button
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-l-full rounded-r-2xl shadow-lg"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >

                    {isMenuOpen ? (
                        <>
                            <div className="z-50 flex flex-col -space-y-[1.3rem] pl-1">
                                <img src="/spoon.svg" alt="loading" className="z-50 w-[2rem]" />
                                <img src="/fork.svg" alt="loading" className="z-50 w-[2rem]" />
                                <img src="/spoon.svg" alt="loading" className="z-50 w-[2rem]" />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="z-50 flex pl-1">
                                <img src="/knife_fork.svg" alt="loading" className="z-50 w-[2rem]" />
                            </div>
                        </>
                    )}
                </button>
            </div>
        </>
    )
}

// example
// const [isMenuOpen, setIsMenuOpen] = React.useState(false);
// return (
//   <>
//     <div className="relative w-screen h-screen wrapper overflow-x-hidden">
//       <div className="absolute z-0 w-screen h-screen bg-pink-300 svg-background">Menu button...</div>
//       <ToggleMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
//       {/* flex j-c i-c */}
//       {/* <div className="flex justify-center items-center w-screen h-screen">
//       </div> */}
//     </div>
//   </>
// );

