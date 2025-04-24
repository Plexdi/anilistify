import EmptyButton from "./EmptyButton";
import FilledButton from "./FilledButton";
import { useNavigate } from 'react-router-dom';

function HomeComponent(){
    const navigate = useNavigate();
    return(
        <div>
            <nav className="text-[white] grid grid-cols-2">
                <div className="flex justify-evenly">
                    <button className="border-none">AniList</button>
                    <button className="border-none">Home</button>
                    <button className="border-none">Browse</button>
                    <button className="border-none">Popular</button>
                </div>
                <div className="flex  justify-end gap-5">
                    <FilledButton 
                        text={"Sign up"}
                    />
                    <EmptyButton 
                        text={"login"}
                    />
                </div>
            </nav>
            <div className="flex h-[100vh]">
                <div>
                    <img 
                    src="/Tanjiro_Kamado_Render_01.webp" 
                    alt="Render"
                    className="h-[850px] w-[1000px]"
                    />
                </div>
                <div className="text-white flex flex-col justify-center w-full">
                    <div className="font-bold text-8xl">
                        STORE YOUR ANIME LIST
                    </div>
                    <div>
                        Store thousands of anime anywhere and anytime
                    </div>
                    <div>
                        <FilledButton 
                            text={"Get Started"}
                            onClick={() => navigate('/signup')}

                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default HomeComponent;
